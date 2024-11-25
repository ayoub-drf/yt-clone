import PlayVideo from "../../components/PlayVideo/PlayVideo"
import Recommended from "../../components/Recommended/Recommended"
import "./Video.css"
import { useParams } from 'react-router-dom';


const Video = () => {
  const {categoryID, videoID} = useParams();

  return (
    <div className="play-container">
      <PlayVideo videoID={videoID} />
      <Recommended categoryID={categoryID} />
    </div>
  )
}

export default Video