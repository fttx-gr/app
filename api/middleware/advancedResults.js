// Kinda re-wrote this to use supabase's database, it was a middleware for mongo, it's not in use but I'll leave it here for future use.
const { supabase } = require("../supabase");

const advancedResults = table => async (req, res, next) => {
  // Copy req.query
  let reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ["select", "sort", "page", "limit"];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach(param => delete reqQuery[param]);

  // Select Fields
  if (req.query.select) {
    // NOT DONE
  }

  // Sort
  if (req.query.sort) {
    // note done
  }

  // Pagination
  const { count: total } = await supabase
    .from(table)
    .select("*", { count: "exact" });
  const page = Number(req.query.page) || 1;
  let limit;
  if (req.query.limit == 0) limit = total;
  else limit = Number(req.query.limit) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit - 1;
  const { data: results } = await supabase
    .from(table)
    .select("*")
    .limit(limit)
    .range(startIndex, endIndex)
    .match(reqQuery);

  // Pagination result
  const pagination = {};

  // if last index is less than total, display information about the next page
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  // if the startindex is more than 0, display information about the previous page
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination: results.length ? pagination : null,
    data: results
  };

  next();
};

module.exports = advancedResults;
