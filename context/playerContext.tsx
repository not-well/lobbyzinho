import { Queue } from '@/shared/classes/Queue';
import { Player } from '@/shared/types/Player';
import {
  createContext,
  FunctionComponent,
  ReactNode,
  useMemo,
  useReducer,
} from 'react';

function playerReducer(prevState: any, action: any) {
  switch (action.type) {
    case 'SET_QUEUE':
      return {
        ...prevState,
        playersQueue: action.queue,
      };
    case 'ENQUEUE':
      const newQueue: Queue<Player> = prevState.playersQueue;
      newQueue.enqueue(action.player);

      return {
        ...prevState,
        playersQueue: newQueue,
      };
    default:
      throw new Error("Action don't exists");
  }
}

export const PlayerProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(playerReducer, defaultValue);

  const playerMethods = useMemo(
    () => ({
      setPlayersQueue: (queue: Queue<Player>): void =>
        dispatch({ type: 'SET_QUEUE', queue }),
      enqueuePlayer: (player: Player): void =>
        dispatch({ type: 'ENQUEUE', player }),
    }),
    []
  );

  return (
    <PlayerContext.Provider value={{ ...playerMethods, ...state }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;

const defaultValue = {
  playersQueue: new Queue<Player>([]),
};

export const PlayerContext = createContext({
  ...defaultValue,
  setPlayersQueue: (queue: Queue<Player>): void => {},
  enqueuePlayer: (player: Player): void => {},
});
