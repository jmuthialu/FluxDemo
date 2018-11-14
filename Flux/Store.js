import EventEmitter from 'EventEmitter';
import Dispatcher from './Dispatcher';

const article = {
  count: 0
}

const increment = () => {
  article.count += 1;
}

const reset = () => {
  article.count = 0;
}

class ArticleStore extends EventEmitter {

  getCount() {
    return Object.assign({}, article);
  }

  addChangeListeners(callback) {
    this.addListener('CHANGE', callback);
  }

  removeChangeListeners(callback) {
    this.removeListerener('CHANGE', callback);
  }

  emitChange() {
    this.emit('CHANGE');
  }

}

const storeInstance = new ArticleStore();
export default storeInstance;

const actionhandler = (action) => {
  switch (action.type) {
    case 'INCREMENT':
      increment();
      break;
    case 'RESET':
      reset();
      break;
    default:
  }
  storeInstance.emitChange();
}

Dispatcher.register(actionhandler);


