export const getCookieExpirationUTC = (hours: number) => {
  const event = new Date();
  event.setUTCHours(event.getUTCHours() + hours);

  return event.toUTCString();
};

export const setCookie = (name: string, value: string, expireHours: number) => {
  document.cookie = `${name}=${value}; expires=${getCookieExpirationUTC(
    expireHours
  )}; path=/`;
};

export const getCookie = (name: string) => {
  const n = name + '=';
  const decodedCookie = decodeURIComponent(document.cookie); //to be careful
  const cookies = decodedCookie.split('; ');
  let cookie;

  cookies.forEach((val) => {
    if (val.includes(n)) cookie = val.substring(n.length);
  });

  return cookie;
};

export const clearCookie = (name: string) => {
  document.cookie = `${name}=; expires=${getCookieExpirationUTC(-1)}; path=/`;
};
