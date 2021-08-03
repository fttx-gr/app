<p align="center">
  <img src="https://i.imgur.com/Khor4Qb.png">
</p>

## Installation

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn run build
$ yarn run start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Changelog (compared to previous version)

- Redesigned search bar
- Moved to supabase.io as backend
- Implemented a login system, only authenticated users can add cabinets now
- Fixed an issue not showing the correct closest Cabinet
- Along with showing the closest cabinet for a specific address, the closest Center (A.K) is also shown
- Optimized icons
- Minor design changes in Header, Stats Box, & Add Cabinet form
- Added a stats page showing the number of centers, cabinets and which ISP they're owned by
- Click to fill coordinates in the add cabinet form
- PWA
- Brotli compression
- Proxied through cloudflare

## Future plans

- [ ] Create a profile page where users can see their details (email, username, avatar, cabinets listed)
- [ ] Use Supabase Storage to store avatars
- [ ] Cache /stats page for faster loading time
- [ ] Possibly find a way to optimize loading time
