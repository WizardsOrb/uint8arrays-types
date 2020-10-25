export = toString;
/**
 * Turns a `Uint8Array` into a string.
 *
 * Supports `utf8`, `utf-8` and any encoding supported by the multibase module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {Uint8Array} array The array to turn into a string
 * @param {String} [encoding=utf8] The encoding to use
 * @returns {String}
 * @see {@link https://www.npmjs.com/package/multibase|multibase} for supported encodings other than `utf8`
 */
type Multibase =
| 'base1'
| 'base2'
| 'base8'
| 'base10'
| 'base16'
| 'base32'
| 'base32pad'
| 'base32hex'
| 'base32hexpad'
| 'base32z'
| 'base58flickr'
| 'base58btc'
| 'base64'
| 'base64pad'
| 'base64url'
| 'base64urlpad';
type Encodings = "utf8" | "ascii" | string
declare function toString(array: Uint8Array, encoding?: Multibase & Encodings): string;
