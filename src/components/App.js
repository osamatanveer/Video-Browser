import React, { Component } from 'react';
import SearchBar from './lib-components/SearchBar';
import VideosList from './lib-components/VideosList';
import youtube from '../apis/youtube';
import VideoDetails from './lib-components/VideoDetails';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className="eleven wide column">
            <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
            <VideosList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      q: term,
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
}

export default App;
