import Dispatcher from './Dispatcher';

export const articleWatched = () => {
  const action = {
    type: 'INCREMENT'
  };
  Dispatcher.dispatch(action);
}

export const reset = () => {
  const action = {
    type: 'RESET'
  };
  Dispatcher.dispatch(action);
}