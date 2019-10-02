import store from '../store';
import { setUser } from '../store/actions';

export const postLogin = ({ username, password }) => {
  return new Promise(res => {
    setTimeout(() => {
      if (username === 'Admin' && password === 'test1A') {
        store.dispatch(
          setUser({
            username
          })
        );
        res('User valid');
      } else {
        res('User invalid');
      }
    }, 1000);
  });
};
