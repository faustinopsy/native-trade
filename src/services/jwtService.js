let jwt = null;

export const setjwt = newjwt => {
  jwt = newjwt;
};

export const getjwt = () => jwt;
