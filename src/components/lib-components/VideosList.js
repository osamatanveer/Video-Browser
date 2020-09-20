import React from 'react';
import VideoItem from './VideoItem';

const VideosList = (props) => {
  const { videos, onVideoSelect } = props;

  const renderedList = videos.map(video => {
    return <VideoItem key={video.id.Id} onVideoSelect={onVideoSelect} video={video}/>;
  })

  return (
    <div className="ui relaxed divided list">{renderedList}</div>
  );
}
export default VideosList;