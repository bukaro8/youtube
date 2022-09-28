import React from 'react';
import VideoItem from './VideoItem';



const VideoList = (props) => {
  const videos=props.data.map((video)=>
  <VideoItem 
          onVideoSelect={props.onVideoSelect}
          key={video.id.videoId} 
          image={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          video={video}

  />)
  
  return (
    <div className='ui relaxed divided list'>
      {
        videos
      }
    </div>
  );
};

export default VideoList;
