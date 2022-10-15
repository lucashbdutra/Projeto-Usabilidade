const PROXY_CONFIG = [
  {
    context: ['/rest'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
