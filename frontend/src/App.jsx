import { Route, Routes } from "react-router";
import Homepage from "./Pages/Homepage";
import CreatePage from "./Pages/CreatePage";
import NoteDetailsPage from "./Pages/NoteDetailsPage";
import toast from "react-hot-toast";

 function App(){

  // testing tailwindcss
  return(<div>

        <button onClick={()=> toast.error('congarts')}  className="btn btn-link"  >click me</button>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailsPage />} />
    </Routes>
  </div>
  )
}


export default App;