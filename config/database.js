module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'revise_host'),
        port: env.int('DATABASE_PORT', 1111),
        database: env('DATABASE_NAME', 'revisedb'),
        username: env('DATABASE_USERNAME', 'revise_user'),
        password: env('DATABASE_PASSWORD', 'revise_password'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
