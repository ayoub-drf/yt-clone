import "./PlayVideo.css";
import like from "../../assets/like.png"
import disLike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import user_profile from "../../assets/user_profile.jpg"
import jack from "../../assets/jack.png"

const PlayVideo = () => {
  return (
    <div className="play-video">
      <iframe src="https://www.youtube.com/embed/YwUQ_5iV9pY?&amp;autoplay=1"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

      <h3>Kendrick Lamar - wacced out murals (Official Audio)</h3>

      <div className="play-video-info">
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

      <hr />

      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Kendrick Lamar</p>
          <span>16M Subscribers</span>
        </div>
        <button type="button">Subscribe</button>
      </div>

      <div className="vid-description">
        <p>
          Kendrick Lamar “GNX” is available now: https://my-gnx.com/
          https://www.myGNX.com https://www.instagram.com/kendricklamar
          https://twitter.com/kendricklamar
          https://www.facebook.com/kendricklamar #KendrickLamar #GNX Kendrick
          Lamar “GNX” is available
        </p>
        <hr />
        <h4>8K Comments</h4>
        <div className="comment">
          <img src="" />
          <img src="" alt="" />
          <span>0</span>
          <img src="" alt="" />
        </div>
      </div>

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
    </div>
  );
};

export default PlayVideo;
