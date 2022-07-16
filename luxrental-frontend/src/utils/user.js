export const setProfile = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return getProfile();
};

export const getProfile = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.token : null;
};

export const clearProfile = () => {
  localStorage.removeItem("user");
};
