const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const { supabase } = require("../../utils/supabase-client");
const { supabase: sbadmin } = require("../supabase");
const geocoder = require("../utils/geocoder");
const { submit } = require("../utils/discord");

// @desc      Set Cookie for server-side auth checking
// @route     POST /api/v1/auth
// @access    Public
exports.setCookie = asyncHandler(async (req, res, next) => {
  supabase.auth.api.setAuthCookie(req, res);
});

// @desc      Get logged in user
// @route     GET /api/v1/auth/me
// @access    Logged In
exports.me = asyncHandler(async (req, res, next) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user)
    return next(new ErrorResponse("Unauthorized - Not Logged in", 200));
  return res.json(user);
});

// @desc      Add a new cabinet to the database
// @route     POST /api/v1/auth/cabinet
// @access    Public
exports.createCabinet = asyncHandler(async (req, res, next) => {
  const { id, isp, position, img_url, type } = req.body;

  const cabinet = { id, isp, position, img_url, type };

  // Check if cabinet in specific coordinates already exists
  const { data: check } = await supabase
    .from("cabinets")
    .select("*")
    .eq("position", position);
  if (check)
    return next(
      new ErrorResponse(
        "Bad Request - There's already a cabinet on those coordinates",
        400
      )
    );

  const addr = await geocoder.reverse({
    lat: position.lat,
    lon: position.lng
  });

  cabinet.address = {
    full: addr[0].formattedAddress,
    streeNumber: addr[0].streetNumber,
    streetName: addr[0].streetName,
    city: addr[0].city,
    country: addr[0].country,
    countryCode: addr[0].countryCode,
    zipcode: addr[0].zipcode,
    administrationLevels: addr[0].administrationLevels
  };

  const { user } = await supabase.auth.api.getUserByCookie(req);

  cabinet.user_id = user.id;

  const { data, error } = await sbadmin
    .from("cabinets")
    .insert(cabinet)
    .single();
  if (error) return next(new ErrorResponse("Something went wrong"));

  // Notify via discord for new entry
  submit(
    `New cabinet added with ID ${data._id} \n${data.isp}/${data.type}/${
      data.img_url ? data.img_url : "No image"
    }/${data.address.full}`
  );

  res.status(201).json({
    success: true,
    data: data
  });
});
