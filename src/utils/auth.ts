import { User } from '../types';

export const loginApi = async (credentials: { username: string; password: string }): Promise<User> => {
  // Mock API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'password') {
        resolve({ username: 'admin' });
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
};
