import axios from 'axios';

const KEY = 'AIzaSyBgiCXVDvsm1UrEpxzzAGQ4bDJttNZ5088';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
    type: 'video',
  },
});
