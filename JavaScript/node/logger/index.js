const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  //error: 0,
  //warn: 1,
  //info: 2,
  //http: 3,
  //verbose: 4,
  //debug: 5,
  //silly: 6
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports=logger;

////////// Registrar el error con try .... catch

