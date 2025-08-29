import React from 'react'
import Video2 from '../assests/Video2.mp4'
import { Home, Subscriptions, YoutubeMusic, History, Playlist, Yourvideos, LikedVideos, Downloads, Trending, Musics, Gaming, News, Sports, Shorts,Dots } from '../assests/svgElements';


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
];

const Rightvideo = () => {
  return (
    <div className='videoSuggestion'>
      <div className="innervideoSuggestion">


      <div className="rightBodyHead">
          <button className="select"><b>All</b></button>
          {menuItems.map((item) => (
            <button key={item.id} className="selects"><b>{item.name}</b></button>
          ))}
        </div>

        

        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>  
                <Dots/>
        </div>

        
        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>
                <Dots/>
        </div>
        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>
                <Dots/>
        </div>
        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>
                <Dots/>
        </div>
        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>
                <Dots/>
                
        </div>
        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>
                <Dots/>
        </div>
        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>
                <Dots/>
        </div>
        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>
                <Dots/>
        </div>
        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>
                <Dots/>
        </div>
        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>
                <Dots/>
        </div>
        <div className="videosugg">
          <video src={Video2} className='videosus'controls></video>
          <div  style={{ width: '60%',  }}>
                  <h4>Ginnyand and Geogia</h4>
                  <p>Anime GO</p>
                  <p>188K views • 2 years ago</p>
                </div>
                <Dots/>
        </div>
      </div>
    </div>
  )
}

export default Rightvideo
