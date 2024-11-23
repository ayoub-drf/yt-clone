import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Video from "./pages/Video/Video"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import getData from "./config/data"

const App = () => {

// Your API key here
const apiKey = import.meta.env.VITE_YOUTUBE_KEY;
  const searchUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${apiKey}`;

// https://www.googleapis.com/youtube/v3/videos
// const searchUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key={apiKey}`;

// fetch(searchUrl)
//   .then(response => response.json())
//   .then(data => {
//     console.log("success")
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

  const [sidebar, setSidebar] = useState(true)



  return (
    <div>
      <BrowserRouter>
        <Navbar sidebar={sidebar} setSidebar={setSidebar} ></Navbar>

        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />}></Route>
          <Route path="/video" element={<Video />}></Route>

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App