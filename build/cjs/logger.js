"use strict";

exports.__esModule = true;
exports.winstonLogger = void 0;
var _winston = _interopRequireDefault(require("winston"));
var _winstonElasticsearch = require("winston-elasticsearch");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const esTransformer = logData => {
  return (0, _winstonElasticsearch.ElasticsearchTransformer)(logData);
};
const winstonLogger = (elasticsearchNode, name, level) => {
  const options = {
    console: {
      level,
      handleExceptions: true,
      json: false,
      colorize: true
    },
    elasticsearch: {
      level,
      tranformer: esTransformer,
      clientOpts: {
        node: elasticsearchNode,
        log: level,
        maxRetries: 2,
        requestTimeout: 10000,
        sniffOnStart: false
      }
    }
  };
  const consoleTransport = new _winston.default.transports.Console(options.console);
  const esTransport = new _winstonElasticsearch.ElasticsearchTransport(options.elasticsearch);
  const logger = _winston.default.createLogger({
    exitOnError: false,
    defaultMeta: {
      service: name
    },
    transports: [consoleTransport, esTransport]
  });
  return logger;
};
exports.winstonLogger = winstonLogger;
//# sourceMappingURL=logger.js.map