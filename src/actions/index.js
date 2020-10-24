import { SIGN_IN, SIGN_OUT, FETCH_ALBUMS } from './types';
import axios from 'axios';

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchAlbums = (res) => ({
  type: FETCH_ALBUMS,
  payload: res.data.albums,
});

export const initiateGetResult = (searchTerm) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem('params').split('&')[0].split('=')[1]
      }`,
    },
  };

  const res = await axios.get(
    `https://api.spotify.com/v1/search?query=${encodeURIComponent(
      searchTerm
    )}&type=album,track,artist`,
    config
  );
  dispatch({ type: FETCH_ALBUMS, payload: res.data.albums });
  //dispatch({ type: INITIATE_GET_RESULT, payload: res.data });
};
