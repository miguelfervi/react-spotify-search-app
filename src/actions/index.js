import {
  SIGN_IN,
  FETCH_ALBUMS,
  FETCH_TRACKS,
  FETCH_ARTISTS,
  ADD_ALBUMS,
  ADD_ARTISTS,
  ADD_TRACKS,
} from './types';

export const signIn = (isSignedIn) => {
  return {
    type: SIGN_IN,
    payload: isSignedIn,
  };
};

export const fetchAlbums = (albums) => ({
  type: FETCH_ALBUMS,
  payload: albums,
});

export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  payload: albums,
});

export const fetchTracks = (tracks) => ({
  type: FETCH_TRACKS,
  payload: tracks,
});

export const addTracks = (tracks) => ({
  type: ADD_TRACKS,
  payload: tracks,
});

export const fetchArtists = (artists) => ({
  type: FETCH_ARTISTS,
  payload: artists,
});

export const addArtists = (artists) => ({
  type: ADD_ARTISTS,
  payload: artists,
});
