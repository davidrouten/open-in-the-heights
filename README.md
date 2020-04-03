# README

Ruby: 2.6.5
Rails: 6.0.2
Bundler: 2.1.4
Yarn: ?

- Git clone the repository
- Run `bundle`
- Run `yarn`
- Copy `.env.sample` to `.env.development`
- Add `GOOGLE_MAPS_API_KEY` and `GOOGLE_API_KEY` keys to `.env.development`
- Run `rails db:create db:migrate db:seed` (`db:seed` requires any api key as it will grab the lat/lng coordinates using the locations' names and addresses)
- Run `rails s` and `bin/webpack-dev-server` in separate windows
