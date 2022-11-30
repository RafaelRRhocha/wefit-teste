const KEY = 'products';

export const readCart = () => {
  const response = localStorage.getItem(KEY);
  if (response) return JSON.parse(response);
  return [];
};

export const createCart = (obj: any) => {
  const dbCart = readCart();
  if (dbCart.length) return localStorage.setItem(KEY, JSON.stringify([...dbCart, obj]));
  return localStorage.setItem(KEY, JSON.stringify([obj]));
};

export const deleteProducts = (id: number) => {
  const dbCart = readCart();
  localStorage.setItem(KEY, JSON.stringify(dbCart.filter((product: any) => product.id !== id)));
};