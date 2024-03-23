import winston from 'winston';
import { ElasticsearchTransformer, ElasticsearchTransport } from 'winston-elasticsearch';
const esTransformer = logData => {
  return ElasticsearchTransformer(logData);
};
export const winstonLogger = (elasticsearchNode, name, level) => {
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
  const consoleTransport = new winston.transports.Console(options.console);
  const esTransport = new ElasticsearchTransport(options.elasticsearch);
  const logger = winston.createLogger({
    exitOnError: false,
    defaultMeta: {
      service: name
    },
    transports: [consoleTransport, esTransport]
  });
  return logger;
};
//# sourceMappingURL=logger.js.map