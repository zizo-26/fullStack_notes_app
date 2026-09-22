// creating a simple homepage for test
import axios from "axios";
import Navbar from "../Components/Navbar";
import RateLimtedUI from "../Components/RateLimtedUI";
import { useEffect, useState } from "react";
import axios from "axios";
function Homepage() {
  const [isRatedLimted, setIsRatedLimited] = useState(false); // Set to true for testing purposes
  const [Notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

 useEffect(()=> {
          
  const fatchNotes= async ()=>{

    try {
      const res=  await axios.get("http://localhost:5000/api/notes");
      console.log(res.data)
      
    } catch (error) {
       
      console.log("error fatching notes" ,error)

    }

  }

  fatchNotes();

 })

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      {isRatedLimted && <RateLimtedUI />}
    </div>
  );
}

export default Homepage;
