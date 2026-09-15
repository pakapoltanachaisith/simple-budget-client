const TOKEN_KEY = "ACCESS_TOKEN";

export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY);

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
