
/**
 * 
 * @param {string} cookieName cookie name
 * @param {any} cookieValue cookie value
 * @param {number} expDays expiration days
 */
export const setJWTCookie = (JWT, expDays) => {
    const date = new Date();
    date.setTime(date.getTime() + (expDays*24*60*60*1000));
    const expDate = `expires = ${date.toUTCString()}`;
    document.cookie = `JWT=${cookieValue}; ${expDate}`;
}
