// creating a simple homepage for test
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar";
import RateLimtedUI from "../Components/RateLimtedUI";
import { useEffect, useState } from "react";

function Homepage() {
  const [isRatedLimted, setIsRatedLimited] = useState(false); // Set to true for testing purposes
  const [Notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fatchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRatedLimited(false);
      } catch (error) {
        console.log("error fatching notes", error);
        if (error.response?.status === 429) {
          setIsRatedLimited(true);
        } else {
          toast.error("failed to loead notes");
        }
      } finally {
        setIsLoading(false);
      }

    };
    fatchNotes();
  } , []);

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      {isRatedLimted && <RateLimtedUI />}
    </div>
  );
}

export default Homepage;
