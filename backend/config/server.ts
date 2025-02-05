export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:env('PUBLIC_URL', 'https://comictsukuba-01.onrender.com'),
  app: {
    keys: env.array('APP_KEYS', ['mX8v9h2KpQyR', '4b7FsZdLwN1T']),
  },
});
