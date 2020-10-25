import { FETCH_ALBUMS, FETCH_TRACKS, FETCH_ARTISTS } from '../actions/types';
import axios from 'axios';

export const fetchData = (term) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem('params').split('&')[0].split('=')[1]
      }`,
    },
  };

  const res = await axios.get(
    `https://api.spotify.com/v1/search?query=${encodeURIComponent(
      term
    )}&type=album,track,artist`,
    config
  );
  dispatch({ type: FETCH_ARTISTS, payload: res.data.artists });
  dispatch({ type: FETCH_TRACKS, payload: res.data.tracks });
  dispatch({ type: FETCH_ALBUMS, payload: res.data.albums });
};
