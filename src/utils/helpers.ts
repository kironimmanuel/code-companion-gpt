/**
 * Capitalize the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Format a number by adding a dot every 3 digits.
 * @param {number} number - The input number.
 * @returns {string} The formatted number.
 */
export function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * Debounces a function to be executed after a specified time delay.
 * @template T - Type of the function parameters.
 * @param {Function} func - The function to be debounced.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} - The debounced function.
 */
export function debounce<T>(func: (...args: T[]) => void, delay: number): (...args: T[]) => void {
    let timeoutId: NodeJS.Timeout;

    return function (...args: T[]): void {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

/**
 * Shortens a string to a specified length.
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length of the string.
 * @returns {string} - The shortened string.
 */
export function shortenString(str: string, maxLength: number) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
}

/**
 * Splits an string at the capital letters.
 * @param {string} str - The input string.
 * @returns {string} - The split string.
 */
export function splitAtCapitalLetters(str: string) {
    return str.replace(/([A-Z])/g, ' $1').trim();
}
