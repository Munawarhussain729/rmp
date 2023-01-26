import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

const RMP_Slice = createSlice({
  name: 'music_player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
    
    },

    nextSong: (state, action) => {
   
    },

    prevSong: (state, action) => {
  
    },

    playPause: (state, action) => {
   
    },

    selectGenreListId: (state, action) => {
  
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = RMP_Slice.actions;

export default RMP_Slice.reducer;
