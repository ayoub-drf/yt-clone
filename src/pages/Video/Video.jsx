import PlayVideo from "../../components/PlayVideo/PlayVideo"
import Recommended from "../../components/Recommended/Recommended"
import "./Video.css"


const Video = () => {
  return (
    <div className="play-container">
      <PlayVideo />
      <Recommended />
    </div>
  )
}

export default Video