import { BoardPlayer, PlayerName, changeBoard, changePlayerName } from "../store/players/slice";
import { useAppDispatch } from "./store";

export const usePlayerActions = () => {
  const dispatch = useAppDispatch();

  const changedPlayerName = (e:any) => {
    const value: PlayerName = e.target.value;
    dispatch(changePlayerName(value));
  };

  const changedBoard = (board:BoardPlayer) => {
    console.log('changedBoard board :', board);
    
    dispatch(changeBoard(board));
  };

  return { changedBoard, changedPlayerName };
}