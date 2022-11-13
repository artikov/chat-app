import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  // prettifier: true,
  // base: {
  //   pid: false,
  // },
  // timestamp: () => `,"time":"${dayjs().format()}`,
});

// const pino = require("pino");
// const logger = pino({
//   transport: {
//     target: "pino-pretty",
//     options: {
//       colorize: true,
//     },
//   },
// });

export default log;
