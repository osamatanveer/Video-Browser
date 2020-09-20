import React from 'react';

const VideoDetails = ({ video }) => {
  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={`https://www.youtube.com/embed/${video ? video.id.videoId : ''}`}/>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video ? video.snippet.title : ''}</h4>
        <p>{video ? video.snippet.description : ''}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
