
/**
 * 
 * @param {string} cookieName cookie name
 * @param {any} cookieValue cookie value
 * @param {number} expDays expiration days
 */
export const setCookie = (cookieName, cookieValue, expDays) => {
    const date = new Date();
    date.setTime(date.getTime() + (expDays*24*60*60*1000));
    const exp = `expires = ${date.toUTCString()}`;
    document.cookie = `${cookieName} =  ${cookieValue}; ${exp}`;
}
