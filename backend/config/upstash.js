const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");
const dotenv = require("dotenv");

dotenv.config();

const ratelimit = new Ratelimit({
  // Configure the rate limiter to allow 5 requests per 20 seconds
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(4, "20 s"),
});

module.exports = ratelimit;
