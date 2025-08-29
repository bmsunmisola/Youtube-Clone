import React from 'react';
import home from '../assests/home.png';
import { Home, Subscriptions, YoutubeMusic, History, Playlist, Yourvideos, LikedVideos, Downloads, Trending, Musics, Gaming, News, Sports, Shorts } from '../assests/svgElements';

const BodyLeft = () => {
  // Define menu items
  const menuItems = [
    { id: 1, name: 'Home', icon: <Home/> },
    { id: 2, name: 'Short', icon: <Shorts/> },
    { id: 3, name: 'Subscription', icon: <Subscriptions/> },
    { id: 4, name: 'Youtube Music', icon: <YoutubeMusic/> },
    
  ];
  const menuItemss = [
    { id: 1, name: 'History', icon: <History/> },
    { id: 2, name: 'Playlist', icon: <Playlist/> },
    { id: 3, name: 'Watch Later', icon: <Yourvideos/> },
    { id: 4, name: 'Liked Videos', icon: <LikedVideos/> },
    { id: 4, name: 'Downloads', icon: <Downloads/> },
    // { id: 4, name: 'Sports', icon: <Home/> },
    
  ];
  const menuItemsss = [
    { id: 1, name: 'Parker burton', },
    { id: 2, name: 'Tion Wayn', },
    { id: 3, name: 'Russ million', },
    { id: 4, name: 'React Code', },
    { id: 4, name: 'Spring Microservices', },
    // { id: 4, name: 'Sports', },
    
  ];
  const menuItemssa = [
    { id: 1, name: 'Trending', icon: <Trending/> },
    { id: 2, name: 'Music', icon: <Musics/> },
    { id: 3, name: 'Gaming', icon: <Gaming/> },
    { id: 4, name: 'News', icon: <News/> },
    { id: 4, name: 'Sports', icon: <Sports/> },
    // { id: 4, name: 'Sports', icon: <Home/> },
    
  ];

  return (
    <div className='left-body'>
      <div className='innerLeft'>
        
        {menuItems.map((item) => (
         <div className='hei'>
           <div className='height' key={item.id}>
           {item.icon}
            <p className='sty'>{item.name}</p>
          </div>
         </div>
        ))}
      </div>

      <div className='innerLeft'>
        <h2 style={{paddingTop: 12,paddingBottom: 12}}>You</h2>
        {menuItemss.map((items) => (
          <div className='hei'>
            <div className='height' key={items.id}>
            {items.icon}
            <p className='sty'>{items.name}</p>
          </div>
          </div>
        ))}
      </div>

      <div className='innerLeft'>
        <h2 style={{paddingTop: 12,paddingBottom: 12}}>Subscription</h2>
        {menuItemsss.map((itemss) => (
          <div className='hei'>
            <div className='height' key={itemss.id}>
              {itemss.icon}
            <p className='sty'>{itemss.name}</p>
          </div>
          </div>
        ))}
      </div>

      <div className='innerLeft'>
        <h2 style={{paddingTop: 12,paddingBottom: 12}}>Explore</h2>
        {menuItemssa.map((itemsa) => (
          <div className='hei'>
            <div className='height' key={itemsa.id}>
              {itemsa.icon}
            <p className='sty'>{itemsa.name}</p>
          </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BodyLeft;
