import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './players/slice';


const persistencesMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
}



export const store = configureStore({
  reducer: {
    players: playerReducer,
  },
  middleware: [persistencesMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch