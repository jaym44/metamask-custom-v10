#!/usr/bin/env node
* // For testing only
const http = require('http');
const path = require('path');

const serveHandler = require('serve-handler');

const createStaticServer = (rootDirectory) => {
  return http.createServer((request, response) => {
    if (request.url.startsWith('/node_modules/')) {
      request.url = request.url.substr(30);
      return serveHandler(request, response, {
        directoryListing: false,
        public: path.resolve('./node_modules'),
      });
    }
    return serveHandler(request, response, {
      directoryListing: true,
      public: rootDirectory,
    });
  });
};

module.exports = createStaticServer;
