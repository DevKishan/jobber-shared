import winston, { Logger, exitOnError } from 'winston';
import { ElasticsearchTransformer, ElasticsearchTransport, LogData, TransformedData } from 'winston-elasticsearch';

const esTransformer = ( logData: LogData ) : TransformedData => {
    return ElasticsearchTransformer( logData );
}

export const winstonLogger = ( elasticsearchNode:string, name:string, level:string ) : Logger => {
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
    }

    const consoleTransport:winston.transports.ConsoleTransportInstance = new winston.transports.Console(options.console);
    const esTransport:ElasticsearchTransport = new ElasticsearchTransport( options.elasticsearch );
    const logger:Logger = winston.createLogger({
        exitOnError: false,
        defaultMeta: {
            service: name
        },
        transports: [ consoleTransport, esTransport ]
    });

    return logger;
}