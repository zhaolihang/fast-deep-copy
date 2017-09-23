"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** from  https://github.com/vuejs/vuex/blob/dev/src/util.js
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find(list, f) {
    return list.filter(f)[0];
}
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy(obj, cache) {
    if (cache === void 0) { cache = []; }
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // if obj is hit, it is in circular structure
    var hit = find(cache, function (c) { return c.original === obj; });
    if (hit) {
        return hit.copy;
    }
    var copy = Array.isArray(obj) ? [] : {};
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy: copy
    });
    Object.keys(obj).forEach(function (key) {
        copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
}
exports.deepCopy = deepCopy;
//# sourceMappingURL=deep-copy.js.map