export const onGetLocalStorage = (key) => {
  const listStorage = localStorage.getItem(key);
  return listStorage ? JSON.parse(listStorage) : [];
}

export const onSetLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}
