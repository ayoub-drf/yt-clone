import { useEffect, useState } from "react";
import "./Feed.css"
import axios from "axios"
import { Link } from "react-router-dom";
import { numberConvertor, apiKey } from "../../Utils/utils";
import PropTypes from "prop-types"
import moment from "moment";

const Feed = ({ category }) => {
    const [youtubeVideos, setYoutubeVideos] = useState([])

    
    const searchUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${apiKey}`;

    const getVideos = () => {
        axios.get(searchUrl).then(res => {
            setYoutubeVideos(res.data.items)
        }).catch((err) => console.log("error", err))
    };

    useEffect(() => {
        getVideos();
        
    }, [category])



  return (
    <div className="feed">
        {youtubeVideos.map((item, index) => {
            return (
                <Link key={index} className="card" to={`video/${item.snippet.categoryId}/${item.id}`}>        
                        <img src={item.snippet.thumbnails.standard.url} alt="" />
                        <h2>{item.snippet.localized.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{numberConvertor(item.statistics.viewCount)} • {moment(item.snippet.publishedAt).fromNow()}</p>
              </Link>
            )
        })}
    </div>
  )
}

Feed.propTypes = {
    category: PropTypes.number.isRequired,
  };

export default Feed