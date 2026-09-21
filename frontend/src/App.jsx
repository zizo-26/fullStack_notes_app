import { Route, Routes } from "react-router";
import Homepage from "./Pages/Homepage";
import CreatePage from "./Pages/CreatePage";
import NoteDetailsPage from "./Pages/NoteDetailsPage";
import toast from "react-hot-toast";

 function App(){

  // testing tailwindcss
  return(<div>

        <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>

        <button onClick={()=> toast.error('congarts')}  className="btn btn-outline bg-orange-700"  >click me</button>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailsPage />} />
    </Routes>
  </div>
  )
}


export default App;