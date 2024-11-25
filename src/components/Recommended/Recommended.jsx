import "./Recommended.css";
import thumbnail from "../../assets/thumbnail1.png";
import { apiKey, numberConvertor } from "../../Utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Recommended = ({ categoryID }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  const getRelatedVideos = async () => {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryID}&key=${apiKey}`;
    try {
      const res = await axios.get(url);
      const relatedVideos = res.data.items.slice(0, 17);
      setRelatedVideos(relatedVideos);

      console.log(relatedVideos);
    } catch (error) {
      console.error("Error fetching related videos:", error);
    }
  };

  useEffect(() => {
    getRelatedVideos();
  }, [categoryID]);

  return (
    <div className="recommended">

      {relatedVideos ? (
        relatedVideos.map((elem, index) => {
          return (
            <div key={index} className="side-video-list">
              <a className="small-thumbnail" href="/video/22/oVhtS60tOK4">
                <img src={elem.snippet.thumbnails.high.url} alt="" />
              </a>
              <div className="vid-info">
                <h4>{elem.snippet.title}</h4>
                <p>{elem.snippet.channelTitle}</p>
                <br />
                <p className="recommended-views">
                  {numberConvertor(elem.statistics.viewCount)} Views
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="side-video-list">
          <a className="small-thumbnail" href="/video/22/oVhtS60tOK4">
            <img src={thumbnail} alt="" />
          </a>
          <div className="vid-info">
            <h4>MOVING INTO MY DREAM APARTMENT AT 20</h4>
            <p>erica ha</p>
            <p className="recommended-views">1M Views</p>
          </div>
        </div>
      )}
    </div>
  );
};

Recommended.propTypes = {
  categoryID: PropTypes.string.isRequired,
};

export default Recommended;
