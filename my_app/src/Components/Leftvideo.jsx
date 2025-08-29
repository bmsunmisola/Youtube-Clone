import React from 'react';
import profileImg from '../assests/profile.jpg';
import { useParams } from 'react-router-dom';

const Leftvideo = () => {
  // Get videoid from URL params
  const { videoid } = useParams();

  // Fallback video ID (used if videoid is undefined)
  const defaultVideoId = 'dQw4w9WgXcQ'; // Replace with your desired default YouTube video ID
  const finalVideoId = videoid || defaultVideoId;

  // If still no valid video ID, show a loading state
  if (!finalVideoId) {
    return <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Loading video...</div>;
  }

  return (
    <div className="bodeylefta">
      <div className="bodeyleftainner">
        {/* Video Player */}
        <iframe
          className="vidoin"
          title="YouTube video player"
          src={`https://www.youtube.com/embed/${finalVideoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* Video Caption & Channel Info */}
        <div className="cap">
          <h1>Ginny and Georgia</h1>
          <div className="capp">
            <div className="capppp">
              <img src={profileImg} alt="profile" className="cationimgg" />
            </div>
            <div className="Cpa">
              <div>
                <h3>Netflix</h3>
                <p>755k subscribers</p>
              </div>
              <div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Description */}
        <div className="showmore">
          <div style={{ width: '95%' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod placeat deserunt sit, nobis perferendis sint culpa alias delectus voluptate ut soluta. Voluptate recusandae laudantium nesciunt, voluptatibus obcaecati error! Consequatur voluptas obcaecati deserunt vel cum commodi, dolores autem, et est distinctio cupiditate maiores, nisi itaque ipsa. Nam explicabo quas quae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod placeat deserunt sit, nobis perferendis sint culpa alias delectus voluptate ut soluta. Voluptate recusandae laudantium nesciunt, voluptatibus obcaecati error! Consequatur voluptas obcaecati deserunt vel cum commodi, dolores autem, et est distinctio cupiditate maiores, nisi itaque ipsa. Nam explicabo quas quae!
          </div>
        </div>

        {/* Comments Section */}
        <div className="comments">
          <h2>4,187 Comments</h2>
          <div>
            <div className="cappppp">
              <img src={profileImg} alt="profile" className="cationimggg" />
              <input
                type="text"
                className="commentsin"
                placeholder="Add a comment..."
              />
            </div>

            {[1, 2, 3, 4].map((_, index) => (
              <div className="commmmm" key={index}>
                <img src={profileImg} alt="profile" className="cationimggg" />
                <div className="scre">
                  <h3>@diepreyekunegha3250 — 9 months ago</h3>
                  <p>Who makes the best jollof rice? “Mothers!!” 😂😂😂😂</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftvideo;
