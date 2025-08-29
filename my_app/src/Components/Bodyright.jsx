import React, { useEffect, useState } from 'react';
import profile from '../assests/profile.jpg';
import { Link } from 'react-router-dom';
import { get_popular_videos } from '../Apis/Api';
import moment from 'moment';

const Bodyright = () => {
  const [vids, setVids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const response = await get_popular_videos();
        // Normalize: accept either [] or { items: [] }
        const items = Array.isArray(response) ? response : response?.items || [];
        if (!cancelled) setVids(items);
      } catch (e) {
        console.error(e);
        if (!cancelled) setErr(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []); // <- runs once; prevents infinite loop

  const menuItems = [
    { id: 1, name: 'Source Code' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Gaming' },
    { id: 4, name: 'Sports' },
    { id: 5, name: 'Entertainment' },
    { id: 6, name: 'History' },
    { id: 7, name: 'Playlists' },
    { id: 8, name: 'Subscription' },
    { id: 9, name: 'Apple' },
    { id: 10, name: 'Google' },
    { id: 11, name: 'Music' },
    { id: 12, name: 'Love' },
    { id: 13, name: 'JYP' },
    { id: 14, name: 'GYM' },
    { id: 15, name: 'Drawing' },
    { id: 16, name: 'Lana' },
  ];

  if (loading) {
    return (
      <div className="right-body">
        <div className="innerRightBody">Loading…</div>
      </div>
    );
  }

  if (err) {
    return (
      <div className="right-body">
        <div className="innerRightBody">Failed to load videos.</div>
      </div>
    );
  }

  return (
    <div className="right-body">
      <div className="innerRightBody">
        {/* Menu header */}
        <div className="rightBodyHead">
          <button className="select"><b>All</b></button>
          {menuItems.map((item) => (
            <button key={item.id} className="selects"><b>{item.name}</b></button>
          ))}
        </div>

        {/* Video grid */}
        <div className="video-content">
          {vids.map((video) => {
            // Handle both videos.list (id is string) and search.list (id.videoId)
            const id = video?.id?.videoId || video?.id;
            if (!id) return null;

            const thumb =
              video?.snippet?.thumbnails?.high?.url ||
              video?.snippet?.thumbnails?.medium?.url;

            const title =
              video?.snippet?.title ||
              video?.snippet?.description ||
              'Untitled';

            const channelTitle = video?.snippet?.channelTitle || 'Unknown channel';
            const when = video?.snippet?.publishedAt;

            return (
              <Link key={id} to={`/video/${id}`} style={{ textDecoration: 'none' }}>
                <div className="rightBodyContent">
                  <img src={thumb} alt={title} className="bodyVideo" />
                  <div className="Captionn">
                    <img src={thumb} alt={`${channelTitle} avatar`} className="cationimg" />
                    <div className="video-info" style={{ height: 120, width: 390 }}>
                      <h4>{title.slice(0, 70)}</h4>
                      <p>{channelTitle}</p>
                      {when && <p>345k • {moment(when).fromNow()}</p>}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bodyright;
