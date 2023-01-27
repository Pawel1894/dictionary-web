export function saveItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string) {
  const val = localStorage.getItem(key);
  if (val) return JSON.parse(val);
  else return null;
}
