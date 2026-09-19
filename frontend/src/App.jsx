import { Route, Routes } from "react-router";
import Homepage from "./Pages/Homepage";
import CreatePage from "./Pages/CreatePage";
import NoteDetailsPage from "./Pages/NoteDetailsPage";

 function App(){

  return(<div>


    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailsPage />} />
    </Routes>
  </div>
  )
}


export default App;