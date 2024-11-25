import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Video from "./pages/Video/Video"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  const [sidebar, setSidebar] = useState(true)

  return (
    <div>
      <BrowserRouter>
        <Navbar sidebar={sidebar} setSidebar={setSidebar} ></Navbar>

        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />}></Route>
          <Route path="/video/:categoryID/:videoID" element={<Video />}></Route>

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App