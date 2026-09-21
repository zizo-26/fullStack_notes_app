const ratelimit = require("../config/upstash");

const rateLimit = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit-key");

    if (!success) {
      return res.status(429).json({ message: "Too many requests" });
    }

    next();
  } catch (error) {
    console.error("Rate limit middleware error:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = rateLimit;