import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type PlayerName = string;
export type BoardPlayer = Array<any>;

export interface Player {
  name: PlayerName;
  board: Array<any>
}

const initialState: Player = (() => {
  const persistedState = localStorage.getItem('__redux__state__');
  console.log('persistedState', persistedState)
  return persistedState ? JSON.parse(persistedState).players : {name: '', board: []};
})(); 

export const playersSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeBoard: (state, action: PayloadAction<BoardPlayer>) => {
      state.board = action.payload;
    },
    changePlayerName: (state, action: PayloadAction<PlayerName>) => {
      state.name = action.payload;
    },
  }
});

export default playersSlice.reducer;
export const { changeBoard, changePlayerName } = playersSlice.actions;