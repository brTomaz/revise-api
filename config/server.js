module.exports = ({ env }) => ({
  host: env('HOST', 'host'),
  port: env.int('PORT', 0000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'admin_jwt_secret'),
    },
  },
});
