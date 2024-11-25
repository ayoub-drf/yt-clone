import "./PlayVideo.css";
import like from "../../assets/like.png";
import disLike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import user_profile from "../../assets/user_profile.jpg";
import jack from "../../assets/jack.png";
import { apiKey, numberConvertor } from "../../Utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";

const PlayVideo = ({ videoID }) => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [channelDetail, setChannelDetail] = useState(null);
  const [commentDetail, setCommentDetail] = useState([]);

  const getVideoDetails = async () => {
    const urlVideoEndPoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${apiKey}`;
    try {
      const res = await axios.get(urlVideoEndPoint);
      const urlChannelEndPoint = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${res.data.items[0].snippet.channelId}&key=${apiKey}`;
      try {
        const res = await axios.get(urlChannelEndPoint);
        setChannelDetail(res.data.items[0]);
      } catch (err) {
        console.log(err);
      }
      setVideoDetail(res.data.items[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const getComments = async () => {
    const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoID}&key=${apiKey}`;
    try {
      const res = await axios.get(url);
      setCommentDetail(res.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVideoDetails();
    getComments();
  }, [videoID]);



  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoID}?&amp;autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      {videoDetail ? (
        <>
          <div className="play-video-info">
            <h3>{videoDetail.snippet.localized.title}</h3>

            <p>
              {numberConvertor(videoDetail.statistics.viewCount)} Views •{" "}
              {moment(videoDetail.snippet.publishedAt).fromNow()}{" "}
            </p>
            <div>
              <span>
                <img src={like} alt="" />
                {numberConvertor(videoDetail.statistics.likeCount)}
              </span>
              <span>
                <img src={share} alt="" />
                Share
              </span>
              <span>
                <img src={save} alt="" />
                Save
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className="play-video-info">
          <h3>Simple title</h3>
          <p>697K Views • 5 hours ago</p>
          <div>
            <span>
              <img src={like} alt="" />
              77K
            </span>
            <span>
              <img src={disLike} alt="" />2
            </span>
            <span>
              <img src={share} alt="" />
              Share
            </span>
            <span>
              <img src={save} alt="" />
              Save
            </span>
          </div>
        </div>
      )}
      <hr />

      <div className="publisher">
        <img
          src={
            channelDetail ? channelDetail.snippet.thumbnails.default.url : jack
          }
          alt=""
        />
        <div>
          <p>
            {channelDetail
              ? channelDetail.snippet.title
              : "simple channel name"}{" "}
          </p>
          <span>
            {numberConvertor(
              channelDetail ? channelDetail.statistics.subscriberCount : 17e3
            )}{" "}
            Subscribers
          </span>
        </div>
        <button type="button">Subscribe</button>
      </div>

      <div className="vid-description">
        <p>
          {videoDetail
            ? videoDetail.snippet.localized.description.slice(0, 200) + "..."
            : "description"}
        </p>
        <hr />
        <h4>
          {videoDetail
            ? numberConvertor(videoDetail.statistics.likeCount)
            : "7K"}{" "}
          Comments
        </h4>
        {/* <div className="comment">
          <img src="" />
          <img src="" alt="" />
          <span>0</span>
          <img src="" alt="" />
        </div> */}
      </div>

      {
        commentDetail
        ?
        <>
        {commentDetail.map((elem, index) => {
          return (
            <div key={index} className="comment">
            <img src={elem.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
              <h3>
                {elem.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(elem.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
              </h3>
              <p>{elem.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>0</span>
                <img src={disLike} alt="" />
              </div>
            </div>
          </div>
          )
        })}
        </>
        :
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              @dennisrodriguez7637 <span>a minute ago</span>
            </h3>
            <p>Love from Australia</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>0</span>
              <img src={disLike} alt="" />
            </div>
          </div>
        </div>

      }
    </div>
  );
};

PlayVideo.propTypes = {
  videoID: PropTypes.string.isRequired,
};

export default PlayVideo;
