export const authMock = (login, password) =>
  new Promise((resolve, reject) => {
    if (login === 'root' && password === 'root') {
      resolve({ token: 'secret-token' });
    } else {
      reject({ status: 401 });
    }
  });
