// creating a simple homepage for test
import Navbar from "../Components/Navbar";
import RateLimtedUI from "../Components/RateLimtedUI";
import { useState } from "react";
function Homepage() {
  const [isRatedLimted, setIsRatedLimited] = useState(false); // Set to true for testing purposes
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      {isRatedLimted && <RateLimtedUI />}
    </div>
  );
}

export default Homepage;
