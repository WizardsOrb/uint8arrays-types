export = fromString;
/**
 * Create a `Uint8Array` from the passed string
 *
 * Supports `utf8`, `utf-8` and any encoding supported by the multibase module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {String} string
 * @param {String} [encoding=utf8] utf8, base16, base64, base64urlpad, etc
 * @returns {Uint8Array}
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
type Encodings = "utf8" | string
declare function fromString(string: string, encoding?: Multibase & Encodings): Uint8Array;
