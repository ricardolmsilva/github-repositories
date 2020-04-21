module.exports = {
  name: 'github-client',
  script: 'serve',
  env: {
    PM2_SERVE_PATH: 'build',
    PM2_SERVE_PORT: 8300,
    PM2_SERVE_SPA: 'true',
    PM2_SERVE_HOMEPAGE: '/index.html',
  },
}
