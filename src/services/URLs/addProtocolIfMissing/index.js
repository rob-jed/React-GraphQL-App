/**
 * Add HTTP protocol to URL if it doesn't have one
 *
 * @param {string} url
 * @returns {string} URL with protocol
 *
 */
export default function addProtocolIfMissing(url) {
    const protocol = 'http';
    const cleanUrl = url.trim();

    if (cleanUrl.startsWith(protocol)) {
        return url;
    }

    return `${protocol}://${cleanUrl}`;
}
