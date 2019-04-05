/**
 * @typedef {string | null | undefined | false} ClassName
 */

/**
 * Concats classNames.
 *
 * @param {...ClassName} classes
 * @returns {string} concatted classNames
 *
 */
export default function classNames(...classes) {
    let res = '';
    const len = classes.length;
    for (let i = 0; i < len; i++) {
        if (classes[i]) {
            res += (res ? ' ' : '') + classes[i];
        }
    }
    return res;
}
