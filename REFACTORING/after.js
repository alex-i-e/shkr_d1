/**
 *  @s - string
 *  @a - string of one symbol
 *  @b - string of one symbol
 *  @result - number
 * */
const func = (s = '', a = '', b = '') => {
    if (s === '') {
        return -1;
    }

    const compareRegexp = new RegExp(`^(${a}|${b})$`, 'g');
    for (let i = s.length - 1; i >= 0 ; i--) {
        if (compareRegexp.test(s[i])) {
            return i;
        }
        if (i === 0) {
            return -1;
        }
    }
};