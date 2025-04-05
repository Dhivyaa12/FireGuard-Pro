if (!window._bubble_page_load_data) {
    window._bubble_page_load_data = {}
}
if (!window._bubble_page_load_data.js_execution_timings) {
    window._bubble_page_load_data.js_execution_timings = {}
}
window._bubble_page_load_data.js_execution_timings.dynamic_js_start_execution = Date.now();

if (!window._bubble_page_load_data) {
    window._bubble_page_load_data = {}
}
if (!window._bubble_page_load_data.js_execution_timings) {
    window._bubble_page_load_data.js_execution_timings = {}
}
window._bubble_page_load_data.js_execution_timings.dynamic_js_start_execution = Date.now();
window.preloaded = window.preloaded || {};
window.__code__ = window.__code__ || {};
if (!window.__code__['be933f550dadc409f0f75776ae9322da4efc70d9b0ee8a6b1db6abdda72540dd']) {
    window.__code__['be933f550dadc409f0f75776ae9322da4efc70d9b0ee8a6b1db6abdda72540dd'] = 1;

    "use strict";
    ( () => {
        var __create = Object.create;
        var __defProp = Object.defineProperty;
        var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames = Object.getOwnPropertyNames;
        var __getProtoOf = Object.getPrototypeOf
          , __hasOwnProp = Object.prototype.hasOwnProperty;
        var __esm = (fn, res) => function() {
            return fn && (res = (0,
            fn[__getOwnPropNames(fn)[0]])(fn = 0)),
            res
        }
        ;
        var __commonJS = (cb, mod) => function() {
            return mod || (0,
            cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod),
            mod.exports
        }
        ;
        var __copyProps = (to, from, except, desc) => {
            if (from && typeof from == "object" || typeof from == "function")
                for (let key of __getOwnPropNames(from))
                    !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
                        get: () => from[key],
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
            return to
        }
        ;
        var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {},
        __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
            value: mod,
            enumerable: !0
        }) : target, mod));
        var init_define_process_env = __esm({
            "<define:process.env>"() {}
        });
        var require_base64_js = __commonJS({
            "node_modules/base64-js/index.js"(exports) {
                "use strict";
                init_define_process_env();
                init_shim();
                exports.byteLength = byteLength;
                exports.toByteArray = toByteArray;
                exports.fromByteArray = fromByteArray;
                var lookup = []
                  , revLookup = []
                  , Arr = typeof Uint8Array < "u" ? Uint8Array : Array
                  , code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                for (i = 0,
                len = code.length; i < len; ++i)
                    lookup[i] = code[i],
                    revLookup[code.charCodeAt(i)] = i;
                var i, len;
                revLookup["-".charCodeAt(0)] = 62;
                revLookup["_".charCodeAt(0)] = 63;
                function getLens(b64) {
                    var len2 = b64.length;
                    if (len2 % 4 > 0)
                        throw new Error("Invalid string. Length must be a multiple of 4");
                    var validLen = b64.indexOf("=");
                    validLen === -1 && (validLen = len2);
                    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
                    return [validLen, placeHoldersLen]
                }
                function byteLength(b64) {
                    var lens = getLens(b64)
                      , validLen = lens[0]
                      , placeHoldersLen = lens[1];
                    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen
                }
                function _byteLength(b64, validLen, placeHoldersLen) {
                    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen
                }
                function toByteArray(b64) {
                    var tmp, lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1], arr = new Arr(_byteLength(b64, validLen, placeHoldersLen)), curByte = 0, len2 = placeHoldersLen > 0 ? validLen - 4 : validLen, i2;
                    for (i2 = 0; i2 < len2; i2 += 4)
                        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)],
                        arr[curByte++] = tmp >> 16 & 255,
                        arr[curByte++] = tmp >> 8 & 255,
                        arr[curByte++] = tmp & 255;
                    return placeHoldersLen === 2 && (tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4,
                    arr[curByte++] = tmp & 255),
                    placeHoldersLen === 1 && (tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2,
                    arr[curByte++] = tmp >> 8 & 255,
                    arr[curByte++] = tmp & 255),
                    arr
                }
                function tripletToBase64(num) {
                    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63]
                }
                function encodeChunk(uint8, start, end) {
                    for (var tmp, output = [], i2 = start; i2 < end; i2 += 3)
                        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255),
                        output.push(tripletToBase64(tmp));
                    return output.join("")
                }
                function fromByteArray(uint8) {
                    for (var tmp, len2 = uint8.length, extraBytes = len2 % 3, parts = [], maxChunkLength = 16383, i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength)
                        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
                    return extraBytes === 1 ? (tmp = uint8[len2 - 1],
                    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==")) : extraBytes === 2 && (tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1],
                    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=")),
                    parts.join("")
                }
            }
        });
        var require_ieee754 = __commonJS({
            "node_modules/ieee754/index.js"(exports) {
                init_define_process_env();
                init_shim();
                exports.read = function(buffer, offset, isLE, mLen, nBytes) {
                    var e, m, eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i = isLE ? nBytes - 1 : 0, d = isLE ? -1 : 1, s = buffer[offset + i];
                    for (i += d,
                    e = s & (1 << -nBits) - 1,
                    s >>= -nBits,
                    nBits += eLen; nBits > 0; e = e * 256 + buffer[offset + i],
                    i += d,
                    nBits -= 8)
                        ;
                    for (m = e & (1 << -nBits) - 1,
                    e >>= -nBits,
                    nBits += mLen; nBits > 0; m = m * 256 + buffer[offset + i],
                    i += d,
                    nBits -= 8)
                        ;
                    if (e === 0)
                        e = 1 - eBias;
                    else {
                        if (e === eMax)
                            return m ? NaN : (s ? -1 : 1) * (1 / 0);
                        m = m + Math.pow(2, mLen),
                        e = e - eBias
                    }
                    return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
                }
                ;
                exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
                    var e, m, c, eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = isLE ? 0 : nBytes - 1, d = isLE ? 1 : -1, s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
                    for (value = Math.abs(value),
                    isNaN(value) || value === 1 / 0 ? (m = isNaN(value) ? 1 : 0,
                    e = eMax) : (e = Math.floor(Math.log(value) / Math.LN2),
                    value * (c = Math.pow(2, -e)) < 1 && (e--,
                    c *= 2),
                    e + eBias >= 1 ? value += rt / c : value += rt * Math.pow(2, 1 - eBias),
                    value * c >= 2 && (e++,
                    c /= 2),
                    e + eBias >= eMax ? (m = 0,
                    e = eMax) : e + eBias >= 1 ? (m = (value * c - 1) * Math.pow(2, mLen),
                    e = e + eBias) : (m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen),
                    e = 0)); mLen >= 8; buffer[offset + i] = m & 255,
                    i += d,
                    m /= 256,
                    mLen -= 8)
                        ;
                    for (e = e << mLen | m,
                    eLen += mLen; eLen > 0; buffer[offset + i] = e & 255,
                    i += d,
                    e /= 256,
                    eLen -= 8)
                        ;
                    buffer[offset + i - d] |= s * 128
                }
            }
        });
        var require_buffer = __commonJS({
            "node_modules/node-stdlib-browser/node_modules/buffer/index.js"(exports) {
                "use strict";
                init_define_process_env();
                init_shim();
                var base64 = require_base64_js()
                  , ieee754 = require_ieee754()
                  , customInspectSymbol = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
                exports.Buffer = Buffer3;
                exports.SlowBuffer = SlowBuffer;
                exports.INSPECT_MAX_BYTES = 50;
                var K_MAX_LENGTH = 2147483647;
                exports.kMaxLength = K_MAX_LENGTH;
                Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
                !Buffer3.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
                function typedArraySupport() {
                    try {
                        var arr = new Uint8Array(1)
                          , proto = {
                            foo: function() {
                                return 42
                            }
                        };
                        return Object.setPrototypeOf(proto, Uint8Array.prototype),
                        Object.setPrototypeOf(arr, proto),
                        arr.foo() === 42
                    } catch {
                        return !1
                    }
                }
                Object.defineProperty(Buffer3.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (Buffer3.isBuffer(this))
                            return this.buffer
                    }
                });
                Object.defineProperty(Buffer3.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (Buffer3.isBuffer(this))
                            return this.byteOffset
                    }
                });
                function createBuffer(length) {
                    if (length > K_MAX_LENGTH)
                        throw new RangeError('The value "' + length + '" is invalid for option "size"');
                    var buf = new Uint8Array(length);
                    return Object.setPrototypeOf(buf, Buffer3.prototype),
                    buf
                }
                function Buffer3(arg, encodingOrOffset, length) {
                    if (typeof arg == "number") {
                        if (typeof encodingOrOffset == "string")
                            throw new TypeError('The "string" argument must be of type string. Received type number');
                        return allocUnsafe(arg)
                    }
                    return from(arg, encodingOrOffset, length)
                }
                Buffer3.poolSize = 8192;
                function from(value, encodingOrOffset, length) {
                    if (typeof value == "string")
                        return fromString(value, encodingOrOffset);
                    if (ArrayBuffer.isView(value))
                        return fromArrayView(value);
                    if (value == null)
                        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
                    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer)))
                        return fromArrayBuffer(value, encodingOrOffset, length);
                    if (typeof value == "number")
                        throw new TypeError('The "value" argument must not be of type number. Received type number');
                    var valueOf = value.valueOf && value.valueOf();
                    if (valueOf != null && valueOf !== value)
                        return Buffer3.from(valueOf, encodingOrOffset, length);
                    var b = fromObject(value);
                    if (b)
                        return b;
                    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] == "function")
                        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value)
                }
                Buffer3.from = function(value, encodingOrOffset, length) {
                    return from(value, encodingOrOffset, length)
                }
                ;
                Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
                Object.setPrototypeOf(Buffer3, Uint8Array);
                function assertSize(size) {
                    if (typeof size != "number")
                        throw new TypeError('"size" argument must be of type number');
                    if (size < 0)
                        throw new RangeError('The value "' + size + '" is invalid for option "size"')
                }
                function alloc(size, fill, encoding) {
                    return assertSize(size),
                    size <= 0 ? createBuffer(size) : fill !== void 0 ? typeof encoding == "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill) : createBuffer(size)
                }
                Buffer3.alloc = function(size, fill, encoding) {
                    return alloc(size, fill, encoding)
                }
                ;
                function allocUnsafe(size) {
                    return assertSize(size),
                    createBuffer(size < 0 ? 0 : checked(size) | 0)
                }
                Buffer3.allocUnsafe = function(size) {
                    return allocUnsafe(size)
                }
                ;
                Buffer3.allocUnsafeSlow = function(size) {
                    return allocUnsafe(size)
                }
                ;
                function fromString(string, encoding) {
                    if ((typeof encoding != "string" || encoding === "") && (encoding = "utf8"),
                    !Buffer3.isEncoding(encoding))
                        throw new TypeError("Unknown encoding: " + encoding);
                    var length = byteLength(string, encoding) | 0
                      , buf = createBuffer(length)
                      , actual = buf.write(string, encoding);
                    return actual !== length && (buf = buf.slice(0, actual)),
                    buf
                }
                function fromArrayLike(array) {
                    for (var length = array.length < 0 ? 0 : checked(array.length) | 0, buf = createBuffer(length), i = 0; i < length; i += 1)
                        buf[i] = array[i] & 255;
                    return buf
                }
                function fromArrayView(arrayView) {
                    if (isInstance(arrayView, Uint8Array)) {
                        var copy = new Uint8Array(arrayView);
                        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
                    }
                    return fromArrayLike(arrayView)
                }
                function fromArrayBuffer(array, byteOffset, length) {
                    if (byteOffset < 0 || array.byteLength < byteOffset)
                        throw new RangeError('"offset" is outside of buffer bounds');
                    if (array.byteLength < byteOffset + (length || 0))
                        throw new RangeError('"length" is outside of buffer bounds');
                    var buf;
                    return byteOffset === void 0 && length === void 0 ? buf = new Uint8Array(array) : length === void 0 ? buf = new Uint8Array(array,byteOffset) : buf = new Uint8Array(array,byteOffset,length),
                    Object.setPrototypeOf(buf, Buffer3.prototype),
                    buf
                }
                function fromObject(obj) {
                    if (Buffer3.isBuffer(obj)) {
                        var len = checked(obj.length) | 0
                          , buf = createBuffer(len);
                        return buf.length === 0 || obj.copy(buf, 0, 0, len),
                        buf
                    }
                    if (obj.length !== void 0)
                        return typeof obj.length != "number" || numberIsNaN(obj.length) ? createBuffer(0) : fromArrayLike(obj);
                    if (obj.type === "Buffer" && Array.isArray(obj.data))
                        return fromArrayLike(obj.data)
                }
                function checked(length) {
                    if (length >= K_MAX_LENGTH)
                        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
                    return length | 0
                }
                function SlowBuffer(length) {
                    return +length != length && (length = 0),
                    Buffer3.alloc(+length)
                }
                Buffer3.isBuffer = function(b) {
                    return b != null && b._isBuffer === !0 && b !== Buffer3.prototype
                }
                ;
                Buffer3.compare = function(a, b) {
                    if (isInstance(a, Uint8Array) && (a = Buffer3.from(a, a.offset, a.byteLength)),
                    isInstance(b, Uint8Array) && (b = Buffer3.from(b, b.offset, b.byteLength)),
                    !Buffer3.isBuffer(a) || !Buffer3.isBuffer(b))
                        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (a === b)
                        return 0;
                    for (var x = a.length, y = b.length, i = 0, len = Math.min(x, y); i < len; ++i)
                        if (a[i] !== b[i]) {
                            x = a[i],
                            y = b[i];
                            break
                        }
                    return x < y ? -1 : y < x ? 1 : 0
                }
                ;
                Buffer3.isEncoding = function(encoding) {
                    switch (String(encoding).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                    }
                }
                ;
                Buffer3.concat = function(list, length) {
                    if (!Array.isArray(list))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    if (list.length === 0)
                        return Buffer3.alloc(0);
                    var i;
                    if (length === void 0)
                        for (length = 0,
                        i = 0; i < list.length; ++i)
                            length += list[i].length;
                    var buffer = Buffer3.allocUnsafe(length)
                      , pos = 0;
                    for (i = 0; i < list.length; ++i) {
                        var buf = list[i];
                        if (isInstance(buf, Uint8Array))
                            pos + buf.length > buffer.length ? Buffer3.from(buf).copy(buffer, pos) : Uint8Array.prototype.set.call(buffer, buf, pos);
                        else if (Buffer3.isBuffer(buf))
                            buf.copy(buffer, pos);
                        else
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        pos += buf.length
                    }
                    return buffer
                }
                ;
                function byteLength(string, encoding) {
                    if (Buffer3.isBuffer(string))
                        return string.length;
                    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer))
                        return string.byteLength;
                    if (typeof string != "string")
                        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
                    var len = string.length
                      , mustMatch = arguments.length > 2 && arguments[2] === !0;
                    if (!mustMatch && len === 0)
                        return 0;
                    for (var loweredCase = !1; ; )
                        switch (encoding) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return len;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(string).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return len * 2;
                        case "hex":
                            return len >>> 1;
                        case "base64":
                            return base64ToBytes(string).length;
                        default:
                            if (loweredCase)
                                return mustMatch ? -1 : utf8ToBytes(string).length;
                            encoding = ("" + encoding).toLowerCase(),
                            loweredCase = !0
                        }
                }
                Buffer3.byteLength = byteLength;
                function slowToString(encoding, start, end) {
                    var loweredCase = !1;
                    if ((start === void 0 || start < 0) && (start = 0),
                    start > this.length || ((end === void 0 || end > this.length) && (end = this.length),
                    end <= 0) || (end >>>= 0,
                    start >>>= 0,
                    end <= start))
                        return "";
                    for (encoding || (encoding = "utf8"); ; )
                        switch (encoding) {
                        case "hex":
                            return hexSlice(this, start, end);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, start, end);
                        case "ascii":
                            return asciiSlice(this, start, end);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, start, end);
                        case "base64":
                            return base64Slice(this, start, end);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, start, end);
                        default:
                            if (loweredCase)
                                throw new TypeError("Unknown encoding: " + encoding);
                            encoding = (encoding + "").toLowerCase(),
                            loweredCase = !0
                        }
                }
                Buffer3.prototype._isBuffer = !0;
                function swap(b, n, m) {
                    var i = b[n];
                    b[n] = b[m],
                    b[m] = i
                }
                Buffer3.prototype.swap16 = function() {
                    var len = this.length;
                    if (len % 2 !== 0)
                        throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var i = 0; i < len; i += 2)
                        swap(this, i, i + 1);
                    return this
                }
                ;
                Buffer3.prototype.swap32 = function() {
                    var len = this.length;
                    if (len % 4 !== 0)
                        throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var i = 0; i < len; i += 4)
                        swap(this, i, i + 3),
                        swap(this, i + 1, i + 2);
                    return this
                }
                ;
                Buffer3.prototype.swap64 = function() {
                    var len = this.length;
                    if (len % 8 !== 0)
                        throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var i = 0; i < len; i += 8)
                        swap(this, i, i + 7),
                        swap(this, i + 1, i + 6),
                        swap(this, i + 2, i + 5),
                        swap(this, i + 3, i + 4);
                    return this
                }
                ;
                Buffer3.prototype.toString = function() {
                    var length = this.length;
                    return length === 0 ? "" : arguments.length === 0 ? utf8Slice(this, 0, length) : slowToString.apply(this, arguments)
                }
                ;
                Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
                Buffer3.prototype.equals = function(b) {
                    if (!Buffer3.isBuffer(b))
                        throw new TypeError("Argument must be a Buffer");
                    return this === b ? !0 : Buffer3.compare(this, b) === 0
                }
                ;
                Buffer3.prototype.inspect = function() {
                    var str = ""
                      , max = exports.INSPECT_MAX_BYTES;
                    return str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim(),
                    this.length > max && (str += " ... "),
                    "<Buffer " + str + ">"
                }
                ;
                customInspectSymbol && (Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect);
                Buffer3.prototype.compare = function(target, start, end, thisStart, thisEnd) {
                    if (isInstance(target, Uint8Array) && (target = Buffer3.from(target, target.offset, target.byteLength)),
                    !Buffer3.isBuffer(target))
                        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
                    if (start === void 0 && (start = 0),
                    end === void 0 && (end = target ? target.length : 0),
                    thisStart === void 0 && (thisStart = 0),
                    thisEnd === void 0 && (thisEnd = this.length),
                    start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length)
                        throw new RangeError("out of range index");
                    if (thisStart >= thisEnd && start >= end)
                        return 0;
                    if (thisStart >= thisEnd)
                        return -1;
                    if (start >= end)
                        return 1;
                    if (start >>>= 0,
                    end >>>= 0,
                    thisStart >>>= 0,
                    thisEnd >>>= 0,
                    this === target)
                        return 0;
                    for (var x = thisEnd - thisStart, y = end - start, len = Math.min(x, y), thisCopy = this.slice(thisStart, thisEnd), targetCopy = target.slice(start, end), i = 0; i < len; ++i)
                        if (thisCopy[i] !== targetCopy[i]) {
                            x = thisCopy[i],
                            y = targetCopy[i];
                            break
                        }
                    return x < y ? -1 : y < x ? 1 : 0
                }
                ;
                function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                    if (buffer.length === 0)
                        return -1;
                    if (typeof byteOffset == "string" ? (encoding = byteOffset,
                    byteOffset = 0) : byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648),
                    byteOffset = +byteOffset,
                    numberIsNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1),
                    byteOffset < 0 && (byteOffset = buffer.length + byteOffset),
                    byteOffset >= buffer.length) {
                        if (dir)
                            return -1;
                        byteOffset = buffer.length - 1
                    } else if (byteOffset < 0)
                        if (dir)
                            byteOffset = 0;
                        else
                            return -1;
                    if (typeof val == "string" && (val = Buffer3.from(val, encoding)),
                    Buffer3.isBuffer(val))
                        return val.length === 0 ? -1 : arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                    if (typeof val == "number")
                        return val = val & 255,
                        typeof Uint8Array.prototype.indexOf == "function" ? dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset) : arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
                    throw new TypeError("val must be string, number or Buffer")
                }
                function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                    var indexSize = 1
                      , arrLength = arr.length
                      , valLength = val.length;
                    if (encoding !== void 0 && (encoding = String(encoding).toLowerCase(),
                    encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le")) {
                        if (arr.length < 2 || val.length < 2)
                            return -1;
                        indexSize = 2,
                        arrLength /= 2,
                        valLength /= 2,
                        byteOffset /= 2
                    }
                    function read(buf, i2) {
                        return indexSize === 1 ? buf[i2] : buf.readUInt16BE(i2 * indexSize)
                    }
                    var i;
                    if (dir) {
                        var foundIndex = -1;
                        for (i = byteOffset; i < arrLength; i++)
                            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                                if (foundIndex === -1 && (foundIndex = i),
                                i - foundIndex + 1 === valLength)
                                    return foundIndex * indexSize
                            } else
                                foundIndex !== -1 && (i -= i - foundIndex),
                                foundIndex = -1
                    } else
                        for (byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength),
                        i = byteOffset; i >= 0; i--) {
                            for (var found = !0, j = 0; j < valLength; j++)
                                if (read(arr, i + j) !== read(val, j)) {
                                    found = !1;
                                    break
                                }
                            if (found)
                                return i
                        }
                    return -1
                }
                Buffer3.prototype.includes = function(val, byteOffset, encoding) {
                    return this.indexOf(val, byteOffset, encoding) !== -1
                }
                ;
                Buffer3.prototype.indexOf = function(val, byteOffset, encoding) {
                    return bidirectionalIndexOf(this, val, byteOffset, encoding, !0)
                }
                ;
                Buffer3.prototype.lastIndexOf = function(val, byteOffset, encoding) {
                    return bidirectionalIndexOf(this, val, byteOffset, encoding, !1)
                }
                ;
                function hexWrite(buf, string, offset, length) {
                    offset = Number(offset) || 0;
                    var remaining = buf.length - offset;
                    length ? (length = Number(length),
                    length > remaining && (length = remaining)) : length = remaining;
                    var strLen = string.length;
                    length > strLen / 2 && (length = strLen / 2);
                    for (var i = 0; i < length; ++i) {
                        var parsed = parseInt(string.substr(i * 2, 2), 16);
                        if (numberIsNaN(parsed))
                            return i;
                        buf[offset + i] = parsed
                    }
                    return i
                }
                function utf8Write(buf, string, offset, length) {
                    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
                }
                function asciiWrite(buf, string, offset, length) {
                    return blitBuffer(asciiToBytes(string), buf, offset, length)
                }
                function base64Write(buf, string, offset, length) {
                    return blitBuffer(base64ToBytes(string), buf, offset, length)
                }
                function ucs2Write(buf, string, offset, length) {
                    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
                }
                Buffer3.prototype.write = function(string, offset, length, encoding) {
                    if (offset === void 0)
                        encoding = "utf8",
                        length = this.length,
                        offset = 0;
                    else if (length === void 0 && typeof offset == "string")
                        encoding = offset,
                        length = this.length,
                        offset = 0;
                    else if (isFinite(offset))
                        offset = offset >>> 0,
                        isFinite(length) ? (length = length >>> 0,
                        encoding === void 0 && (encoding = "utf8")) : (encoding = length,
                        length = void 0);
                    else
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    var remaining = this.length - offset;
                    if ((length === void 0 || length > remaining) && (length = remaining),
                    string.length > 0 && (length < 0 || offset < 0) || offset > this.length)
                        throw new RangeError("Attempt to write outside buffer bounds");
                    encoding || (encoding = "utf8");
                    for (var loweredCase = !1; ; )
                        switch (encoding) {
                        case "hex":
                            return hexWrite(this, string, offset, length);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, string, offset, length);
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return asciiWrite(this, string, offset, length);
                        case "base64":
                            return base64Write(this, string, offset, length);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, string, offset, length);
                        default:
                            if (loweredCase)
                                throw new TypeError("Unknown encoding: " + encoding);
                            encoding = ("" + encoding).toLowerCase(),
                            loweredCase = !0
                        }
                }
                ;
                Buffer3.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }
                ;
                function base64Slice(buf, start, end) {
                    return start === 0 && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end))
                }
                function utf8Slice(buf, start, end) {
                    end = Math.min(buf.length, end);
                    for (var res = [], i = start; i < end; ) {
                        var firstByte = buf[i]
                          , codePoint = null
                          , bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                        if (i + bytesPerSequence <= end) {
                            var secondByte, thirdByte, fourthByte, tempCodePoint;
                            switch (bytesPerSequence) {
                            case 1:
                                firstByte < 128 && (codePoint = firstByte);
                                break;
                            case 2:
                                secondByte = buf[i + 1],
                                (secondByte & 192) === 128 && (tempCodePoint = (firstByte & 31) << 6 | secondByte & 63,
                                tempCodePoint > 127 && (codePoint = tempCodePoint));
                                break;
                            case 3:
                                secondByte = buf[i + 1],
                                thirdByte = buf[i + 2],
                                (secondByte & 192) === 128 && (thirdByte & 192) === 128 && (tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63,
                                tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint));
                                break;
                            case 4:
                                secondByte = buf[i + 1],
                                thirdByte = buf[i + 2],
                                fourthByte = buf[i + 3],
                                (secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128 && (tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63,
                                tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint))
                            }
                        }
                        codePoint === null ? (codePoint = 65533,
                        bytesPerSequence = 1) : codePoint > 65535 && (codePoint -= 65536,
                        res.push(codePoint >>> 10 & 1023 | 55296),
                        codePoint = 56320 | codePoint & 1023),
                        res.push(codePoint),
                        i += bytesPerSequence
                    }
                    return decodeCodePointsArray(res)
                }
                var MAX_ARGUMENTS_LENGTH = 4096;
                function decodeCodePointsArray(codePoints) {
                    var len = codePoints.length;
                    if (len <= MAX_ARGUMENTS_LENGTH)
                        return String.fromCharCode.apply(String, codePoints);
                    for (var res = "", i = 0; i < len; )
                        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                    return res
                }
                function asciiSlice(buf, start, end) {
                    var ret = "";
                    end = Math.min(buf.length, end);
                    for (var i = start; i < end; ++i)
                        ret += String.fromCharCode(buf[i] & 127);
                    return ret
                }
                function latin1Slice(buf, start, end) {
                    var ret = "";
                    end = Math.min(buf.length, end);
                    for (var i = start; i < end; ++i)
                        ret += String.fromCharCode(buf[i]);
                    return ret
                }
                function hexSlice(buf, start, end) {
                    var len = buf.length;
                    (!start || start < 0) && (start = 0),
                    (!end || end < 0 || end > len) && (end = len);
                    for (var out = "", i = start; i < end; ++i)
                        out += hexSliceLookupTable[buf[i]];
                    return out
                }
                function utf16leSlice(buf, start, end) {
                    for (var bytes = buf.slice(start, end), res = "", i = 0; i < bytes.length - 1; i += 2)
                        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                    return res
                }
                Buffer3.prototype.slice = function(start, end) {
                    var len = this.length;
                    start = ~~start,
                    end = end === void 0 ? len : ~~end,
                    start < 0 ? (start += len,
                    start < 0 && (start = 0)) : start > len && (start = len),
                    end < 0 ? (end += len,
                    end < 0 && (end = 0)) : end > len && (end = len),
                    end < start && (end = start);
                    var newBuf = this.subarray(start, end);
                    return Object.setPrototypeOf(newBuf, Buffer3.prototype),
                    newBuf
                }
                ;
                function checkOffset(offset, ext, length) {
                    if (offset % 1 !== 0 || offset < 0)
                        throw new RangeError("offset is not uint");
                    if (offset + ext > length)
                        throw new RangeError("Trying to access beyond buffer length")
                }
                Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function(offset, byteLength2, noAssert) {
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    noAssert || checkOffset(offset, byteLength2, this.length);
                    for (var val = this[offset], mul = 1, i = 0; ++i < byteLength2 && (mul *= 256); )
                        val += this[offset + i] * mul;
                    return val
                }
                ;
                Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function(offset, byteLength2, noAssert) {
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    noAssert || checkOffset(offset, byteLength2, this.length);
                    for (var val = this[offset + --byteLength2], mul = 1; byteLength2 > 0 && (mul *= 256); )
                        val += this[offset + --byteLength2] * mul;
                    return val
                }
                ;
                Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 1, this.length),
                    this[offset]
                }
                ;
                Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 2, this.length),
                    this[offset] | this[offset + 1] << 8
                }
                ;
                Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 2, this.length),
                    this[offset] << 8 | this[offset + 1]
                }
                ;
                Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216
                }
                ;
                Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3])
                }
                ;
                Buffer3.prototype.readIntLE = function(offset, byteLength2, noAssert) {
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    noAssert || checkOffset(offset, byteLength2, this.length);
                    for (var val = this[offset], mul = 1, i = 0; ++i < byteLength2 && (mul *= 256); )
                        val += this[offset + i] * mul;
                    return mul *= 128,
                    val >= mul && (val -= Math.pow(2, 8 * byteLength2)),
                    val
                }
                ;
                Buffer3.prototype.readIntBE = function(offset, byteLength2, noAssert) {
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    noAssert || checkOffset(offset, byteLength2, this.length);
                    for (var i = byteLength2, mul = 1, val = this[offset + --i]; i > 0 && (mul *= 256); )
                        val += this[offset + --i] * mul;
                    return mul *= 128,
                    val >= mul && (val -= Math.pow(2, 8 * byteLength2)),
                    val
                }
                ;
                Buffer3.prototype.readInt8 = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 1, this.length),
                    this[offset] & 128 ? (255 - this[offset] + 1) * -1 : this[offset]
                }
                ;
                Buffer3.prototype.readInt16LE = function(offset, noAssert) {
                    offset = offset >>> 0,
                    noAssert || checkOffset(offset, 2, this.length);
                    var val = this[offset] | this[offset + 1] << 8;
                    return val & 32768 ? val | 4294901760 : val
                }
                ;
                Buffer3.prototype.readInt16BE = function(offset, noAssert) {
                    offset = offset >>> 0,
                    noAssert || checkOffset(offset, 2, this.length);
                    var val = this[offset + 1] | this[offset] << 8;
                    return val & 32768 ? val | 4294901760 : val
                }
                ;
                Buffer3.prototype.readInt32LE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24
                }
                ;
                Buffer3.prototype.readInt32BE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]
                }
                ;
                Buffer3.prototype.readFloatLE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    ieee754.read(this, offset, !0, 23, 4)
                }
                ;
                Buffer3.prototype.readFloatBE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    ieee754.read(this, offset, !1, 23, 4)
                }
                ;
                Buffer3.prototype.readDoubleLE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 8, this.length),
                    ieee754.read(this, offset, !0, 52, 8)
                }
                ;
                Buffer3.prototype.readDoubleBE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 8, this.length),
                    ieee754.read(this, offset, !1, 52, 8)
                }
                ;
                function checkInt(buf, value, offset, ext, max, min) {
                    if (!Buffer3.isBuffer(buf))
                        throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (value > max || value < min)
                        throw new RangeError('"value" argument is out of bounds');
                    if (offset + ext > buf.length)
                        throw new RangeError("Index out of range")
                }
                Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function(value, offset, byteLength2, noAssert) {
                    if (value = +value,
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    !noAssert) {
                        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                        checkInt(this, value, offset, byteLength2, maxBytes, 0)
                    }
                    var mul = 1
                      , i = 0;
                    for (this[offset] = value & 255; ++i < byteLength2 && (mul *= 256); )
                        this[offset + i] = value / mul & 255;
                    return offset + byteLength2
                }
                ;
                Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function(value, offset, byteLength2, noAssert) {
                    if (value = +value,
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    !noAssert) {
                        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                        checkInt(this, value, offset, byteLength2, maxBytes, 0)
                    }
                    var i = byteLength2 - 1
                      , mul = 1;
                    for (this[offset + i] = value & 255; --i >= 0 && (mul *= 256); )
                        this[offset + i] = value / mul & 255;
                    return offset + byteLength2
                }
                ;
                Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 1, 255, 0),
                    this[offset] = value & 255,
                    offset + 1
                }
                ;
                Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 2, 65535, 0),
                    this[offset] = value & 255,
                    this[offset + 1] = value >>> 8,
                    offset + 2
                }
                ;
                Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 2, 65535, 0),
                    this[offset] = value >>> 8,
                    this[offset + 1] = value & 255,
                    offset + 2
                }
                ;
                Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 4, 4294967295, 0),
                    this[offset + 3] = value >>> 24,
                    this[offset + 2] = value >>> 16,
                    this[offset + 1] = value >>> 8,
                    this[offset] = value & 255,
                    offset + 4
                }
                ;
                Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 4, 4294967295, 0),
                    this[offset] = value >>> 24,
                    this[offset + 1] = value >>> 16,
                    this[offset + 2] = value >>> 8,
                    this[offset + 3] = value & 255,
                    offset + 4
                }
                ;
                Buffer3.prototype.writeIntLE = function(value, offset, byteLength2, noAssert) {
                    if (value = +value,
                    offset = offset >>> 0,
                    !noAssert) {
                        var limit = Math.pow(2, 8 * byteLength2 - 1);
                        checkInt(this, value, offset, byteLength2, limit - 1, -limit)
                    }
                    var i = 0
                      , mul = 1
                      , sub = 0;
                    for (this[offset] = value & 255; ++i < byteLength2 && (mul *= 256); )
                        value < 0 && sub === 0 && this[offset + i - 1] !== 0 && (sub = 1),
                        this[offset + i] = (value / mul >> 0) - sub & 255;
                    return offset + byteLength2
                }
                ;
                Buffer3.prototype.writeIntBE = function(value, offset, byteLength2, noAssert) {
                    if (value = +value,
                    offset = offset >>> 0,
                    !noAssert) {
                        var limit = Math.pow(2, 8 * byteLength2 - 1);
                        checkInt(this, value, offset, byteLength2, limit - 1, -limit)
                    }
                    var i = byteLength2 - 1
                      , mul = 1
                      , sub = 0;
                    for (this[offset + i] = value & 255; --i >= 0 && (mul *= 256); )
                        value < 0 && sub === 0 && this[offset + i + 1] !== 0 && (sub = 1),
                        this[offset + i] = (value / mul >> 0) - sub & 255;
                    return offset + byteLength2
                }
                ;
                Buffer3.prototype.writeInt8 = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 1, 127, -128),
                    value < 0 && (value = 255 + value + 1),
                    this[offset] = value & 255,
                    offset + 1
                }
                ;
                Buffer3.prototype.writeInt16LE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 2, 32767, -32768),
                    this[offset] = value & 255,
                    this[offset + 1] = value >>> 8,
                    offset + 2
                }
                ;
                Buffer3.prototype.writeInt16BE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 2, 32767, -32768),
                    this[offset] = value >>> 8,
                    this[offset + 1] = value & 255,
                    offset + 2
                }
                ;
                Buffer3.prototype.writeInt32LE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648),
                    this[offset] = value & 255,
                    this[offset + 1] = value >>> 8,
                    this[offset + 2] = value >>> 16,
                    this[offset + 3] = value >>> 24,
                    offset + 4
                }
                ;
                Buffer3.prototype.writeInt32BE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648),
                    value < 0 && (value = 4294967295 + value + 1),
                    this[offset] = value >>> 24,
                    this[offset + 1] = value >>> 16,
                    this[offset + 2] = value >>> 8,
                    this[offset + 3] = value & 255,
                    offset + 4
                }
                ;
                function checkIEEE754(buf, value, offset, ext, max, min) {
                    if (offset + ext > buf.length)
                        throw new RangeError("Index out of range");
                    if (offset < 0)
                        throw new RangeError("Index out of range")
                }
                function writeFloat(buf, value, offset, littleEndian, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22),
                    ieee754.write(buf, value, offset, littleEndian, 23, 4),
                    offset + 4
                }
                Buffer3.prototype.writeFloatLE = function(value, offset, noAssert) {
                    return writeFloat(this, value, offset, !0, noAssert)
                }
                ;
                Buffer3.prototype.writeFloatBE = function(value, offset, noAssert) {
                    return writeFloat(this, value, offset, !1, noAssert)
                }
                ;
                function writeDouble(buf, value, offset, littleEndian, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292),
                    ieee754.write(buf, value, offset, littleEndian, 52, 8),
                    offset + 8
                }
                Buffer3.prototype.writeDoubleLE = function(value, offset, noAssert) {
                    return writeDouble(this, value, offset, !0, noAssert)
                }
                ;
                Buffer3.prototype.writeDoubleBE = function(value, offset, noAssert) {
                    return writeDouble(this, value, offset, !1, noAssert)
                }
                ;
                Buffer3.prototype.copy = function(target, targetStart, start, end) {
                    if (!Buffer3.isBuffer(target))
                        throw new TypeError("argument should be a Buffer");
                    if (start || (start = 0),
                    !end && end !== 0 && (end = this.length),
                    targetStart >= target.length && (targetStart = target.length),
                    targetStart || (targetStart = 0),
                    end > 0 && end < start && (end = start),
                    end === start || target.length === 0 || this.length === 0)
                        return 0;
                    if (targetStart < 0)
                        throw new RangeError("targetStart out of bounds");
                    if (start < 0 || start >= this.length)
                        throw new RangeError("Index out of range");
                    if (end < 0)
                        throw new RangeError("sourceEnd out of bounds");
                    end > this.length && (end = this.length),
                    target.length - targetStart < end - start && (end = target.length - targetStart + start);
                    var len = end - start;
                    return this === target && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(targetStart, start, end) : Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart),
                    len
                }
                ;
                Buffer3.prototype.fill = function(val, start, end, encoding) {
                    if (typeof val == "string") {
                        if (typeof start == "string" ? (encoding = start,
                        start = 0,
                        end = this.length) : typeof end == "string" && (encoding = end,
                        end = this.length),
                        encoding !== void 0 && typeof encoding != "string")
                            throw new TypeError("encoding must be a string");
                        if (typeof encoding == "string" && !Buffer3.isEncoding(encoding))
                            throw new TypeError("Unknown encoding: " + encoding);
                        if (val.length === 1) {
                            var code = val.charCodeAt(0);
                            (encoding === "utf8" && code < 128 || encoding === "latin1") && (val = code)
                        }
                    } else
                        typeof val == "number" ? val = val & 255 : typeof val == "boolean" && (val = Number(val));
                    if (start < 0 || this.length < start || this.length < end)
                        throw new RangeError("Out of range index");
                    if (end <= start)
                        return this;
                    start = start >>> 0,
                    end = end === void 0 ? this.length : end >>> 0,
                    val || (val = 0);
                    var i;
                    if (typeof val == "number")
                        for (i = start; i < end; ++i)
                            this[i] = val;
                    else {
                        var bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding)
                          , len = bytes.length;
                        if (len === 0)
                            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
                        for (i = 0; i < end - start; ++i)
                            this[i + start] = bytes[i % len]
                    }
                    return this
                }
                ;
                var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
                function base64clean(str) {
                    if (str = str.split("=")[0],
                    str = str.trim().replace(INVALID_BASE64_RE, ""),
                    str.length < 2)
                        return "";
                    for (; str.length % 4 !== 0; )
                        str = str + "=";
                    return str
                }
                function utf8ToBytes(string, units) {
                    units = units || 1 / 0;
                    for (var codePoint, length = string.length, leadSurrogate = null, bytes = [], i = 0; i < length; ++i) {
                        if (codePoint = string.charCodeAt(i),
                        codePoint > 55295 && codePoint < 57344) {
                            if (!leadSurrogate) {
                                if (codePoint > 56319) {
                                    (units -= 3) > -1 && bytes.push(239, 191, 189);
                                    continue
                                } else if (i + 1 === length) {
                                    (units -= 3) > -1 && bytes.push(239, 191, 189);
                                    continue
                                }
                                leadSurrogate = codePoint;
                                continue
                            }
                            if (codePoint < 56320) {
                                (units -= 3) > -1 && bytes.push(239, 191, 189),
                                leadSurrogate = codePoint;
                                continue
                            }
                            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536
                        } else
                            leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
                        if (leadSurrogate = null,
                        codePoint < 128) {
                            if ((units -= 1) < 0)
                                break;
                            bytes.push(codePoint)
                        } else if (codePoint < 2048) {
                            if ((units -= 2) < 0)
                                break;
                            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128)
                        } else if (codePoint < 65536) {
                            if ((units -= 3) < 0)
                                break;
                            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128)
                        } else if (codePoint < 1114112) {
                            if ((units -= 4) < 0)
                                break;
                            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128)
                        } else
                            throw new Error("Invalid code point")
                    }
                    return bytes
                }
                function asciiToBytes(str) {
                    for (var byteArray = [], i = 0; i < str.length; ++i)
                        byteArray.push(str.charCodeAt(i) & 255);
                    return byteArray
                }
                function utf16leToBytes(str, units) {
                    for (var c, hi, lo, byteArray = [], i = 0; i < str.length && !((units -= 2) < 0); ++i)
                        c = str.charCodeAt(i),
                        hi = c >> 8,
                        lo = c % 256,
                        byteArray.push(lo),
                        byteArray.push(hi);
                    return byteArray
                }
                function base64ToBytes(str) {
                    return base64.toByteArray(base64clean(str))
                }
                function blitBuffer(src, dst, offset, length) {
                    for (var i = 0; i < length && !(i + offset >= dst.length || i >= src.length); ++i)
                        dst[i + offset] = src[i];
                    return i
                }
                function isInstance(obj, type) {
                    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name
                }
                function numberIsNaN(obj) {
                    return obj !== obj
                }
                var hexSliceLookupTable = function() {
                    for (var alphabet = "0123456789abcdef", table = new Array(256), i = 0; i < 16; ++i)
                        for (var i16 = i * 16, j = 0; j < 16; ++j)
                            table[i16 + j] = alphabet[i] + alphabet[j];
                    return table
                }()
            }
        });
        var require_browser = __commonJS({
            "node_modules/process/browser.js"(exports, module) {
                init_define_process_env();
                init_shim();
                var process2 = module.exports = {}, cachedSetTimeout, cachedClearTimeout;
                function defaultSetTimout() {
                    throw new Error("setTimeout has not been defined")
                }
                function defaultClearTimeout() {
                    throw new Error("clearTimeout has not been defined")
                }
                (function() {
                    try {
                        typeof setTimeout == "function" ? cachedSetTimeout = setTimeout : cachedSetTimeout = defaultSetTimout
                    } catch {
                        cachedSetTimeout = defaultSetTimout
                    }
                    try {
                        typeof clearTimeout == "function" ? cachedClearTimeout = clearTimeout : cachedClearTimeout = defaultClearTimeout
                    } catch {
                        cachedClearTimeout = defaultClearTimeout
                    }
                }
                )();
                function runTimeout(fun) {
                    if (cachedSetTimeout === setTimeout)
                        return setTimeout(fun, 0);
                    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout)
                        return cachedSetTimeout = setTimeout,
                        setTimeout(fun, 0);
                    try {
                        return cachedSetTimeout(fun, 0)
                    } catch {
                        try {
                            return cachedSetTimeout.call(null, fun, 0)
                        } catch {
                            return cachedSetTimeout.call(this, fun, 0)
                        }
                    }
                }
                function runClearTimeout(marker) {
                    if (cachedClearTimeout === clearTimeout)
                        return clearTimeout(marker);
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout)
                        return cachedClearTimeout = clearTimeout,
                        clearTimeout(marker);
                    try {
                        return cachedClearTimeout(marker)
                    } catch {
                        try {
                            return cachedClearTimeout.call(null, marker)
                        } catch {
                            return cachedClearTimeout.call(this, marker)
                        }
                    }
                }
                var queue = [], draining = !1, currentQueue, queueIndex = -1;
                function cleanUpNextTick() {
                    !draining || !currentQueue || (draining = !1,
                    currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1,
                    queue.length && drainQueue())
                }
                function drainQueue() {
                    if (!draining) {
                        var timeout = runTimeout(cleanUpNextTick);
                        draining = !0;
                        for (var len = queue.length; len; ) {
                            for (currentQueue = queue,
                            queue = []; ++queueIndex < len; )
                                currentQueue && currentQueue[queueIndex].run();
                            queueIndex = -1,
                            len = queue.length
                        }
                        currentQueue = null,
                        draining = !1,
                        runClearTimeout(timeout)
                    }
                }
                process2.nextTick = function(fun) {
                    var args = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var i = 1; i < arguments.length; i++)
                            args[i - 1] = arguments[i];
                    queue.push(new Item(fun,args)),
                    queue.length === 1 && !draining && runTimeout(drainQueue)
                }
                ;
                function Item(fun, array) {
                    this.fun = fun,
                    this.array = array
                }
                Item.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ;
                process2.title = "browser";
                process2.browser = !0;
                process2.env = {};
                process2.argv = [];
                process2.version = "";
                process2.versions = {};
                function noop() {}
                process2.on = noop;
                process2.addListener = noop;
                process2.once = noop;
                process2.off = noop;
                process2.removeListener = noop;
                process2.removeAllListeners = noop;
                process2.emit = noop;
                process2.prependListener = noop;
                process2.prependOnceListener = noop;
                process2.listeners = function(name) {
                    return []
                }
                ;
                process2.binding = function(name) {
                    throw new Error("process.binding is not supported")
                }
                ;
                process2.cwd = function() {
                    return "/"
                }
                ;
                process2.chdir = function(dir) {
                    throw new Error("process.chdir is not supported")
                }
                ;
                process2.umask = function() {
                    return 0
                }
            }
        });
        var import_buffer, import_process, _globalThis, init_shim = __esm({
            "node_modules/node-stdlib-browser/helpers/esbuild/shim.js"() {
                import_buffer = __toESM(require_buffer()),
                import_process = __toESM(require_browser()),
                _globalThis = function(Object2) {
                    function get() {
                        var _global2 = this || self;
                        return delete Object2.prototype.__magic__,
                        _global2
                    }
                    if (typeof globalThis == "object")
                        return globalThis;
                    if (this)
                        return get();
                    Object2.defineProperty(Object2.prototype, "__magic__", {
                        configurable: !0,
                        get
                    });
                    var _global = __magic__;
                    return _global
                }(Object)
            }
        });
        var require_pass_meter_min = __commonJS({
            "vendor/optional/jquery_plugins/pass-meter.min.js"(exports, module) {
                init_define_process_env();
                init_shim();
                (function(a, b) {
                    typeof define == "function" && define.amd ? define("pass-meter", b) : typeof module == "object" && module.exports ? module.exports = b() : a.PassMeter = b()
                }
                )(typeof window < "u" ? window : exports, function() {
                    "use strict";
                    var a, b = {
                        events: "keyup",
                        afterTest: null,
                        commonPasswords: ["password", "123456", "12345678", "1234", "qwerty"]
                    };
                    a = typeof jQuery != "function" ? function() {
                        for (var a2, b2, c2, d, e = arguments[0] || {}, f = 1, g = arguments.length; g > f; f++)
                            if ((a2 = arguments[f]) !== null)
                                for (b2 in a2)
                                    d = e[b2],
                                    c2 = a2[b2],
                                    e !== c2 && c2 !== void 0 && (e[b2] = c2);
                        return e
                    }
                    : jQuery.extend;
                    var c = function(c2) {
                        typeof c2 > "u" ? c2 = {} : typeof c2 == "function" && (c2 = {
                            afterTest: c2
                        }),
                        this.options = a({}, b, c2)
                    };
                    return c.prototype = {
                        constructor: c,
                        checks: [{
                            score: 35,
                            callback: function(a2) {
                                return a2.length >= 8
                            }
                        }, {
                            score: 20,
                            regex: new RegExp("[A-Z]")
                        }, {
                            score: 10,
                            regex: new RegExp("[a-z]")
                        }, {
                            score: 10,
                            regex: new RegExp("[0-9]")
                        }, {
                            score: 25,
                            regex: new RegExp("\\W")
                        }, {
                            score: -100,
                            callback: function(a2) {
                                return this.options.commonPasswords.indexOf(String(a2).toLowerCase()) !== -1
                            }
                        }],
                        test: function(a2) {
                            var b2 = this
                              , c2 = 0;
                            return this.checks.forEach(function(d) {
                                d.hasOwnProperty("regex") ? a2.match(d.regex) && (c2 += d.score) : d.hasOwnProperty("callback") && d.callback.call(b2, a2) && (c2 += d.score)
                            }),
                            0 > c2 && (c2 = 0),
                            c2 > 100 && (c2 = 100),
                            typeof this.options.afterTest == "function" && this.options.afterTest(c2, a2),
                            c2
                        }
                    },
                    typeof jQuery == "function" && jQuery.fn && (jQuery.fn.passMeter = function(a2) {
                        return this.each(function() {
                            var b2 = jQuery(this);
                            if (!b2.data("pass-meter")) {
                                var d = new c(a2);
                                b2.on(d.options.events, function() {
                                    d.test(this.value)
                                }),
                                b2.data("pass-meter", d)
                            }
                        })
                    }
                    ),
                    c
                })
            }
        });
        require_pass_meter_min();
    }
    )();
    /*!
 * pass-meter v1.0.1
 * https://github.com/syntaqx/pass-meter
 *
 * Copyright (c) 2015 Chase Hutchins <syntaqx@gmail.com>
 * Released under the MIT license
 */
    /*! Bundled license information:

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/

}

window.preloaded['js/extra:jquery_plugins/pass-meter.min'] = true;
window.__code__ = window.__code__ || {};
if (!window.__code__['bec3db81d36557a20a5161978d6bdbacd206cb52e9dcd96e57c2fc3a4e606d2c']) {
    window.__code__['bec3db81d36557a20a5161978d6bdbacd206cb52e9dcd96e57c2fc3a4e606d2c'] = 1;

    "use strict";
    ( () => {
        var __create = Object.create;
        var __defProp = Object.defineProperty;
        var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames = Object.getOwnPropertyNames;
        var __getProtoOf = Object.getPrototypeOf
          , __hasOwnProp = Object.prototype.hasOwnProperty;
        var __esm = (fn, res) => function() {
            return fn && (res = (0,
            fn[__getOwnPropNames(fn)[0]])(fn = 0)),
            res
        }
        ;
        var __commonJS = (cb, mod) => function() {
            return mod || (0,
            cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod),
            mod.exports
        }
        ;
        var __copyProps = (to, from, except, desc) => {
            if (from && typeof from == "object" || typeof from == "function")
                for (let key of __getOwnPropNames(from))
                    !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
                        get: () => from[key],
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
            return to
        }
        ;
        var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {},
        __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
            value: mod,
            enumerable: !0
        }) : target, mod));
        var init_define_process_env = __esm({
            "<define:process.env>"() {}
        });
        var require_base64_js = __commonJS({
            "node_modules/base64-js/index.js"(exports) {
                "use strict";
                init_define_process_env();
                init_shim();
                exports.byteLength = byteLength;
                exports.toByteArray = toByteArray;
                exports.fromByteArray = fromByteArray;
                var lookup = []
                  , revLookup = []
                  , Arr = typeof Uint8Array < "u" ? Uint8Array : Array
                  , code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                for (i = 0,
                len = code.length; i < len; ++i)
                    lookup[i] = code[i],
                    revLookup[code.charCodeAt(i)] = i;
                var i, len;
                revLookup["-".charCodeAt(0)] = 62;
                revLookup["_".charCodeAt(0)] = 63;
                function getLens(b64) {
                    var len2 = b64.length;
                    if (len2 % 4 > 0)
                        throw new Error("Invalid string. Length must be a multiple of 4");
                    var validLen = b64.indexOf("=");
                    validLen === -1 && (validLen = len2);
                    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
                    return [validLen, placeHoldersLen]
                }
                function byteLength(b64) {
                    var lens = getLens(b64)
                      , validLen = lens[0]
                      , placeHoldersLen = lens[1];
                    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen
                }
                function _byteLength(b64, validLen, placeHoldersLen) {
                    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen
                }
                function toByteArray(b64) {
                    var tmp, lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1], arr = new Arr(_byteLength(b64, validLen, placeHoldersLen)), curByte = 0, len2 = placeHoldersLen > 0 ? validLen - 4 : validLen, i2;
                    for (i2 = 0; i2 < len2; i2 += 4)
                        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)],
                        arr[curByte++] = tmp >> 16 & 255,
                        arr[curByte++] = tmp >> 8 & 255,
                        arr[curByte++] = tmp & 255;
                    return placeHoldersLen === 2 && (tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4,
                    arr[curByte++] = tmp & 255),
                    placeHoldersLen === 1 && (tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2,
                    arr[curByte++] = tmp >> 8 & 255,
                    arr[curByte++] = tmp & 255),
                    arr
                }
                function tripletToBase64(num) {
                    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63]
                }
                function encodeChunk(uint8, start, end) {
                    for (var tmp, output = [], i2 = start; i2 < end; i2 += 3)
                        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255),
                        output.push(tripletToBase64(tmp));
                    return output.join("")
                }
                function fromByteArray(uint8) {
                    for (var tmp, len2 = uint8.length, extraBytes = len2 % 3, parts = [], maxChunkLength = 16383, i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength)
                        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
                    return extraBytes === 1 ? (tmp = uint8[len2 - 1],
                    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==")) : extraBytes === 2 && (tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1],
                    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=")),
                    parts.join("")
                }
            }
        });
        var require_ieee754 = __commonJS({
            "node_modules/ieee754/index.js"(exports) {
                init_define_process_env();
                init_shim();
                exports.read = function(buffer, offset, isLE, mLen, nBytes) {
                    var e, m, eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i = isLE ? nBytes - 1 : 0, d = isLE ? -1 : 1, s = buffer[offset + i];
                    for (i += d,
                    e = s & (1 << -nBits) - 1,
                    s >>= -nBits,
                    nBits += eLen; nBits > 0; e = e * 256 + buffer[offset + i],
                    i += d,
                    nBits -= 8)
                        ;
                    for (m = e & (1 << -nBits) - 1,
                    e >>= -nBits,
                    nBits += mLen; nBits > 0; m = m * 256 + buffer[offset + i],
                    i += d,
                    nBits -= 8)
                        ;
                    if (e === 0)
                        e = 1 - eBias;
                    else {
                        if (e === eMax)
                            return m ? NaN : (s ? -1 : 1) * (1 / 0);
                        m = m + Math.pow(2, mLen),
                        e = e - eBias
                    }
                    return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
                }
                ;
                exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
                    var e, m, c, eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = isLE ? 0 : nBytes - 1, d = isLE ? 1 : -1, s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
                    for (value = Math.abs(value),
                    isNaN(value) || value === 1 / 0 ? (m = isNaN(value) ? 1 : 0,
                    e = eMax) : (e = Math.floor(Math.log(value) / Math.LN2),
                    value * (c = Math.pow(2, -e)) < 1 && (e--,
                    c *= 2),
                    e + eBias >= 1 ? value += rt / c : value += rt * Math.pow(2, 1 - eBias),
                    value * c >= 2 && (e++,
                    c /= 2),
                    e + eBias >= eMax ? (m = 0,
                    e = eMax) : e + eBias >= 1 ? (m = (value * c - 1) * Math.pow(2, mLen),
                    e = e + eBias) : (m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen),
                    e = 0)); mLen >= 8; buffer[offset + i] = m & 255,
                    i += d,
                    m /= 256,
                    mLen -= 8)
                        ;
                    for (e = e << mLen | m,
                    eLen += mLen; eLen > 0; buffer[offset + i] = e & 255,
                    i += d,
                    e /= 256,
                    eLen -= 8)
                        ;
                    buffer[offset + i - d] |= s * 128
                }
            }
        });
        var require_buffer = __commonJS({
            "node_modules/node-stdlib-browser/node_modules/buffer/index.js"(exports) {
                "use strict";
                init_define_process_env();
                init_shim();
                var base64 = require_base64_js()
                  , ieee754 = require_ieee754()
                  , customInspectSymbol = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
                exports.Buffer = Buffer3;
                exports.SlowBuffer = SlowBuffer;
                exports.INSPECT_MAX_BYTES = 50;
                var K_MAX_LENGTH = 2147483647;
                exports.kMaxLength = K_MAX_LENGTH;
                Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
                !Buffer3.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
                function typedArraySupport() {
                    try {
                        var arr = new Uint8Array(1)
                          , proto = {
                            foo: function() {
                                return 42
                            }
                        };
                        return Object.setPrototypeOf(proto, Uint8Array.prototype),
                        Object.setPrototypeOf(arr, proto),
                        arr.foo() === 42
                    } catch {
                        return !1
                    }
                }
                Object.defineProperty(Buffer3.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (Buffer3.isBuffer(this))
                            return this.buffer
                    }
                });
                Object.defineProperty(Buffer3.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (Buffer3.isBuffer(this))
                            return this.byteOffset
                    }
                });
                function createBuffer(length) {
                    if (length > K_MAX_LENGTH)
                        throw new RangeError('The value "' + length + '" is invalid for option "size"');
                    var buf = new Uint8Array(length);
                    return Object.setPrototypeOf(buf, Buffer3.prototype),
                    buf
                }
                function Buffer3(arg, encodingOrOffset, length) {
                    if (typeof arg == "number") {
                        if (typeof encodingOrOffset == "string")
                            throw new TypeError('The "string" argument must be of type string. Received type number');
                        return allocUnsafe(arg)
                    }
                    return from(arg, encodingOrOffset, length)
                }
                Buffer3.poolSize = 8192;
                function from(value, encodingOrOffset, length) {
                    if (typeof value == "string")
                        return fromString(value, encodingOrOffset);
                    if (ArrayBuffer.isView(value))
                        return fromArrayView(value);
                    if (value == null)
                        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
                    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer)))
                        return fromArrayBuffer(value, encodingOrOffset, length);
                    if (typeof value == "number")
                        throw new TypeError('The "value" argument must not be of type number. Received type number');
                    var valueOf = value.valueOf && value.valueOf();
                    if (valueOf != null && valueOf !== value)
                        return Buffer3.from(valueOf, encodingOrOffset, length);
                    var b = fromObject(value);
                    if (b)
                        return b;
                    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] == "function")
                        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value)
                }
                Buffer3.from = function(value, encodingOrOffset, length) {
                    return from(value, encodingOrOffset, length)
                }
                ;
                Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
                Object.setPrototypeOf(Buffer3, Uint8Array);
                function assertSize(size) {
                    if (typeof size != "number")
                        throw new TypeError('"size" argument must be of type number');
                    if (size < 0)
                        throw new RangeError('The value "' + size + '" is invalid for option "size"')
                }
                function alloc(size, fill, encoding) {
                    return assertSize(size),
                    size <= 0 ? createBuffer(size) : fill !== void 0 ? typeof encoding == "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill) : createBuffer(size)
                }
                Buffer3.alloc = function(size, fill, encoding) {
                    return alloc(size, fill, encoding)
                }
                ;
                function allocUnsafe(size) {
                    return assertSize(size),
                    createBuffer(size < 0 ? 0 : checked(size) | 0)
                }
                Buffer3.allocUnsafe = function(size) {
                    return allocUnsafe(size)
                }
                ;
                Buffer3.allocUnsafeSlow = function(size) {
                    return allocUnsafe(size)
                }
                ;
                function fromString(string, encoding) {
                    if ((typeof encoding != "string" || encoding === "") && (encoding = "utf8"),
                    !Buffer3.isEncoding(encoding))
                        throw new TypeError("Unknown encoding: " + encoding);
                    var length = byteLength(string, encoding) | 0
                      , buf = createBuffer(length)
                      , actual = buf.write(string, encoding);
                    return actual !== length && (buf = buf.slice(0, actual)),
                    buf
                }
                function fromArrayLike(array) {
                    for (var length = array.length < 0 ? 0 : checked(array.length) | 0, buf = createBuffer(length), i = 0; i < length; i += 1)
                        buf[i] = array[i] & 255;
                    return buf
                }
                function fromArrayView(arrayView) {
                    if (isInstance(arrayView, Uint8Array)) {
                        var copy = new Uint8Array(arrayView);
                        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
                    }
                    return fromArrayLike(arrayView)
                }
                function fromArrayBuffer(array, byteOffset, length) {
                    if (byteOffset < 0 || array.byteLength < byteOffset)
                        throw new RangeError('"offset" is outside of buffer bounds');
                    if (array.byteLength < byteOffset + (length || 0))
                        throw new RangeError('"length" is outside of buffer bounds');
                    var buf;
                    return byteOffset === void 0 && length === void 0 ? buf = new Uint8Array(array) : length === void 0 ? buf = new Uint8Array(array,byteOffset) : buf = new Uint8Array(array,byteOffset,length),
                    Object.setPrototypeOf(buf, Buffer3.prototype),
                    buf
                }
                function fromObject(obj) {
                    if (Buffer3.isBuffer(obj)) {
                        var len = checked(obj.length) | 0
                          , buf = createBuffer(len);
                        return buf.length === 0 || obj.copy(buf, 0, 0, len),
                        buf
                    }
                    if (obj.length !== void 0)
                        return typeof obj.length != "number" || numberIsNaN(obj.length) ? createBuffer(0) : fromArrayLike(obj);
                    if (obj.type === "Buffer" && Array.isArray(obj.data))
                        return fromArrayLike(obj.data)
                }
                function checked(length) {
                    if (length >= K_MAX_LENGTH)
                        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
                    return length | 0
                }
                function SlowBuffer(length) {
                    return +length != length && (length = 0),
                    Buffer3.alloc(+length)
                }
                Buffer3.isBuffer = function(b) {
                    return b != null && b._isBuffer === !0 && b !== Buffer3.prototype
                }
                ;
                Buffer3.compare = function(a, b) {
                    if (isInstance(a, Uint8Array) && (a = Buffer3.from(a, a.offset, a.byteLength)),
                    isInstance(b, Uint8Array) && (b = Buffer3.from(b, b.offset, b.byteLength)),
                    !Buffer3.isBuffer(a) || !Buffer3.isBuffer(b))
                        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (a === b)
                        return 0;
                    for (var x = a.length, y = b.length, i = 0, len = Math.min(x, y); i < len; ++i)
                        if (a[i] !== b[i]) {
                            x = a[i],
                            y = b[i];
                            break
                        }
                    return x < y ? -1 : y < x ? 1 : 0
                }
                ;
                Buffer3.isEncoding = function(encoding) {
                    switch (String(encoding).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                    }
                }
                ;
                Buffer3.concat = function(list, length) {
                    if (!Array.isArray(list))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    if (list.length === 0)
                        return Buffer3.alloc(0);
                    var i;
                    if (length === void 0)
                        for (length = 0,
                        i = 0; i < list.length; ++i)
                            length += list[i].length;
                    var buffer = Buffer3.allocUnsafe(length)
                      , pos = 0;
                    for (i = 0; i < list.length; ++i) {
                        var buf = list[i];
                        if (isInstance(buf, Uint8Array))
                            pos + buf.length > buffer.length ? Buffer3.from(buf).copy(buffer, pos) : Uint8Array.prototype.set.call(buffer, buf, pos);
                        else if (Buffer3.isBuffer(buf))
                            buf.copy(buffer, pos);
                        else
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        pos += buf.length
                    }
                    return buffer
                }
                ;
                function byteLength(string, encoding) {
                    if (Buffer3.isBuffer(string))
                        return string.length;
                    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer))
                        return string.byteLength;
                    if (typeof string != "string")
                        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
                    var len = string.length
                      , mustMatch = arguments.length > 2 && arguments[2] === !0;
                    if (!mustMatch && len === 0)
                        return 0;
                    for (var loweredCase = !1; ; )
                        switch (encoding) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return len;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(string).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return len * 2;
                        case "hex":
                            return len >>> 1;
                        case "base64":
                            return base64ToBytes(string).length;
                        default:
                            if (loweredCase)
                                return mustMatch ? -1 : utf8ToBytes(string).length;
                            encoding = ("" + encoding).toLowerCase(),
                            loweredCase = !0
                        }
                }
                Buffer3.byteLength = byteLength;
                function slowToString(encoding, start, end) {
                    var loweredCase = !1;
                    if ((start === void 0 || start < 0) && (start = 0),
                    start > this.length || ((end === void 0 || end > this.length) && (end = this.length),
                    end <= 0) || (end >>>= 0,
                    start >>>= 0,
                    end <= start))
                        return "";
                    for (encoding || (encoding = "utf8"); ; )
                        switch (encoding) {
                        case "hex":
                            return hexSlice(this, start, end);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, start, end);
                        case "ascii":
                            return asciiSlice(this, start, end);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, start, end);
                        case "base64":
                            return base64Slice(this, start, end);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, start, end);
                        default:
                            if (loweredCase)
                                throw new TypeError("Unknown encoding: " + encoding);
                            encoding = (encoding + "").toLowerCase(),
                            loweredCase = !0
                        }
                }
                Buffer3.prototype._isBuffer = !0;
                function swap(b, n, m) {
                    var i = b[n];
                    b[n] = b[m],
                    b[m] = i
                }
                Buffer3.prototype.swap16 = function() {
                    var len = this.length;
                    if (len % 2 !== 0)
                        throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var i = 0; i < len; i += 2)
                        swap(this, i, i + 1);
                    return this
                }
                ;
                Buffer3.prototype.swap32 = function() {
                    var len = this.length;
                    if (len % 4 !== 0)
                        throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var i = 0; i < len; i += 4)
                        swap(this, i, i + 3),
                        swap(this, i + 1, i + 2);
                    return this
                }
                ;
                Buffer3.prototype.swap64 = function() {
                    var len = this.length;
                    if (len % 8 !== 0)
                        throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var i = 0; i < len; i += 8)
                        swap(this, i, i + 7),
                        swap(this, i + 1, i + 6),
                        swap(this, i + 2, i + 5),
                        swap(this, i + 3, i + 4);
                    return this
                }
                ;
                Buffer3.prototype.toString = function() {
                    var length = this.length;
                    return length === 0 ? "" : arguments.length === 0 ? utf8Slice(this, 0, length) : slowToString.apply(this, arguments)
                }
                ;
                Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
                Buffer3.prototype.equals = function(b) {
                    if (!Buffer3.isBuffer(b))
                        throw new TypeError("Argument must be a Buffer");
                    return this === b ? !0 : Buffer3.compare(this, b) === 0
                }
                ;
                Buffer3.prototype.inspect = function() {
                    var str = ""
                      , max = exports.INSPECT_MAX_BYTES;
                    return str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim(),
                    this.length > max && (str += " ... "),
                    "<Buffer " + str + ">"
                }
                ;
                customInspectSymbol && (Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect);
                Buffer3.prototype.compare = function(target, start, end, thisStart, thisEnd) {
                    if (isInstance(target, Uint8Array) && (target = Buffer3.from(target, target.offset, target.byteLength)),
                    !Buffer3.isBuffer(target))
                        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
                    if (start === void 0 && (start = 0),
                    end === void 0 && (end = target ? target.length : 0),
                    thisStart === void 0 && (thisStart = 0),
                    thisEnd === void 0 && (thisEnd = this.length),
                    start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length)
                        throw new RangeError("out of range index");
                    if (thisStart >= thisEnd && start >= end)
                        return 0;
                    if (thisStart >= thisEnd)
                        return -1;
                    if (start >= end)
                        return 1;
                    if (start >>>= 0,
                    end >>>= 0,
                    thisStart >>>= 0,
                    thisEnd >>>= 0,
                    this === target)
                        return 0;
                    for (var x = thisEnd - thisStart, y = end - start, len = Math.min(x, y), thisCopy = this.slice(thisStart, thisEnd), targetCopy = target.slice(start, end), i = 0; i < len; ++i)
                        if (thisCopy[i] !== targetCopy[i]) {
                            x = thisCopy[i],
                            y = targetCopy[i];
                            break
                        }
                    return x < y ? -1 : y < x ? 1 : 0
                }
                ;
                function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                    if (buffer.length === 0)
                        return -1;
                    if (typeof byteOffset == "string" ? (encoding = byteOffset,
                    byteOffset = 0) : byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648),
                    byteOffset = +byteOffset,
                    numberIsNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1),
                    byteOffset < 0 && (byteOffset = buffer.length + byteOffset),
                    byteOffset >= buffer.length) {
                        if (dir)
                            return -1;
                        byteOffset = buffer.length - 1
                    } else if (byteOffset < 0)
                        if (dir)
                            byteOffset = 0;
                        else
                            return -1;
                    if (typeof val == "string" && (val = Buffer3.from(val, encoding)),
                    Buffer3.isBuffer(val))
                        return val.length === 0 ? -1 : arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                    if (typeof val == "number")
                        return val = val & 255,
                        typeof Uint8Array.prototype.indexOf == "function" ? dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset) : arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
                    throw new TypeError("val must be string, number or Buffer")
                }
                function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                    var indexSize = 1
                      , arrLength = arr.length
                      , valLength = val.length;
                    if (encoding !== void 0 && (encoding = String(encoding).toLowerCase(),
                    encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le")) {
                        if (arr.length < 2 || val.length < 2)
                            return -1;
                        indexSize = 2,
                        arrLength /= 2,
                        valLength /= 2,
                        byteOffset /= 2
                    }
                    function read(buf, i2) {
                        return indexSize === 1 ? buf[i2] : buf.readUInt16BE(i2 * indexSize)
                    }
                    var i;
                    if (dir) {
                        var foundIndex = -1;
                        for (i = byteOffset; i < arrLength; i++)
                            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                                if (foundIndex === -1 && (foundIndex = i),
                                i - foundIndex + 1 === valLength)
                                    return foundIndex * indexSize
                            } else
                                foundIndex !== -1 && (i -= i - foundIndex),
                                foundIndex = -1
                    } else
                        for (byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength),
                        i = byteOffset; i >= 0; i--) {
                            for (var found = !0, j = 0; j < valLength; j++)
                                if (read(arr, i + j) !== read(val, j)) {
                                    found = !1;
                                    break
                                }
                            if (found)
                                return i
                        }
                    return -1
                }
                Buffer3.prototype.includes = function(val, byteOffset, encoding) {
                    return this.indexOf(val, byteOffset, encoding) !== -1
                }
                ;
                Buffer3.prototype.indexOf = function(val, byteOffset, encoding) {
                    return bidirectionalIndexOf(this, val, byteOffset, encoding, !0)
                }
                ;
                Buffer3.prototype.lastIndexOf = function(val, byteOffset, encoding) {
                    return bidirectionalIndexOf(this, val, byteOffset, encoding, !1)
                }
                ;
                function hexWrite(buf, string, offset, length) {
                    offset = Number(offset) || 0;
                    var remaining = buf.length - offset;
                    length ? (length = Number(length),
                    length > remaining && (length = remaining)) : length = remaining;
                    var strLen = string.length;
                    length > strLen / 2 && (length = strLen / 2);
                    for (var i = 0; i < length; ++i) {
                        var parsed = parseInt(string.substr(i * 2, 2), 16);
                        if (numberIsNaN(parsed))
                            return i;
                        buf[offset + i] = parsed
                    }
                    return i
                }
                function utf8Write(buf, string, offset, length) {
                    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
                }
                function asciiWrite(buf, string, offset, length) {
                    return blitBuffer(asciiToBytes(string), buf, offset, length)
                }
                function base64Write(buf, string, offset, length) {
                    return blitBuffer(base64ToBytes(string), buf, offset, length)
                }
                function ucs2Write(buf, string, offset, length) {
                    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
                }
                Buffer3.prototype.write = function(string, offset, length, encoding) {
                    if (offset === void 0)
                        encoding = "utf8",
                        length = this.length,
                        offset = 0;
                    else if (length === void 0 && typeof offset == "string")
                        encoding = offset,
                        length = this.length,
                        offset = 0;
                    else if (isFinite(offset))
                        offset = offset >>> 0,
                        isFinite(length) ? (length = length >>> 0,
                        encoding === void 0 && (encoding = "utf8")) : (encoding = length,
                        length = void 0);
                    else
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    var remaining = this.length - offset;
                    if ((length === void 0 || length > remaining) && (length = remaining),
                    string.length > 0 && (length < 0 || offset < 0) || offset > this.length)
                        throw new RangeError("Attempt to write outside buffer bounds");
                    encoding || (encoding = "utf8");
                    for (var loweredCase = !1; ; )
                        switch (encoding) {
                        case "hex":
                            return hexWrite(this, string, offset, length);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, string, offset, length);
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return asciiWrite(this, string, offset, length);
                        case "base64":
                            return base64Write(this, string, offset, length);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, string, offset, length);
                        default:
                            if (loweredCase)
                                throw new TypeError("Unknown encoding: " + encoding);
                            encoding = ("" + encoding).toLowerCase(),
                            loweredCase = !0
                        }
                }
                ;
                Buffer3.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }
                ;
                function base64Slice(buf, start, end) {
                    return start === 0 && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end))
                }
                function utf8Slice(buf, start, end) {
                    end = Math.min(buf.length, end);
                    for (var res = [], i = start; i < end; ) {
                        var firstByte = buf[i]
                          , codePoint = null
                          , bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                        if (i + bytesPerSequence <= end) {
                            var secondByte, thirdByte, fourthByte, tempCodePoint;
                            switch (bytesPerSequence) {
                            case 1:
                                firstByte < 128 && (codePoint = firstByte);
                                break;
                            case 2:
                                secondByte = buf[i + 1],
                                (secondByte & 192) === 128 && (tempCodePoint = (firstByte & 31) << 6 | secondByte & 63,
                                tempCodePoint > 127 && (codePoint = tempCodePoint));
                                break;
                            case 3:
                                secondByte = buf[i + 1],
                                thirdByte = buf[i + 2],
                                (secondByte & 192) === 128 && (thirdByte & 192) === 128 && (tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63,
                                tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint));
                                break;
                            case 4:
                                secondByte = buf[i + 1],
                                thirdByte = buf[i + 2],
                                fourthByte = buf[i + 3],
                                (secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128 && (tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63,
                                tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint))
                            }
                        }
                        codePoint === null ? (codePoint = 65533,
                        bytesPerSequence = 1) : codePoint > 65535 && (codePoint -= 65536,
                        res.push(codePoint >>> 10 & 1023 | 55296),
                        codePoint = 56320 | codePoint & 1023),
                        res.push(codePoint),
                        i += bytesPerSequence
                    }
                    return decodeCodePointsArray(res)
                }
                var MAX_ARGUMENTS_LENGTH = 4096;
                function decodeCodePointsArray(codePoints) {
                    var len = codePoints.length;
                    if (len <= MAX_ARGUMENTS_LENGTH)
                        return String.fromCharCode.apply(String, codePoints);
                    for (var res = "", i = 0; i < len; )
                        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                    return res
                }
                function asciiSlice(buf, start, end) {
                    var ret = "";
                    end = Math.min(buf.length, end);
                    for (var i = start; i < end; ++i)
                        ret += String.fromCharCode(buf[i] & 127);
                    return ret
                }
                function latin1Slice(buf, start, end) {
                    var ret = "";
                    end = Math.min(buf.length, end);
                    for (var i = start; i < end; ++i)
                        ret += String.fromCharCode(buf[i]);
                    return ret
                }
                function hexSlice(buf, start, end) {
                    var len = buf.length;
                    (!start || start < 0) && (start = 0),
                    (!end || end < 0 || end > len) && (end = len);
                    for (var out = "", i = start; i < end; ++i)
                        out += hexSliceLookupTable[buf[i]];
                    return out
                }
                function utf16leSlice(buf, start, end) {
                    for (var bytes = buf.slice(start, end), res = "", i = 0; i < bytes.length - 1; i += 2)
                        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                    return res
                }
                Buffer3.prototype.slice = function(start, end) {
                    var len = this.length;
                    start = ~~start,
                    end = end === void 0 ? len : ~~end,
                    start < 0 ? (start += len,
                    start < 0 && (start = 0)) : start > len && (start = len),
                    end < 0 ? (end += len,
                    end < 0 && (end = 0)) : end > len && (end = len),
                    end < start && (end = start);
                    var newBuf = this.subarray(start, end);
                    return Object.setPrototypeOf(newBuf, Buffer3.prototype),
                    newBuf
                }
                ;
                function checkOffset(offset, ext, length) {
                    if (offset % 1 !== 0 || offset < 0)
                        throw new RangeError("offset is not uint");
                    if (offset + ext > length)
                        throw new RangeError("Trying to access beyond buffer length")
                }
                Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function(offset, byteLength2, noAssert) {
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    noAssert || checkOffset(offset, byteLength2, this.length);
                    for (var val = this[offset], mul = 1, i = 0; ++i < byteLength2 && (mul *= 256); )
                        val += this[offset + i] * mul;
                    return val
                }
                ;
                Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function(offset, byteLength2, noAssert) {
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    noAssert || checkOffset(offset, byteLength2, this.length);
                    for (var val = this[offset + --byteLength2], mul = 1; byteLength2 > 0 && (mul *= 256); )
                        val += this[offset + --byteLength2] * mul;
                    return val
                }
                ;
                Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 1, this.length),
                    this[offset]
                }
                ;
                Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 2, this.length),
                    this[offset] | this[offset + 1] << 8
                }
                ;
                Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 2, this.length),
                    this[offset] << 8 | this[offset + 1]
                }
                ;
                Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216
                }
                ;
                Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3])
                }
                ;
                Buffer3.prototype.readIntLE = function(offset, byteLength2, noAssert) {
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    noAssert || checkOffset(offset, byteLength2, this.length);
                    for (var val = this[offset], mul = 1, i = 0; ++i < byteLength2 && (mul *= 256); )
                        val += this[offset + i] * mul;
                    return mul *= 128,
                    val >= mul && (val -= Math.pow(2, 8 * byteLength2)),
                    val
                }
                ;
                Buffer3.prototype.readIntBE = function(offset, byteLength2, noAssert) {
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    noAssert || checkOffset(offset, byteLength2, this.length);
                    for (var i = byteLength2, mul = 1, val = this[offset + --i]; i > 0 && (mul *= 256); )
                        val += this[offset + --i] * mul;
                    return mul *= 128,
                    val >= mul && (val -= Math.pow(2, 8 * byteLength2)),
                    val
                }
                ;
                Buffer3.prototype.readInt8 = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 1, this.length),
                    this[offset] & 128 ? (255 - this[offset] + 1) * -1 : this[offset]
                }
                ;
                Buffer3.prototype.readInt16LE = function(offset, noAssert) {
                    offset = offset >>> 0,
                    noAssert || checkOffset(offset, 2, this.length);
                    var val = this[offset] | this[offset + 1] << 8;
                    return val & 32768 ? val | 4294901760 : val
                }
                ;
                Buffer3.prototype.readInt16BE = function(offset, noAssert) {
                    offset = offset >>> 0,
                    noAssert || checkOffset(offset, 2, this.length);
                    var val = this[offset + 1] | this[offset] << 8;
                    return val & 32768 ? val | 4294901760 : val
                }
                ;
                Buffer3.prototype.readInt32LE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24
                }
                ;
                Buffer3.prototype.readInt32BE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]
                }
                ;
                Buffer3.prototype.readFloatLE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    ieee754.read(this, offset, !0, 23, 4)
                }
                ;
                Buffer3.prototype.readFloatBE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 4, this.length),
                    ieee754.read(this, offset, !1, 23, 4)
                }
                ;
                Buffer3.prototype.readDoubleLE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 8, this.length),
                    ieee754.read(this, offset, !0, 52, 8)
                }
                ;
                Buffer3.prototype.readDoubleBE = function(offset, noAssert) {
                    return offset = offset >>> 0,
                    noAssert || checkOffset(offset, 8, this.length),
                    ieee754.read(this, offset, !1, 52, 8)
                }
                ;
                function checkInt(buf, value, offset, ext, max, min) {
                    if (!Buffer3.isBuffer(buf))
                        throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (value > max || value < min)
                        throw new RangeError('"value" argument is out of bounds');
                    if (offset + ext > buf.length)
                        throw new RangeError("Index out of range")
                }
                Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function(value, offset, byteLength2, noAssert) {
                    if (value = +value,
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    !noAssert) {
                        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                        checkInt(this, value, offset, byteLength2, maxBytes, 0)
                    }
                    var mul = 1
                      , i = 0;
                    for (this[offset] = value & 255; ++i < byteLength2 && (mul *= 256); )
                        this[offset + i] = value / mul & 255;
                    return offset + byteLength2
                }
                ;
                Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function(value, offset, byteLength2, noAssert) {
                    if (value = +value,
                    offset = offset >>> 0,
                    byteLength2 = byteLength2 >>> 0,
                    !noAssert) {
                        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                        checkInt(this, value, offset, byteLength2, maxBytes, 0)
                    }
                    var i = byteLength2 - 1
                      , mul = 1;
                    for (this[offset + i] = value & 255; --i >= 0 && (mul *= 256); )
                        this[offset + i] = value / mul & 255;
                    return offset + byteLength2
                }
                ;
                Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 1, 255, 0),
                    this[offset] = value & 255,
                    offset + 1
                }
                ;
                Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 2, 65535, 0),
                    this[offset] = value & 255,
                    this[offset + 1] = value >>> 8,
                    offset + 2
                }
                ;
                Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 2, 65535, 0),
                    this[offset] = value >>> 8,
                    this[offset + 1] = value & 255,
                    offset + 2
                }
                ;
                Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 4, 4294967295, 0),
                    this[offset + 3] = value >>> 24,
                    this[offset + 2] = value >>> 16,
                    this[offset + 1] = value >>> 8,
                    this[offset] = value & 255,
                    offset + 4
                }
                ;
                Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 4, 4294967295, 0),
                    this[offset] = value >>> 24,
                    this[offset + 1] = value >>> 16,
                    this[offset + 2] = value >>> 8,
                    this[offset + 3] = value & 255,
                    offset + 4
                }
                ;
                Buffer3.prototype.writeIntLE = function(value, offset, byteLength2, noAssert) {
                    if (value = +value,
                    offset = offset >>> 0,
                    !noAssert) {
                        var limit = Math.pow(2, 8 * byteLength2 - 1);
                        checkInt(this, value, offset, byteLength2, limit - 1, -limit)
                    }
                    var i = 0
                      , mul = 1
                      , sub = 0;
                    for (this[offset] = value & 255; ++i < byteLength2 && (mul *= 256); )
                        value < 0 && sub === 0 && this[offset + i - 1] !== 0 && (sub = 1),
                        this[offset + i] = (value / mul >> 0) - sub & 255;
                    return offset + byteLength2
                }
                ;
                Buffer3.prototype.writeIntBE = function(value, offset, byteLength2, noAssert) {
                    if (value = +value,
                    offset = offset >>> 0,
                    !noAssert) {
                        var limit = Math.pow(2, 8 * byteLength2 - 1);
                        checkInt(this, value, offset, byteLength2, limit - 1, -limit)
                    }
                    var i = byteLength2 - 1
                      , mul = 1
                      , sub = 0;
                    for (this[offset + i] = value & 255; --i >= 0 && (mul *= 256); )
                        value < 0 && sub === 0 && this[offset + i + 1] !== 0 && (sub = 1),
                        this[offset + i] = (value / mul >> 0) - sub & 255;
                    return offset + byteLength2
                }
                ;
                Buffer3.prototype.writeInt8 = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 1, 127, -128),
                    value < 0 && (value = 255 + value + 1),
                    this[offset] = value & 255,
                    offset + 1
                }
                ;
                Buffer3.prototype.writeInt16LE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 2, 32767, -32768),
                    this[offset] = value & 255,
                    this[offset + 1] = value >>> 8,
                    offset + 2
                }
                ;
                Buffer3.prototype.writeInt16BE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 2, 32767, -32768),
                    this[offset] = value >>> 8,
                    this[offset + 1] = value & 255,
                    offset + 2
                }
                ;
                Buffer3.prototype.writeInt32LE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648),
                    this[offset] = value & 255,
                    this[offset + 1] = value >>> 8,
                    this[offset + 2] = value >>> 16,
                    this[offset + 3] = value >>> 24,
                    offset + 4
                }
                ;
                Buffer3.prototype.writeInt32BE = function(value, offset, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648),
                    value < 0 && (value = 4294967295 + value + 1),
                    this[offset] = value >>> 24,
                    this[offset + 1] = value >>> 16,
                    this[offset + 2] = value >>> 8,
                    this[offset + 3] = value & 255,
                    offset + 4
                }
                ;
                function checkIEEE754(buf, value, offset, ext, max, min) {
                    if (offset + ext > buf.length)
                        throw new RangeError("Index out of range");
                    if (offset < 0)
                        throw new RangeError("Index out of range")
                }
                function writeFloat(buf, value, offset, littleEndian, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22),
                    ieee754.write(buf, value, offset, littleEndian, 23, 4),
                    offset + 4
                }
                Buffer3.prototype.writeFloatLE = function(value, offset, noAssert) {
                    return writeFloat(this, value, offset, !0, noAssert)
                }
                ;
                Buffer3.prototype.writeFloatBE = function(value, offset, noAssert) {
                    return writeFloat(this, value, offset, !1, noAssert)
                }
                ;
                function writeDouble(buf, value, offset, littleEndian, noAssert) {
                    return value = +value,
                    offset = offset >>> 0,
                    noAssert || checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292),
                    ieee754.write(buf, value, offset, littleEndian, 52, 8),
                    offset + 8
                }
                Buffer3.prototype.writeDoubleLE = function(value, offset, noAssert) {
                    return writeDouble(this, value, offset, !0, noAssert)
                }
                ;
                Buffer3.prototype.writeDoubleBE = function(value, offset, noAssert) {
                    return writeDouble(this, value, offset, !1, noAssert)
                }
                ;
                Buffer3.prototype.copy = function(target, targetStart, start, end) {
                    if (!Buffer3.isBuffer(target))
                        throw new TypeError("argument should be a Buffer");
                    if (start || (start = 0),
                    !end && end !== 0 && (end = this.length),
                    targetStart >= target.length && (targetStart = target.length),
                    targetStart || (targetStart = 0),
                    end > 0 && end < start && (end = start),
                    end === start || target.length === 0 || this.length === 0)
                        return 0;
                    if (targetStart < 0)
                        throw new RangeError("targetStart out of bounds");
                    if (start < 0 || start >= this.length)
                        throw new RangeError("Index out of range");
                    if (end < 0)
                        throw new RangeError("sourceEnd out of bounds");
                    end > this.length && (end = this.length),
                    target.length - targetStart < end - start && (end = target.length - targetStart + start);
                    var len = end - start;
                    return this === target && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(targetStart, start, end) : Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart),
                    len
                }
                ;
                Buffer3.prototype.fill = function(val, start, end, encoding) {
                    if (typeof val == "string") {
                        if (typeof start == "string" ? (encoding = start,
                        start = 0,
                        end = this.length) : typeof end == "string" && (encoding = end,
                        end = this.length),
                        encoding !== void 0 && typeof encoding != "string")
                            throw new TypeError("encoding must be a string");
                        if (typeof encoding == "string" && !Buffer3.isEncoding(encoding))
                            throw new TypeError("Unknown encoding: " + encoding);
                        if (val.length === 1) {
                            var code = val.charCodeAt(0);
                            (encoding === "utf8" && code < 128 || encoding === "latin1") && (val = code)
                        }
                    } else
                        typeof val == "number" ? val = val & 255 : typeof val == "boolean" && (val = Number(val));
                    if (start < 0 || this.length < start || this.length < end)
                        throw new RangeError("Out of range index");
                    if (end <= start)
                        return this;
                    start = start >>> 0,
                    end = end === void 0 ? this.length : end >>> 0,
                    val || (val = 0);
                    var i;
                    if (typeof val == "number")
                        for (i = start; i < end; ++i)
                            this[i] = val;
                    else {
                        var bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding)
                          , len = bytes.length;
                        if (len === 0)
                            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
                        for (i = 0; i < end - start; ++i)
                            this[i + start] = bytes[i % len]
                    }
                    return this
                }
                ;
                var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
                function base64clean(str) {
                    if (str = str.split("=")[0],
                    str = str.trim().replace(INVALID_BASE64_RE, ""),
                    str.length < 2)
                        return "";
                    for (; str.length % 4 !== 0; )
                        str = str + "=";
                    return str
                }
                function utf8ToBytes(string, units) {
                    units = units || 1 / 0;
                    for (var codePoint, length = string.length, leadSurrogate = null, bytes = [], i = 0; i < length; ++i) {
                        if (codePoint = string.charCodeAt(i),
                        codePoint > 55295 && codePoint < 57344) {
                            if (!leadSurrogate) {
                                if (codePoint > 56319) {
                                    (units -= 3) > -1 && bytes.push(239, 191, 189);
                                    continue
                                } else if (i + 1 === length) {
                                    (units -= 3) > -1 && bytes.push(239, 191, 189);
                                    continue
                                }
                                leadSurrogate = codePoint;
                                continue
                            }
                            if (codePoint < 56320) {
                                (units -= 3) > -1 && bytes.push(239, 191, 189),
                                leadSurrogate = codePoint;
                                continue
                            }
                            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536
                        } else
                            leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
                        if (leadSurrogate = null,
                        codePoint < 128) {
                            if ((units -= 1) < 0)
                                break;
                            bytes.push(codePoint)
                        } else if (codePoint < 2048) {
                            if ((units -= 2) < 0)
                                break;
                            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128)
                        } else if (codePoint < 65536) {
                            if ((units -= 3) < 0)
                                break;
                            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128)
                        } else if (codePoint < 1114112) {
                            if ((units -= 4) < 0)
                                break;
                            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128)
                        } else
                            throw new Error("Invalid code point")
                    }
                    return bytes
                }
                function asciiToBytes(str) {
                    for (var byteArray = [], i = 0; i < str.length; ++i)
                        byteArray.push(str.charCodeAt(i) & 255);
                    return byteArray
                }
                function utf16leToBytes(str, units) {
                    for (var c, hi, lo, byteArray = [], i = 0; i < str.length && !((units -= 2) < 0); ++i)
                        c = str.charCodeAt(i),
                        hi = c >> 8,
                        lo = c % 256,
                        byteArray.push(lo),
                        byteArray.push(hi);
                    return byteArray
                }
                function base64ToBytes(str) {
                    return base64.toByteArray(base64clean(str))
                }
                function blitBuffer(src, dst, offset, length) {
                    for (var i = 0; i < length && !(i + offset >= dst.length || i >= src.length); ++i)
                        dst[i + offset] = src[i];
                    return i
                }
                function isInstance(obj, type) {
                    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name
                }
                function numberIsNaN(obj) {
                    return obj !== obj
                }
                var hexSliceLookupTable = function() {
                    for (var alphabet = "0123456789abcdef", table = new Array(256), i = 0; i < 16; ++i)
                        for (var i16 = i * 16, j = 0; j < 16; ++j)
                            table[i16 + j] = alphabet[i] + alphabet[j];
                    return table
                }()
            }
        });
        var require_browser = __commonJS({
            "node_modules/process/browser.js"(exports, module) {
                init_define_process_env();
                init_shim();
                var process2 = module.exports = {}, cachedSetTimeout, cachedClearTimeout;
                function defaultSetTimout() {
                    throw new Error("setTimeout has not been defined")
                }
                function defaultClearTimeout() {
                    throw new Error("clearTimeout has not been defined")
                }
                (function() {
                    try {
                        typeof setTimeout == "function" ? cachedSetTimeout = setTimeout : cachedSetTimeout = defaultSetTimout
                    } catch {
                        cachedSetTimeout = defaultSetTimout
                    }
                    try {
                        typeof clearTimeout == "function" ? cachedClearTimeout = clearTimeout : cachedClearTimeout = defaultClearTimeout
                    } catch {
                        cachedClearTimeout = defaultClearTimeout
                    }
                }
                )();
                function runTimeout(fun) {
                    if (cachedSetTimeout === setTimeout)
                        return setTimeout(fun, 0);
                    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout)
                        return cachedSetTimeout = setTimeout,
                        setTimeout(fun, 0);
                    try {
                        return cachedSetTimeout(fun, 0)
                    } catch {
                        try {
                            return cachedSetTimeout.call(null, fun, 0)
                        } catch {
                            return cachedSetTimeout.call(this, fun, 0)
                        }
                    }
                }
                function runClearTimeout(marker) {
                    if (cachedClearTimeout === clearTimeout)
                        return clearTimeout(marker);
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout)
                        return cachedClearTimeout = clearTimeout,
                        clearTimeout(marker);
                    try {
                        return cachedClearTimeout(marker)
                    } catch {
                        try {
                            return cachedClearTimeout.call(null, marker)
                        } catch {
                            return cachedClearTimeout.call(this, marker)
                        }
                    }
                }
                var queue = [], draining = !1, currentQueue, queueIndex = -1;
                function cleanUpNextTick() {
                    !draining || !currentQueue || (draining = !1,
                    currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1,
                    queue.length && drainQueue())
                }
                function drainQueue() {
                    if (!draining) {
                        var timeout = runTimeout(cleanUpNextTick);
                        draining = !0;
                        for (var len = queue.length; len; ) {
                            for (currentQueue = queue,
                            queue = []; ++queueIndex < len; )
                                currentQueue && currentQueue[queueIndex].run();
                            queueIndex = -1,
                            len = queue.length
                        }
                        currentQueue = null,
                        draining = !1,
                        runClearTimeout(timeout)
                    }
                }
                process2.nextTick = function(fun) {
                    var args = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var i = 1; i < arguments.length; i++)
                            args[i - 1] = arguments[i];
                    queue.push(new Item(fun,args)),
                    queue.length === 1 && !draining && runTimeout(drainQueue)
                }
                ;
                function Item(fun, array) {
                    this.fun = fun,
                    this.array = array
                }
                Item.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ;
                process2.title = "browser";
                process2.browser = !0;
                process2.env = {};
                process2.argv = [];
                process2.version = "";
                process2.versions = {};
                function noop() {}
                process2.on = noop;
                process2.addListener = noop;
                process2.once = noop;
                process2.off = noop;
                process2.removeListener = noop;
                process2.removeAllListeners = noop;
                process2.emit = noop;
                process2.prependListener = noop;
                process2.prependOnceListener = noop;
                process2.listeners = function(name) {
                    return []
                }
                ;
                process2.binding = function(name) {
                    throw new Error("process.binding is not supported")
                }
                ;
                process2.cwd = function() {
                    return "/"
                }
                ;
                process2.chdir = function(dir) {
                    throw new Error("process.chdir is not supported")
                }
                ;
                process2.umask = function() {
                    return 0
                }
            }
        });
        var import_buffer, import_process, _globalThis, init_shim = __esm({
            "node_modules/node-stdlib-browser/helpers/esbuild/shim.js"() {
                import_buffer = __toESM(require_buffer()),
                import_process = __toESM(require_browser()),
                _globalThis = function(Object2) {
                    function get() {
                        var _global3 = this || self;
                        return delete Object2.prototype.__magic__,
                        _global3
                    }
                    if (typeof globalThis == "object")
                        return globalThis;
                    if (this)
                        return get();
                    Object2.defineProperty(Object2.prototype, "__magic__", {
                        configurable: !0,
                        get
                    });
                    var _global2 = __magic__;
                    return _global2
                }(Object)
            }
        });
        init_define_process_env();
        init_shim();
        (function(t) {
            typeof define == "function" && define.amd ? define(["jquery"], t) : t(jQuery)
        }
        )(function(t) {
            t.ui = t.ui || {},
            t.ui.version = "1.12.1";
            var e = 0
              , i = Array.prototype.slice;
            t.cleanData = function(e2) {
                return function(i2) {
                    var s2, n2, o;
                    for (o = 0; (n2 = i2[o]) != null; o++)
                        try {
                            s2 = t._data(n2, "events"),
                            s2 && s2.remove && t(n2).triggerHandler("remove")
                        } catch {}
                    e2(i2)
                }
            }(t.cleanData),
            t.widget = function(e2, i2, s2) {
                var n2, o, a, r = {}, l = e2.split(".")[0];
                e2 = e2.split(".")[1];
                var h = l + "-" + e2;
                return s2 || (s2 = i2,
                i2 = t.Widget),
                t.isArray(s2) && (s2 = t.extend.apply(null, [{}].concat(s2))),
                t.expr[":"][h.toLowerCase()] = function(e3) {
                    return !!t.data(e3, h)
                }
                ,
                t[l] = t[l] || {},
                n2 = t[l][e2],
                o = t[l][e2] = function(t2, e3) {
                    return this._createWidget ? (arguments.length && this._createWidget(t2, e3),
                    void 0) : new o(t2,e3)
                }
                ,
                t.extend(o, n2, {
                    version: s2.version,
                    _proto: t.extend({}, s2),
                    _childConstructors: []
                }),
                a = new i2,
                a.options = t.widget.extend({}, a.options),
                t.each(s2, function(e3, s3) {
                    return t.isFunction(s3) ? (r[e3] = function() {
                        function t2() {
                            return i2.prototype[e3].apply(this, arguments)
                        }
                        function n3(t3) {
                            return i2.prototype[e3].apply(this, t3)
                        }
                        return function() {
                            var e4, i3 = this._super, o2 = this._superApply;
                            return this._super = t2,
                            this._superApply = n3,
                            e4 = s3.apply(this, arguments),
                            this._super = i3,
                            this._superApply = o2,
                            e4
                        }
                    }(),
                    void 0) : (r[e3] = s3,
                    void 0)
                }),
                o.prototype = t.widget.extend(a, {
                    widgetEventPrefix: n2 && a.widgetEventPrefix || e2
                }, r, {
                    constructor: o,
                    namespace: l,
                    widgetName: e2,
                    widgetFullName: h
                }),
                n2 ? (t.each(n2._childConstructors, function(e3, i3) {
                    var s3 = i3.prototype;
                    t.widget(s3.namespace + "." + s3.widgetName, o, i3._proto)
                }),
                delete n2._childConstructors) : i2._childConstructors.push(o),
                t.widget.bridge(e2, o),
                o
            }
            ,
            t.widget.extend = function(e2) {
                for (var s2, n2, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
                    for (s2 in o[a])
                        n2 = o[a][s2],
                        o[a].hasOwnProperty(s2) && n2 !== void 0 && (e2[s2] = t.isPlainObject(n2) ? t.isPlainObject(e2[s2]) ? t.widget.extend({}, e2[s2], n2) : t.widget.extend({}, n2) : n2);
                return e2
            }
            ,
            t.widget.bridge = function(e2, s2) {
                var n2 = s2.prototype.widgetFullName || e2;
                t.fn[e2] = function(o) {
                    var a = typeof o == "string"
                      , r = i.call(arguments, 1)
                      , l = this;
                    return a ? this.length || o !== "instance" ? this.each(function() {
                        var i2, s3 = t.data(this, n2);
                        return o === "instance" ? (l = s3,
                        !1) : s3 ? t.isFunction(s3[o]) && o.charAt(0) !== "_" ? (i2 = s3[o].apply(s3, r),
                        i2 !== s3 && i2 !== void 0 ? (l = i2 && i2.jquery ? l.pushStack(i2.get()) : i2,
                        !1) : void 0) : t.error("no such method '" + o + "' for " + e2 + " widget instance") : t.error("cannot call methods on " + e2 + " prior to initialization; attempted to call method '" + o + "'")
                    }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))),
                    this.each(function() {
                        var e3 = t.data(this, n2);
                        e3 ? (e3.option(o || {}),
                        e3._init && e3._init()) : t.data(this, n2, new s2(o,this))
                    })),
                    l
                }
            }
            ,
            t.Widget = function() {}
            ,
            t.Widget._childConstructors = [],
            t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(i2, s2) {
                    s2 = t(s2 || this.defaultElement || this)[0],
                    this.element = t(s2),
                    this.uuid = e++,
                    this.eventNamespace = "." + this.widgetName + this.uuid,
                    this.bindings = t(),
                    this.hoverable = t(),
                    this.focusable = t(),
                    this.classesElementLookup = {},
                    s2 !== this && (t.data(s2, this.widgetFullName, this),
                    this._on(!0, this.element, {
                        remove: function(t2) {
                            t2.target === s2 && this.destroy()
                        }
                    }),
                    this.document = t(s2.style ? s2.ownerDocument : s2.document || s2),
                    this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
                    this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i2),
                    this._create(),
                    this.options.disabled && this._setOptionDisabled(this.options.disabled),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init()
                },
                _getCreateOptions: function() {
                    return {}
                },
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function() {
                    var e2 = this;
                    this._destroy(),
                    t.each(this.classesElementLookup, function(t2, i2) {
                        e2._removeClass(i2, t2)
                    }),
                    this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                    this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                    this.bindings.off(this.eventNamespace)
                },
                _destroy: t.noop,
                widget: function() {
                    return this.element
                },
                option: function(e2, i2) {
                    var s2, n2, o, a = e2;
                    if (arguments.length === 0)
                        return t.widget.extend({}, this.options);
                    if (typeof e2 == "string")
                        if (a = {},
                        s2 = e2.split("."),
                        e2 = s2.shift(),
                        s2.length) {
                            for (n2 = a[e2] = t.widget.extend({}, this.options[e2]),
                            o = 0; s2.length - 1 > o; o++)
                                n2[s2[o]] = n2[s2[o]] || {},
                                n2 = n2[s2[o]];
                            if (e2 = s2.pop(),
                            arguments.length === 1)
                                return n2[e2] === void 0 ? null : n2[e2];
                            n2[e2] = i2
                        } else {
                            if (arguments.length === 1)
                                return this.options[e2] === void 0 ? null : this.options[e2];
                            a[e2] = i2
                        }
                    return this._setOptions(a),
                    this
                },
                _setOptions: function(t2) {
                    var e2;
                    for (e2 in t2)
                        this._setOption(e2, t2[e2]);
                    return this
                },
                _setOption: function(t2, e2) {
                    return t2 === "classes" && this._setOptionClasses(e2),
                    this.options[t2] = e2,
                    t2 === "disabled" && this._setOptionDisabled(e2),
                    this
                },
                _setOptionClasses: function(e2) {
                    var i2, s2, n2;
                    for (i2 in e2)
                        n2 = this.classesElementLookup[i2],
                        e2[i2] !== this.options.classes[i2] && n2 && n2.length && (s2 = t(n2.get()),
                        this._removeClass(n2, i2),
                        s2.addClass(this._classes({
                            element: s2,
                            keys: i2,
                            classes: e2,
                            add: !0
                        })))
                },
                _setOptionDisabled: function(t2) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t2),
                    t2 && (this._removeClass(this.hoverable, null, "ui-state-hover"),
                    this._removeClass(this.focusable, null, "ui-state-focus"))
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _classes: function(e2) {
                    function i2(i3, o) {
                        var a, r;
                        for (r = 0; i3.length > r; r++)
                            a = n2.classesElementLookup[i3[r]] || t(),
                            a = e2.add ? t(t.unique(a.get().concat(e2.element.get()))) : t(a.not(e2.element).get()),
                            n2.classesElementLookup[i3[r]] = a,
                            s2.push(i3[r]),
                            o && e2.classes[i3[r]] && s2.push(e2.classes[i3[r]])
                    }
                    var s2 = []
                      , n2 = this;
                    return e2 = t.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, e2),
                    this._on(e2.element, {
                        remove: "_untrackClassesElement"
                    }),
                    e2.keys && i2(e2.keys.match(/\S+/g) || [], !0),
                    e2.extra && i2(e2.extra.match(/\S+/g) || []),
                    s2.join(" ")
                },
                _untrackClassesElement: function(e2) {
                    var i2 = this;
                    t.each(i2.classesElementLookup, function(s2, n2) {
                        t.inArray(e2.target, n2) !== -1 && (i2.classesElementLookup[s2] = t(n2.not(e2.target).get()))
                    })
                },
                _removeClass: function(t2, e2, i2) {
                    return this._toggleClass(t2, e2, i2, !1)
                },
                _addClass: function(t2, e2, i2) {
                    return this._toggleClass(t2, e2, i2, !0)
                },
                _toggleClass: function(t2, e2, i2, s2) {
                    s2 = typeof s2 == "boolean" ? s2 : i2;
                    var n2 = typeof t2 == "string" || t2 === null
                      , o = {
                        extra: n2 ? e2 : i2,
                        keys: n2 ? t2 : e2,
                        element: n2 ? this.element : t2,
                        add: s2
                    };
                    return o.element.toggleClass(this._classes(o), s2),
                    this
                },
                _on: function(e2, i2, s2) {
                    var n2, o = this;
                    typeof e2 != "boolean" && (s2 = i2,
                    i2 = e2,
                    e2 = !1),
                    s2 ? (i2 = n2 = t(i2),
                    this.bindings = this.bindings.add(i2)) : (s2 = i2,
                    i2 = this.element,
                    n2 = this.widget()),
                    t.each(s2, function(s3, a) {
                        function r() {
                            return e2 || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? (typeof a == "string" ? o[a] : a).apply(o, arguments) : void 0
                        }
                        typeof a != "string" && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                        var l = s3.match(/^([\w:-]*)\s*(.*)$/)
                          , h = l[1] + o.eventNamespace
                          , c = l[2];
                        c ? n2.on(h, c, r) : i2.on(h, r)
                    })
                },
                _off: function(e2, i2) {
                    i2 = (i2 || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                    e2.off(i2).off(i2),
                    this.bindings = t(this.bindings.not(e2).get()),
                    this.focusable = t(this.focusable.not(e2).get()),
                    this.hoverable = t(this.hoverable.not(e2).get())
                },
                _delay: function(t2, e2) {
                    function i2() {
                        return (typeof t2 == "string" ? s2[t2] : t2).apply(s2, arguments)
                    }
                    var s2 = this;
                    return setTimeout(i2, e2 || 0)
                },
                _hoverable: function(e2) {
                    this.hoverable = this.hoverable.add(e2),
                    this._on(e2, {
                        mouseenter: function(e3) {
                            this._addClass(t(e3.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function(e3) {
                            this._removeClass(t(e3.currentTarget), null, "ui-state-hover")
                        }
                    })
                },
                _focusable: function(e2) {
                    this.focusable = this.focusable.add(e2),
                    this._on(e2, {
                        focusin: function(e3) {
                            this._addClass(t(e3.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function(e3) {
                            this._removeClass(t(e3.currentTarget), null, "ui-state-focus")
                        }
                    })
                },
                _trigger: function(e2, i2, s2) {
                    var n2, o, a = this.options[e2];
                    if (s2 = s2 || {},
                    i2 = t.Event(i2),
                    i2.type = (e2 === this.widgetEventPrefix ? e2 : this.widgetEventPrefix + e2).toLowerCase(),
                    i2.target = this.element[0],
                    o = i2.originalEvent)
                        for (n2 in o)
                            n2 in i2 || (i2[n2] = o[n2]);
                    return this.element.trigger(i2, s2),
                    !(t.isFunction(a) && a.apply(this.element[0], [i2].concat(s2)) === !1 || i2.isDefaultPrevented())
                }
            },
            t.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(e2, i2) {
                t.Widget.prototype["_" + e2] = function(s2, n2, o) {
                    typeof n2 == "string" && (n2 = {
                        effect: n2
                    });
                    var a, r = n2 ? n2 === !0 || typeof n2 == "number" ? i2 : n2.effect || i2 : e2;
                    n2 = n2 || {},
                    typeof n2 == "number" && (n2 = {
                        duration: n2
                    }),
                    a = !t.isEmptyObject(n2),
                    n2.complete = o,
                    n2.delay && s2.delay(n2.delay),
                    a && t.effects && t.effects.effect[r] ? s2[e2](n2) : r !== e2 && s2[r] ? s2[r](n2.duration, n2.easing, o) : s2.queue(function(i3) {
                        t(this)[e2](),
                        o && o.call(s2[0]),
                        i3()
                    })
                }
            }),
            t.widget,
            t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function(e2) {
                    return function(i2) {
                        return !!t.data(i2, e2)
                    }
                }) : function(e2, i2, s2) {
                    return !!t.data(e2, s2[3])
                }
            }),
            t.fn.scrollParent = function(e2) {
                var i2 = this.css("position")
                  , s2 = i2 === "absolute"
                  , n2 = e2 ? /(auto|scroll|hidden)/ : /(auto|scroll)/
                  , o = this.parents().filter(function() {
                    var e3 = t(this);
                    return s2 && e3.css("position") === "static" ? !1 : n2.test(e3.css("overflow") + e3.css("overflow-y") + e3.css("overflow-x"))
                }).eq(0);
                return i2 !== "fixed" && o.length ? o : t(this[0].ownerDocument || document)
            }
            ,
            t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
            var s = !1;
            t(document).on("mouseup", function() {
                s = !1
            }),
            t.widget("ui.mouse", {
                version: "1.12.1",
                options: {
                    cancel: "input, textarea, button, select, option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var e2 = this;
                    this.element.on("mousedown." + this.widgetName, function(t2) {
                        return e2._mouseDown(t2)
                    }).on("click." + this.widgetName, function(i2) {
                        return t.data(i2.target, e2.widgetName + ".preventClickEvent") === !0 ? (t.removeData(i2.target, e2.widgetName + ".preventClickEvent"),
                        i2.stopImmediatePropagation(),
                        !1) : void 0
                    }),
                    this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.off("." + this.widgetName),
                    this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(e2) {
                    if (!s) {
                        this._mouseMoved = !1,
                        this._mouseStarted && this._mouseUp(e2),
                        this._mouseDownEvent = e2;
                        var i2 = this
                          , n2 = e2.which === 1
                          , o = typeof this.options.cancel == "string" && e2.target.nodeName ? t(e2.target).closest(this.options.cancel).length : !1;
                        return n2 && !o && this._mouseCapture(e2) ? (this.mouseDelayMet = !this.options.delay,
                        this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i2.mouseDelayMet = !0
                        }, this.options.delay)),
                        this._mouseDistanceMet(e2) && this._mouseDelayMet(e2) && (this._mouseStarted = this._mouseStart(e2) !== !1,
                        !this._mouseStarted) ? (e2.preventDefault(),
                        !0) : (t.data(e2.target, this.widgetName + ".preventClickEvent") === !0 && t.removeData(e2.target, this.widgetName + ".preventClickEvent"),
                        this._mouseMoveDelegate = function(t2) {
                            return i2._mouseMove(t2)
                        }
                        ,
                        this._mouseUpDelegate = function(t2) {
                            return i2._mouseUp(t2)
                        }
                        ,
                        this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                        e2.preventDefault(),
                        s = !0,
                        !0)) : !0
                    }
                },
                _mouseMove: function(e2) {
                    if (this._mouseMoved) {
                        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e2.button)
                            return this._mouseUp(e2);
                        if (!e2.which) {
                            if (e2.originalEvent.altKey || e2.originalEvent.ctrlKey || e2.originalEvent.metaKey || e2.originalEvent.shiftKey)
                                this.ignoreMissingWhich = !0;
                            else if (!this.ignoreMissingWhich)
                                return this._mouseUp(e2)
                        }
                    }
                    return (e2.which || e2.button) && (this._mouseMoved = !0),
                    this._mouseStarted ? (this._mouseDrag(e2),
                    e2.preventDefault()) : (this._mouseDistanceMet(e2) && this._mouseDelayMet(e2) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e2) !== !1,
                    this._mouseStarted ? this._mouseDrag(e2) : this._mouseUp(e2)),
                    !this._mouseStarted)
                },
                _mouseUp: function(e2) {
                    this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && (this._mouseStarted = !1,
                    e2.target === this._mouseDownEvent.target && t.data(e2.target, this.widgetName + ".preventClickEvent", !0),
                    this._mouseStop(e2)),
                    this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
                    delete this._mouseDelayTimer),
                    this.ignoreMissingWhich = !1,
                    s = !1,
                    e2.preventDefault()
                },
                _mouseDistanceMet: function(t2) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - t2.pageX), Math.abs(this._mouseDownEvent.pageY - t2.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            }),
            t.ui.plugin = {
                add: function(e2, i2, s2) {
                    var n2, o = t.ui[e2].prototype;
                    for (n2 in s2)
                        o.plugins[n2] = o.plugins[n2] || [],
                        o.plugins[n2].push([i2, s2[n2]])
                },
                call: function(t2, e2, i2, s2) {
                    var n2, o = t2.plugins[e2];
                    if (o && (s2 || t2.element[0].parentNode && t2.element[0].parentNode.nodeType !== 11))
                        for (n2 = 0; o.length > n2; n2++)
                            t2.options[o[n2][0]] && o[n2][1].apply(t2.element, i2)
                }
            },
            t.ui.safeActiveElement = function(t2) {
                var e2;
                try {
                    e2 = t2.activeElement
                } catch {
                    e2 = t2.body
                }
                return e2 || (e2 = t2.body),
                e2.nodeName || (e2 = t2.body),
                e2
            }
            ,
            t.ui.safeBlur = function(e2) {
                e2 && e2.nodeName.toLowerCase() !== "body" && t(e2).trigger("blur")
            }
            ,
            t.widget("ui.draggable", t.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    this.options.helper === "original" && this._setPositionRelative(),
                    this.options.addClasses && this._addClass("ui-draggable"),
                    this._setHandleClassName(),
                    this._mouseInit()
                },
                _setOption: function(t2, e2) {
                    this._super(t2, e2),
                    t2 === "handle" && (this._removeHandleClassName(),
                    this._setHandleClassName())
                },
                _destroy: function() {
                    return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0,
                    void 0) : (this._removeHandleClassName(),
                    this._mouseDestroy(),
                    void 0)
                },
                _mouseCapture: function(e2) {
                    var i2 = this.options;
                    return this.helper || i2.disabled || t(e2.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e2),
                    this.handle ? (this._blurActiveElement(e2),
                    this._blockFrames(i2.iframeFix === !0 ? "iframe" : i2.iframeFix),
                    !0) : !1)
                },
                _blockFrames: function(e2) {
                    this.iframeBlocks = this.document.find(e2).map(function() {
                        var e3 = t(this);
                        return t("<div>").css("position", "absolute").appendTo(e3.parent()).outerWidth(e3.outerWidth()).outerHeight(e3.outerHeight()).offset(e3.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(),
                    delete this.iframeBlocks)
                },
                _blurActiveElement: function(e2) {
                    var i2 = t.ui.safeActiveElement(this.document[0])
                      , s2 = t(e2.target);
                    s2.closest(i2).length || t.ui.safeBlur(i2)
                },
                _mouseStart: function(e2) {
                    var i2 = this.options;
                    return this.helper = this._createHelper(e2),
                    this._addClass(this.helper, "ui-draggable-dragging"),
                    this._cacheHelperProportions(),
                    t.ui.ddmanager && (t.ui.ddmanager.current = this),
                    this._cacheMargins(),
                    this.cssPosition = this.helper.css("position"),
                    this.scrollParent = this.helper.scrollParent(!0),
                    this.offsetParent = this.helper.offsetParent(),
                    this.hasFixedAncestor = this.helper.parents().filter(function() {
                        return t(this).css("position") === "fixed"
                    }).length > 0,
                    this.positionAbs = this.element.offset(),
                    this._refreshOffsets(e2),
                    this.originalPosition = this.position = this._generatePosition(e2, !1),
                    this.originalPageX = e2.pageX,
                    this.originalPageY = e2.pageY,
                    i2.cursorAt && this._adjustOffsetFromHelper(i2.cursorAt),
                    this._setContainment(),
                    this._trigger("start", e2) === !1 ? (this._clear(),
                    !1) : (this._cacheHelperProportions(),
                    t.ui.ddmanager && !i2.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e2),
                    this._mouseDrag(e2, !0),
                    t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e2),
                    !0)
                },
                _refreshOffsets: function(t2) {
                    this.offset = {
                        top: this.positionAbs.top - this.margins.top,
                        left: this.positionAbs.left - this.margins.left,
                        scroll: !1,
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    },
                    this.offset.click = {
                        left: t2.pageX - this.offset.left,
                        top: t2.pageY - this.offset.top
                    }
                },
                _mouseDrag: function(e2, i2) {
                    if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
                    this.position = this._generatePosition(e2, !0),
                    this.positionAbs = this._convertPositionTo("absolute"),
                    !i2) {
                        var s2 = this._uiHash();
                        if (this._trigger("drag", e2, s2) === !1)
                            return this._mouseUp(new t.Event("mouseup",e2)),
                            !1;
                        this.position = s2.position
                    }
                    return this.helper[0].style.left = this.position.left + "px",
                    this.helper[0].style.top = this.position.top + "px",
                    t.ui.ddmanager && t.ui.ddmanager.drag(this, e2),
                    !1
                },
                _mouseStop: function(e2) {
                    var i2 = this
                      , s2 = !1;
                    return t.ui.ddmanager && !this.options.dropBehaviour && (s2 = t.ui.ddmanager.drop(this, e2)),
                    this.dropped && (s2 = this.dropped,
                    this.dropped = !1),
                    this.options.revert === "invalid" && !s2 || this.options.revert === "valid" && s2 || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s2) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        i2._trigger("stop", e2) !== !1 && i2._clear()
                    }) : this._trigger("stop", e2) !== !1 && this._clear(),
                    !1
                },
                _mouseUp: function(e2) {
                    return this._unblockFrames(),
                    t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e2),
                    this.handleElement.is(e2.target) && this.element.trigger("focus"),
                    t.ui.mouse.prototype._mouseUp.call(this, e2)
                },
                cancel: function() {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup",{
                        target: this.element[0]
                    })) : this._clear(),
                    this
                },
                _getHandle: function(e2) {
                    return this.options.handle ? !!t(e2.target).closest(this.element.find(this.options.handle)).length : !0
                },
                _setHandleClassName: function() {
                    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
                    this._addClass(this.handleElement, "ui-draggable-handle")
                },
                _removeHandleClassName: function() {
                    this._removeClass(this.handleElement, "ui-draggable-handle")
                },
                _createHelper: function(e2) {
                    var i2 = this.options
                      , s2 = t.isFunction(i2.helper)
                      , n2 = s2 ? t(i2.helper.apply(this.element[0], [e2])) : i2.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
                    return n2.parents("body").length || n2.appendTo(i2.appendTo === "parent" ? this.element[0].parentNode : i2.appendTo),
                    s2 && n2[0] === this.element[0] && this._setPositionRelative(),
                    n2[0] === this.element[0] || /(fixed|absolute)/.test(n2.css("position")) || n2.css("position", "absolute"),
                    n2
                },
                _setPositionRelative: function() {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                },
                _adjustOffsetFromHelper: function(e2) {
                    typeof e2 == "string" && (e2 = e2.split(" ")),
                    t.isArray(e2) && (e2 = {
                        left: +e2[0],
                        top: +e2[1] || 0
                    }),
                    "left"in e2 && (this.offset.click.left = e2.left + this.margins.left),
                    "right"in e2 && (this.offset.click.left = this.helperProportions.width - e2.right + this.margins.left),
                    "top"in e2 && (this.offset.click.top = e2.top + this.margins.top),
                    "bottom"in e2 && (this.offset.click.top = this.helperProportions.height - e2.bottom + this.margins.top)
                },
                _isRootNode: function(t2) {
                    return /(html|body)/i.test(t2.tagName) || t2 === this.document[0]
                },
                _getParentOffset: function() {
                    var e2 = this.offsetParent.offset()
                      , i2 = this.document[0];
                    return this.cssPosition === "absolute" && this.scrollParent[0] !== i2 && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e2.left += this.scrollParent.scrollLeft(),
                    e2.top += this.scrollParent.scrollTop()),
                    this._isRootNode(this.offsetParent[0]) && (e2 = {
                        top: 0,
                        left: 0
                    }),
                    {
                        top: e2.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: e2.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if (this.cssPosition !== "relative")
                        return {
                            top: 0,
                            left: 0
                        };
                    var t2 = this.element.position()
                      , e2 = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: t2.top - (parseInt(this.helper.css("top"), 10) || 0) + (e2 ? 0 : this.scrollParent.scrollTop()),
                        left: t2.left - (parseInt(this.helper.css("left"), 10) || 0) + (e2 ? 0 : this.scrollParent.scrollLeft())
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var e2, i2, s2, n2 = this.options, o = this.document[0];
                    return this.relativeContainer = null,
                    n2.containment ? n2.containment === "window" ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top],
                    void 0) : n2.containment === "document" ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top],
                    void 0) : n2.containment.constructor === Array ? (this.containment = n2.containment,
                    void 0) : (n2.containment === "parent" && (n2.containment = this.helper[0].parentNode),
                    i2 = t(n2.containment),
                    s2 = i2[0],
                    s2 && (e2 = /(scroll|auto)/.test(i2.css("overflow")),
                    this.containment = [(parseInt(i2.css("borderLeftWidth"), 10) || 0) + (parseInt(i2.css("paddingLeft"), 10) || 0), (parseInt(i2.css("borderTopWidth"), 10) || 0) + (parseInt(i2.css("paddingTop"), 10) || 0), (e2 ? Math.max(s2.scrollWidth, s2.offsetWidth) : s2.offsetWidth) - (parseInt(i2.css("borderRightWidth"), 10) || 0) - (parseInt(i2.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e2 ? Math.max(s2.scrollHeight, s2.offsetHeight) : s2.offsetHeight) - (parseInt(i2.css("borderBottomWidth"), 10) || 0) - (parseInt(i2.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                    this.relativeContainer = i2),
                    void 0) : (this.containment = null,
                    void 0)
                },
                _convertPositionTo: function(t2, e2) {
                    e2 || (e2 = this.position);
                    var i2 = t2 === "absolute" ? 1 : -1
                      , s2 = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: e2.top + this.offset.relative.top * i2 + this.offset.parent.top * i2 - (this.cssPosition === "fixed" ? -this.offset.scroll.top : s2 ? 0 : this.offset.scroll.top) * i2,
                        left: e2.left + this.offset.relative.left * i2 + this.offset.parent.left * i2 - (this.cssPosition === "fixed" ? -this.offset.scroll.left : s2 ? 0 : this.offset.scroll.left) * i2
                    }
                },
                _generatePosition: function(t2, e2) {
                    var i2, s2, n2, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), l = t2.pageX, h = t2.pageY;
                    return r && this.offset.scroll || (this.offset.scroll = {
                        top: this.scrollParent.scrollTop(),
                        left: this.scrollParent.scrollLeft()
                    }),
                    e2 && (this.containment && (this.relativeContainer ? (s2 = this.relativeContainer.offset(),
                    i2 = [this.containment[0] + s2.left, this.containment[1] + s2.top, this.containment[2] + s2.left, this.containment[3] + s2.top]) : i2 = this.containment,
                    t2.pageX - this.offset.click.left < i2[0] && (l = i2[0] + this.offset.click.left),
                    t2.pageY - this.offset.click.top < i2[1] && (h = i2[1] + this.offset.click.top),
                    t2.pageX - this.offset.click.left > i2[2] && (l = i2[2] + this.offset.click.left),
                    t2.pageY - this.offset.click.top > i2[3] && (h = i2[3] + this.offset.click.top)),
                    a.grid && (n2 = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY,
                    h = i2 ? n2 - this.offset.click.top >= i2[1] || n2 - this.offset.click.top > i2[3] ? n2 : n2 - this.offset.click.top >= i2[1] ? n2 - a.grid[1] : n2 + a.grid[1] : n2,
                    o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX,
                    l = i2 ? o - this.offset.click.left >= i2[0] || o - this.offset.click.left > i2[2] ? o : o - this.offset.click.left >= i2[0] ? o - a.grid[0] : o + a.grid[0] : o),
                    a.axis === "y" && (l = this.originalPageX),
                    a.axis === "x" && (h = this.originalPageY)),
                    {
                        top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                    }
                },
                _clear: function() {
                    this._removeClass(this.helper, "ui-draggable-dragging"),
                    this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                    this.helper = null,
                    this.cancelHelperRemoval = !1,
                    this.destroyOnClear && this.destroy()
                },
                _trigger: function(e2, i2, s2) {
                    return s2 = s2 || this._uiHash(),
                    t.ui.plugin.call(this, e2, [i2, s2, this], !0),
                    /^(drag|start|stop)/.test(e2) && (this.positionAbs = this._convertPositionTo("absolute"),
                    s2.offset = this.positionAbs),
                    t.Widget.prototype._trigger.call(this, e2, i2, s2)
                },
                plugins: {},
                _uiHash: function() {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }),
            t.ui.plugin.add("draggable", "connectToSortable", {
                start: function(e2, i2, s2) {
                    var n2 = t.extend({}, i2, {
                        item: s2.element
                    });
                    s2.sortables = [],
                    t(s2.options.connectToSortable).each(function() {
                        var i3 = t(this).sortable("instance");
                        i3 && !i3.options.disabled && (s2.sortables.push(i3),
                        i3.refreshPositions(),
                        i3._trigger("activate", e2, n2))
                    })
                },
                stop: function(e2, i2, s2) {
                    var n2 = t.extend({}, i2, {
                        item: s2.element
                    });
                    s2.cancelHelperRemoval = !1,
                    t.each(s2.sortables, function() {
                        var t2 = this;
                        t2.isOver ? (t2.isOver = 0,
                        s2.cancelHelperRemoval = !0,
                        t2.cancelHelperRemoval = !1,
                        t2._storedCSS = {
                            position: t2.placeholder.css("position"),
                            top: t2.placeholder.css("top"),
                            left: t2.placeholder.css("left")
                        },
                        t2._mouseStop(e2),
                        t2.options.helper = t2.options._helper) : (t2.cancelHelperRemoval = !0,
                        t2._trigger("deactivate", e2, n2))
                    })
                },
                drag: function(e2, i2, s2) {
                    t.each(s2.sortables, function() {
                        var n2 = !1
                          , o = this;
                        o.positionAbs = s2.positionAbs,
                        o.helperProportions = s2.helperProportions,
                        o.offset.click = s2.offset.click,
                        o._intersectsWith(o.containerCache) && (n2 = !0,
                        t.each(s2.sortables, function() {
                            return this.positionAbs = s2.positionAbs,
                            this.helperProportions = s2.helperProportions,
                            this.offset.click = s2.offset.click,
                            this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n2 = !1),
                            n2
                        })),
                        n2 ? (o.isOver || (o.isOver = 1,
                        s2._parent = i2.helper.parent(),
                        o.currentItem = i2.helper.appendTo(o.element).data("ui-sortable-item", !0),
                        o.options._helper = o.options.helper,
                        o.options.helper = function() {
                            return i2.helper[0]
                        }
                        ,
                        e2.target = o.currentItem[0],
                        o._mouseCapture(e2, !0),
                        o._mouseStart(e2, !0, !0),
                        o.offset.click.top = s2.offset.click.top,
                        o.offset.click.left = s2.offset.click.left,
                        o.offset.parent.left -= s2.offset.parent.left - o.offset.parent.left,
                        o.offset.parent.top -= s2.offset.parent.top - o.offset.parent.top,
                        s2._trigger("toSortable", e2),
                        s2.dropped = o.element,
                        t.each(s2.sortables, function() {
                            this.refreshPositions()
                        }),
                        s2.currentItem = s2.element,
                        o.fromOutside = s2),
                        o.currentItem && (o._mouseDrag(e2),
                        i2.position = o.position)) : o.isOver && (o.isOver = 0,
                        o.cancelHelperRemoval = !0,
                        o.options._revert = o.options.revert,
                        o.options.revert = !1,
                        o._trigger("out", e2, o._uiHash(o)),
                        o._mouseStop(e2, !0),
                        o.options.revert = o.options._revert,
                        o.options.helper = o.options._helper,
                        o.placeholder && o.placeholder.remove(),
                        i2.helper.appendTo(s2._parent),
                        s2._refreshOffsets(e2),
                        i2.position = s2._generatePosition(e2, !0),
                        s2._trigger("fromSortable", e2),
                        s2.dropped = !1,
                        t.each(s2.sortables, function() {
                            this.refreshPositions()
                        }))
                    })
                }
            }),
            t.ui.plugin.add("draggable", "cursor", {
                start: function(e2, i2, s2) {
                    var n2 = t("body")
                      , o = s2.options;
                    n2.css("cursor") && (o._cursor = n2.css("cursor")),
                    n2.css("cursor", o.cursor)
                },
                stop: function(e2, i2, s2) {
                    var n2 = s2.options;
                    n2._cursor && t("body").css("cursor", n2._cursor)
                }
            }),
            t.ui.plugin.add("draggable", "opacity", {
                start: function(e2, i2, s2) {
                    var n2 = t(i2.helper)
                      , o = s2.options;
                    n2.css("opacity") && (o._opacity = n2.css("opacity")),
                    n2.css("opacity", o.opacity)
                },
                stop: function(e2, i2, s2) {
                    var n2 = s2.options;
                    n2._opacity && t(i2.helper).css("opacity", n2._opacity)
                }
            }),
            t.ui.plugin.add("draggable", "scroll", {
                start: function(t2, e2, i2) {
                    i2.scrollParentNotHidden || (i2.scrollParentNotHidden = i2.helper.scrollParent(!1)),
                    i2.scrollParentNotHidden[0] !== i2.document[0] && i2.scrollParentNotHidden[0].tagName !== "HTML" && (i2.overflowOffset = i2.scrollParentNotHidden.offset())
                },
                drag: function(e2, i2, s2) {
                    var n2 = s2.options
                      , o = !1
                      , a = s2.scrollParentNotHidden[0]
                      , r = s2.document[0];
                    a !== r && a.tagName !== "HTML" ? (n2.axis && n2.axis === "x" || (s2.overflowOffset.top + a.offsetHeight - e2.pageY < n2.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n2.scrollSpeed : e2.pageY - s2.overflowOffset.top < n2.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n2.scrollSpeed)),
                    n2.axis && n2.axis === "y" || (s2.overflowOffset.left + a.offsetWidth - e2.pageX < n2.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n2.scrollSpeed : e2.pageX - s2.overflowOffset.left < n2.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n2.scrollSpeed))) : (n2.axis && n2.axis === "x" || (e2.pageY - t(r).scrollTop() < n2.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n2.scrollSpeed) : t(window).height() - (e2.pageY - t(r).scrollTop()) < n2.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n2.scrollSpeed))),
                    n2.axis && n2.axis === "y" || (e2.pageX - t(r).scrollLeft() < n2.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n2.scrollSpeed) : t(window).width() - (e2.pageX - t(r).scrollLeft()) < n2.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n2.scrollSpeed)))),
                    o !== !1 && t.ui.ddmanager && !n2.dropBehaviour && t.ui.ddmanager.prepareOffsets(s2, e2)
                }
            }),
            t.ui.plugin.add("draggable", "snap", {
                start: function(e2, i2, s2) {
                    var n2 = s2.options;
                    s2.snapElements = [],
                    t(n2.snap.constructor !== String ? n2.snap.items || ":data(ui-draggable)" : n2.snap).each(function() {
                        var e3 = t(this)
                          , i3 = e3.offset();
                        this !== s2.element[0] && s2.snapElements.push({
                            item: this,
                            width: e3.outerWidth(),
                            height: e3.outerHeight(),
                            top: i3.top,
                            left: i3.left
                        })
                    })
                },
                drag: function(e2, i2, s2) {
                    var n2, o, a, r, l, h, c, u, d, p, f = s2.options, g = f.snapTolerance, m = i2.offset.left, _ = m + s2.helperProportions.width, v = i2.offset.top, b = v + s2.helperProportions.height;
                    for (d = s2.snapElements.length - 1; d >= 0; d--)
                        l = s2.snapElements[d].left - s2.margins.left,
                        h = l + s2.snapElements[d].width,
                        c = s2.snapElements[d].top - s2.margins.top,
                        u = c + s2.snapElements[d].height,
                        l - g > _ || m > h + g || c - g > b || v > u + g || !t.contains(s2.snapElements[d].item.ownerDocument, s2.snapElements[d].item) ? (s2.snapElements[d].snapping && s2.options.snap.release && s2.options.snap.release.call(s2.element, e2, t.extend(s2._uiHash(), {
                            snapItem: s2.snapElements[d].item
                        })),
                        s2.snapElements[d].snapping = !1) : (f.snapMode !== "inner" && (n2 = g >= Math.abs(c - b),
                        o = g >= Math.abs(u - v),
                        a = g >= Math.abs(l - _),
                        r = g >= Math.abs(h - m),
                        n2 && (i2.position.top = s2._convertPositionTo("relative", {
                            top: c - s2.helperProportions.height,
                            left: 0
                        }).top),
                        o && (i2.position.top = s2._convertPositionTo("relative", {
                            top: u,
                            left: 0
                        }).top),
                        a && (i2.position.left = s2._convertPositionTo("relative", {
                            top: 0,
                            left: l - s2.helperProportions.width
                        }).left),
                        r && (i2.position.left = s2._convertPositionTo("relative", {
                            top: 0,
                            left: h
                        }).left)),
                        p = n2 || o || a || r,
                        f.snapMode !== "outer" && (n2 = g >= Math.abs(c - v),
                        o = g >= Math.abs(u - b),
                        a = g >= Math.abs(l - m),
                        r = g >= Math.abs(h - _),
                        n2 && (i2.position.top = s2._convertPositionTo("relative", {
                            top: c,
                            left: 0
                        }).top),
                        o && (i2.position.top = s2._convertPositionTo("relative", {
                            top: u - s2.helperProportions.height,
                            left: 0
                        }).top),
                        a && (i2.position.left = s2._convertPositionTo("relative", {
                            top: 0,
                            left: l
                        }).left),
                        r && (i2.position.left = s2._convertPositionTo("relative", {
                            top: 0,
                            left: h - s2.helperProportions.width
                        }).left)),
                        !s2.snapElements[d].snapping && (n2 || o || a || r || p) && s2.options.snap.snap && s2.options.snap.snap.call(s2.element, e2, t.extend(s2._uiHash(), {
                            snapItem: s2.snapElements[d].item
                        })),
                        s2.snapElements[d].snapping = n2 || o || a || r || p)
                }
            }),
            t.ui.plugin.add("draggable", "stack", {
                start: function(e2, i2, s2) {
                    var n2, o = s2.options, a = t.makeArray(t(o.stack)).sort(function(e3, i3) {
                        return (parseInt(t(e3).css("zIndex"), 10) || 0) - (parseInt(t(i3).css("zIndex"), 10) || 0)
                    });
                    a.length && (n2 = parseInt(t(a[0]).css("zIndex"), 10) || 0,
                    t(a).each(function(e3) {
                        t(this).css("zIndex", n2 + e3)
                    }),
                    this.css("zIndex", n2 + a.length))
                }
            }),
            t.ui.plugin.add("draggable", "zIndex", {
                start: function(e2, i2, s2) {
                    var n2 = t(i2.helper)
                      , o = s2.options;
                    n2.css("zIndex") && (o._zIndex = n2.css("zIndex")),
                    n2.css("zIndex", o.zIndex)
                },
                stop: function(e2, i2, s2) {
                    var n2 = s2.options;
                    n2._zIndex && t(i2.helper).css("zIndex", n2._zIndex)
                }
            }),
            t.ui.draggable,
            t.widget("ui.droppable", {
                version: "1.12.1",
                widgetEventPrefix: "drop",
                options: {
                    accept: "*",
                    addClasses: !0,
                    greedy: !1,
                    scope: "default",
                    tolerance: "intersect",
                    activate: null,
                    deactivate: null,
                    drop: null,
                    out: null,
                    over: null
                },
                _create: function() {
                    var e2, i2 = this.options, s2 = i2.accept;
                    this.isover = !1,
                    this.isout = !0,
                    this.accept = t.isFunction(s2) ? s2 : function(t2) {
                        return t2.is(s2)
                    }
                    ,
                    this.proportions = function() {
                        return arguments.length ? (e2 = arguments[0],
                        void 0) : e2 || (e2 = {
                            width: this.element[0].offsetWidth,
                            height: this.element[0].offsetHeight
                        })
                    }
                    ,
                    this._addToManager(i2.scope),
                    i2.addClasses && this._addClass("ui-droppable")
                },
                _addToManager: function(e2) {
                    t.ui.ddmanager.droppables[e2] = t.ui.ddmanager.droppables[e2] || [],
                    t.ui.ddmanager.droppables[e2].push(this)
                },
                _splice: function(t2) {
                    for (var e2 = 0; t2.length > e2; e2++)
                        t2[e2] === this && t2.splice(e2, 1)
                },
                _destroy: function() {
                    var e2 = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(e2)
                },
                _setOption: function(e2, i2) {
                    if (e2 === "accept")
                        this.accept = t.isFunction(i2) ? i2 : function(t2) {
                            return t2.is(i2)
                        }
                        ;
                    else if (e2 === "scope") {
                        var s2 = t.ui.ddmanager.droppables[this.options.scope];
                        this._splice(s2),
                        this._addToManager(i2)
                    }
                    this._super(e2, i2)
                },
                _activate: function(e2) {
                    var i2 = t.ui.ddmanager.current;
                    this._addActiveClass(),
                    i2 && this._trigger("activate", e2, this.ui(i2))
                },
                _deactivate: function(e2) {
                    var i2 = t.ui.ddmanager.current;
                    this._removeActiveClass(),
                    i2 && this._trigger("deactivate", e2, this.ui(i2))
                },
                _over: function(e2) {
                    var i2 = t.ui.ddmanager.current;
                    i2 && (i2.currentItem || i2.element)[0] !== this.element[0] && this.accept.call(this.element[0], i2.currentItem || i2.element) && (this._addHoverClass(),
                    this._trigger("over", e2, this.ui(i2)))
                },
                _out: function(e2) {
                    var i2 = t.ui.ddmanager.current;
                    i2 && (i2.currentItem || i2.element)[0] !== this.element[0] && this.accept.call(this.element[0], i2.currentItem || i2.element) && (this._removeHoverClass(),
                    this._trigger("out", e2, this.ui(i2)))
                },
                _drop: function(e2, i2) {
                    var s2 = i2 || t.ui.ddmanager.current
                      , o = !1;
                    return s2 && (s2.currentItem || s2.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                        var i3 = t(this).droppable("instance");
                        return i3.options.greedy && !i3.options.disabled && i3.options.scope === s2.options.scope && i3.accept.call(i3.element[0], s2.currentItem || s2.element) && n(s2, t.extend(i3, {
                            offset: i3.element.offset()
                        }), i3.options.tolerance, e2) ? (o = !0,
                        !1) : void 0
                    }),
                    o ? !1 : this.accept.call(this.element[0], s2.currentItem || s2.element) ? (this._removeActiveClass(),
                    this._removeHoverClass(),
                    this._trigger("drop", e2, this.ui(s2)),
                    this.element) : !1) : !1
                },
                ui: function(t2) {
                    return {
                        draggable: t2.currentItem || t2.element,
                        helper: t2.helper,
                        position: t2.position,
                        offset: t2.positionAbs
                    }
                },
                _addHoverClass: function() {
                    this._addClass("ui-droppable-hover")
                },
                _removeHoverClass: function() {
                    this._removeClass("ui-droppable-hover")
                },
                _addActiveClass: function() {
                    this._addClass("ui-droppable-active")
                },
                _removeActiveClass: function() {
                    this._removeClass("ui-droppable-active")
                }
            });
            var n = t.ui.intersect = function() {
                function t2(t3, e2, i2) {
                    return t3 >= e2 && e2 + i2 > t3
                }
                return function(e2, i2, s2, n2) {
                    if (!i2.offset)
                        return !1;
                    var o = (e2.positionAbs || e2.position.absolute).left + e2.margins.left
                      , a = (e2.positionAbs || e2.position.absolute).top + e2.margins.top
                      , r = o + e2.helperProportions.width
                      , l = a + e2.helperProportions.height
                      , h = i2.offset.left
                      , c = i2.offset.top
                      , u = h + i2.proportions().width
                      , d = c + i2.proportions().height;
                    switch (s2) {
                    case "fit":
                        return o >= h && u >= r && a >= c && d >= l;
                    case "intersect":
                        return o + e2.helperProportions.width / 2 > h && u > r - e2.helperProportions.width / 2 && a + e2.helperProportions.height / 2 > c && d > l - e2.helperProportions.height / 2;
                    case "pointer":
                        return t2(n2.pageY, c, i2.proportions().height) && t2(n2.pageX, h, i2.proportions().width);
                    case "touch":
                        return (a >= c && d >= a || l >= c && d >= l || c > a && l > d) && (o >= h && u >= o || r >= h && u >= r || h > o && r > u);
                    default:
                        return !1
                    }
                }
            }();
            t.ui.ddmanager = {
                current: null,
                droppables: {
                    default: []
                },
                prepareOffsets: function(e2, i2) {
                    var s2, n2, o = t.ui.ddmanager.droppables[e2.options.scope] || [], a = i2 ? i2.type : null, r = (e2.currentItem || e2.element).find(":data(ui-droppable)").addBack();
                    t: for (s2 = 0; o.length > s2; s2++)
                        if (!(o[s2].options.disabled || e2 && !o[s2].accept.call(o[s2].element[0], e2.currentItem || e2.element))) {
                            for (n2 = 0; r.length > n2; n2++)
                                if (r[n2] === o[s2].element[0]) {
                                    o[s2].proportions().height = 0;
                                    continue t
                                }
                            o[s2].visible = o[s2].element.css("display") !== "none",
                            o[s2].visible && (a === "mousedown" && o[s2]._activate.call(o[s2], i2),
                            o[s2].offset = o[s2].element.offset(),
                            o[s2].proportions({
                                width: o[s2].element[0].offsetWidth,
                                height: o[s2].element[0].offsetHeight
                            }))
                        }
                },
                drop: function(e2, i2) {
                    var s2 = !1;
                    return t.each((t.ui.ddmanager.droppables[e2.options.scope] || []).slice(), function() {
                        this.options && (!this.options.disabled && this.visible && n(e2, this, this.options.tolerance, i2) && (s2 = this._drop.call(this, i2) || s2),
                        !this.options.disabled && this.visible && this.accept.call(this.element[0], e2.currentItem || e2.element) && (this.isout = !0,
                        this.isover = !1,
                        this._deactivate.call(this, i2)))
                    }),
                    s2
                },
                dragStart: function(e2, i2) {
                    e2.element.parentsUntil("body").on("scroll.droppable", function() {
                        e2.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e2, i2)
                    })
                },
                drag: function(e2, i2) {
                    e2.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e2, i2),
                    t.each(t.ui.ddmanager.droppables[e2.options.scope] || [], function() {
                        if (!this.options.disabled && !this.greedyChild && this.visible) {
                            var s2, o, a, r = n(e2, this, this.options.tolerance, i2), l = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                            l && (this.options.greedy && (o = this.options.scope,
                            a = this.element.parents(":data(ui-droppable)").filter(function() {
                                return t(this).droppable("instance").options.scope === o
                            }),
                            a.length && (s2 = t(a[0]).droppable("instance"),
                            s2.greedyChild = l === "isover")),
                            s2 && l === "isover" && (s2.isover = !1,
                            s2.isout = !0,
                            s2._out.call(s2, i2)),
                            this[l] = !0,
                            this[l === "isout" ? "isover" : "isout"] = !1,
                            this[l === "isover" ? "_over" : "_out"].call(this, i2),
                            s2 && l === "isout" && (s2.isout = !1,
                            s2.isover = !0,
                            s2._over.call(s2, i2)))
                        }
                    })
                },
                dragStop: function(e2, i2) {
                    e2.element.parentsUntil("body").off("scroll.droppable"),
                    e2.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e2, i2)
                }
            },
            t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
                options: {
                    hoverClass: !1,
                    activeClass: !1
                },
                _addActiveClass: function() {
                    this._super(),
                    this.options.activeClass && this.element.addClass(this.options.activeClass)
                },
                _removeActiveClass: function() {
                    this._super(),
                    this.options.activeClass && this.element.removeClass(this.options.activeClass)
                },
                _addHoverClass: function() {
                    this._super(),
                    this.options.hoverClass && this.element.addClass(this.options.hoverClass)
                },
                _removeHoverClass: function() {
                    this._super(),
                    this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
                }
            }),
            t.ui.droppable
        });
    }
    )();
    /*! jQuery UI - v1.12.1 - 2018-02-19
* http://jqueryui.com
* Includes: widget.js, data.js, scroll-parent.js, widgets/draggable.js, widgets/droppable.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
    /*! Bundled license information:

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/

}

window.preloaded['js/extra:jquery_plugins/jquery-ui.draggable.min'] = true;

window.translation_data = {
    "en_us": {
        "BUILT_IN": {
            "YES": "yes",
            "NO": "no",
            "DATE_FORMAT": {
                "dayNames": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "monthNames": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            }
        },
        "CORE": {
            "2FA_TEMP": "We encountered a temporary error validating your code.  Please wait a minute or two and try again.",
            "APP_LIMIT_REACHED": "Sorry, your app has breached its usage limit, workflows are temporarily paused from running.",
            "BAD_CONNECTION": "We are not connected to the server right now and could not complete this action.  Please try again once the internet connection is stronger...",
            "BAD_CSV": "This CSV file cannot be parsed correctly",
            "BAD_REVISION": "We just updated this page.  Please refresh the page to get the latest version. You will not be able to use the app until you refresh.",
            "BAD_REVISION_PHONE": "We just updated this app. Please tap here to get the latest version",
            "BAD_TASK_ID": "This scheduled ID is incorrect, it should be numbers",
            "CONF_EMAIL_BODY": "Hello,\n\nThank you for signing up! Please click below to confirm your email.\n\nThe team",
            "CONF_EMAIL_LINK": "Click here to confirm your email address",
            "CONF_EMAIL_SUBJECT": "Email confirmation",
            "DB_LIMIT_REACHED": "This application is at its limit for number of Things in the database. Please upgrade your application to continue saving data",
            "DO_NOT_MATCH": "The two passwords do not match!",
            "ENTER_OLD_PW": "Please enter your existing password",
            "EXPIRED_SESSION": "Sorry, your login session has changed / expired... please try again",
            "FILE_TOO_LARGE": "Sorry, this file is too large",
            "INVALID LATLNG": "Latitude and/or longitude are not within a valid range. Latitude must be within [-90,90]. Longitude must be within [-180,180]",
            "INVALID_LOGIN_CREDENTIALS": "We didn’t find an account with those login credentials",
            "ISSUE_CONF_EMAIL": "Sorry, there was an issue confirming your email, please click on the link again in a bit.",
            "LIST_TOO_LONG": "This list is too long to be processed.",
            "LOADING": "Loading...",
            "MISSING_INFO": "Some information was missing to execute the action ",
            "MISSING_SUBJECT": "Please include a subject line",
            "MISSING_TO": "Please include at least one email address in the \"to\" field",
            "NEED_NEW_PW": "Please include a new password",
            "NEED_TO_BE_LOGGED_IN": "You have to be logged in to modify your account.",
            "NOT_VALID_EMAIL": "Oops, this doesn't look like a valid email: ",
            "NO_EMAIL": "Please include an email",
            "NO_PASSWORD": "Please enter a password",
            "NO_PERMISSION": "Sorry, you do not have permission to modify this ",
            "NO_SUCH_USER": "Sorry, we could not find a user with email ",
            "NO_USER_TEMP_PW": "No user to set a temporary password to",
            "OAUTH_ISSUE": "Sorry, we were unable to log you in with ",
            "PASSWORD_INVALID": "This password is not valid",
            "PRIVATE_FILE": "This is a private file, so please select an object to attach it to",
            "RESET_PW_LINK": "Reset here",
            "SELECT_FILE": "Please select a file to upload",
            "STILL_CHANGING": "We're still saving your latest changes... please wait a moment!",
            "TEMPORARY_BUG": "Sorry, we ran into a temporary bug and can't complete your request. We'll fix it as soon as we can; please try again in a bit!",
            "TRY_AGAIN": "Please try again...",
            "UPDATE_CREDENTIAL_SUCCESS": "Your account has been successfully updated",
            "USED_EMAIL": "This email is already in use: ",
            "WRONG_2FA_TOKEN": "This temporary token has expired",
            "WRONG_2FA_TOKEN1": "Invalid multi-factor authentication code, please try again",
            "WRONG_OLD_PW": "Sorry, the old password is not right",
            "WRONG_PASSWORD": "Sorry, that's not the right password",
            "WRONG_PASSWORD_RESET": "This is not a valid password reset request. Please have another reset email sent to you."
        }
    }
}
window.language_data = {
    "en_us": {
        "iso_code": "en_US",
        "is_rtl": null,
        "sample": "Sun,Mon,Tue,Wed,Thu,Fri,Sat,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
        "font_subset": null
    }
}
window.application_language = 'en_us';
window.preloaded['translation/base:en_us'] = true;
const app = JSON.parse('{"mobile_views":{},"last_change":"24500244764","last_change_as_of":1743840550496,"generation_fiber_id":"1743840550391x758972898791576600","_id":"dhivyaamurugesh12-67375","app_version":"test","global_elements":{},"_index":{"id_to_path":{"AAL":"%p3.AAW","AAU":"%p3.AAX","bTGYf":"%p3.bTGbC","bTHDT":"%p3.bTHDU","bTHDV":"%p3.bTHDZ","bTHDa":"%p3.bTHDb","bTHDf":"%p3.bTHDg"}},"user_types":{"user":{"%d":"User","%f3":{"name_text":{"%v":"text","%d":"name"},"role_text":{"%v":"text","%d":"role"}},"privacy_role":{"everyone":{"%d":"everyone","permissions":{"view_all":false,"search_for":false,"view_fields":{"0":"Modified Date","1":"Created Date","2":"name_text","3":"role_text"},"auto_binding":false,"view_attachments":false}},"users_own_data":{"%c":{"%n":{"%a":{"%x":"CurrentUser"},"%x":"Message","%nm":"equals","is_slidable":false},"%x":"InjectedValue"},"%d":"User\'s own data","permissions":{"view_all":true,"search_for":true,"auto_binding":false,"view_attachments":true}}}},"badge":{"%d":"Badge","%f3":{"name_text":{"%v":"text","%d":"name"},"user_user":{"%v":"user","%d":"user"},"module_custom_trainingmodule":{"%v":"custom.trainingmodule","%d":"module"}}},"leaderboard":{"%d":"Leaderboard","%f3":{"user_user":{"%v":"user","%d":"user"},"rank_number":{"%v":"number","%d":"rank"},"points_number":{"%v":"number","%d":"points"}}},"notification":{"%d":"Notification","%f3":{"user_user":{"%v":"user","%d":"user"},"content_text":{"%v":"text","%d":"content"},"read_status_boolean":{"%v":"boolean","%d":"read_status"}}},"trainingmodule":{"%d":"TrainingModule","%f3":{"type_text":{"%v":"text","%d":"type"},"title_text":{"%v":"text","%d":"title"},"difficulty_level_text":{"%v":"text","%d":"difficulty_level"}}},"trainingsession":{"%d":"TrainingSession","%f3":{"user_user":{"%v":"user","%d":"user"},"score_number":{"%v":"number","%d":"score"},"completed_boolean":{"%v":"boolean","%d":"completed"},"completion_date_date":{"%v":"date","%d":"completion_date"},"module_custom_trainingmodule":{"%v":"custom.trainingmodule","%d":"module"}}}},"option_sets":null,"domains":null,"primary_domain":null,"favicon":"//s3.amazonaws.com/appforest_uf/f1530294839424x143528842134401200/Icon-no-clearspace.png","plugin_special":null,"styles":{"Text_body_16_":{"id":"Text_body_16_","%p":{"%fc":"var(--color_text_default)","%fs":16,"%lh":1.4,"%vc":true},"%x":"Text","%s":{"bTHCp":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-mobile"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"less_than","is_slidable":false},"%p":{"%ei":"","%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"%fs":14},"%x":"State"}},"%d":"Body 16"},"Text_heading_1_":{"id":"Text_heading_1_","%p":{"%b":false,"%f":"var(--font_default):::700","%fc":"var(--color_text_default)","%fs":56,"%lh":1.4,"%vc":true,"tag_type":"h1","font_family":"var(--font_default)","font_weight":"700","padding_top":0,"padding_left":0,"padding_right":0,"padding_bottom":0},"%x":"Text","%s":{"bTHCr":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-mobile"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"less_than","is_slidable":false},"%p":{"%ei":"","%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"%fs":44},"%x":"State"}},"%d":"Heading 1"},"Text_heading_2_":{"id":"Text_heading_2_","%p":{"%b":false,"%f":"var(--font_default):::700","%fc":"var(--color_text_default)","%fs":44,"%lh":1.4,"%vc":true,"tag_type":"h2","font_family":"var(--font_default)","font_weight":"700","padding_top":0,"padding_left":0,"padding_right":0,"padding_bottom":0},"%x":"Text","%s":{"bTHCv":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-mobile"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"less_than","is_slidable":false},"%p":{"%ei":"","%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"%fs":36},"%x":"State"}},"%d":"Heading 2"},"Text_heading_3_":{"id":"Text_heading_3_","%p":{"%b":false,"%f":"var(--font_default):::700","%fc":"var(--color_text_default)","%fs":36,"%lh":1.4,"%vc":true,"tag_type":"h3","font_family":"var(--font_default)","font_weight":"700","padding_top":0,"padding_left":0,"padding_right":0,"padding_bottom":0},"%x":"Text","%s":{"bTHCw":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-mobile"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"less_than","is_slidable":false},"%p":{"%ei":"","%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"%fs":32},"%x":"State"}},"%d":"Heading 3"},"Text_heading_4_":{"id":"Text_heading_4_","%p":{"%f":"var(--font_default):::700","%fc":"var(--color_text_default)","%fs":28,"%lh":1.4,"%vc":true,"tag_type":"h4","font_weight":"600"},"%x":"Text","%s":{"bTHCx":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-mobile"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"less_than","is_slidable":false},"%p":{"%ei":"","%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"%fs":24},"%x":"State"}},"%d":"Heading 4"},"Group_transparent_":{"id":"Group_transparent_","%p":{"%bas":"none"},"%x":"Group","%d":"Transparent"},"Image_standard_image_":{"id":"Image_standard_image_","%p":{"%br":4,"%bos":"none"},"%x":"Image","%d":"Standard"},"Input_standard_input_":{"id":"Input_standard_input_","%p":{"%f":"var(--font_default):::400","%bc":"var(--color_bTHBV_default)","%br":4,"%bw":2,"%fc":"var(--color_text_default)","%fs":16,"%ls":0,"%bas":"none","font_family":"var(--font_default)","font_weight":"400","padding_top":0,"padding_left":12,"padding_right":12,"padding_bottom":0,"placeholder_color":"var(--color_bTHBW_default)"},"%x":"Input","%s":{"bTGme0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered"},"%x":"ThisElement"},"%p":{"%bc":"var(--color_bTHBW_default)"},"%x":"State"},"bTGmf0":{"%c":{"%n":{"%x":"Message","%nm":"is_focused"},"%x":"ThisElement"},"%p":{"%bc":"var(--color_bTGzw_default)"},"%x":"State"},"bTGmo0":{"%c":{"%n":{"%x":"Message","%nm":"isnt_valid"},"%x":"ThisElement"},"%p":{"%bc":"var(--color_destructive_default)"},"%x":"State"}},"transitions":{"%bc":{"fn":"ease","duration":200},"%fc":{"fn":"ease","duration":200}},"%d":"Standard"},"Link_link_light_primary_":{"id":"Link_link_light_primary_","%p":{"%br":0,"%fa":"center","%fc":"var(--color_primary_default)","%fs":16,"%lh":1.4,"%vc":true,"%bas":"none","%bgc":"var(--color_primary_default)","font_weight":"600","padding_left":0,"padding_right":0},"%x":"Link","%s":{"bTHCL":{"%c":{"%n":{"%n":{"%a":{"%n":{"%x":"Message","%nm":"is_clickable","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%x":"Message","%nm":"and_","is_slidable":false},"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%u":true},"%x":"State"},"bTHCM":{"%c":{"%n":{"%x":"Message","%nm":"isnt_clickable","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"opacity":25},"%x":"State"}},"%d":"Link Light Primary"},"Checkbox_standard_checkbox_":{"id":"Checkbox_standard_checkbox_","%p":{"%f":"var(--font_default):::400","%fc":"var(--color_text_default)","%fs":16,"%lh":1.4,"font_family":"var(--font_default)","font_weight":"400","padding_top":0,"padding_left":0,"padding_right":0,"padding_bottom":0},"%x":"Checkbox","%s":{"bTGtb":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement"},"%p":{"%fc":"var(--color_bTHBd_default)"},"%x":"State"},"bTHBp":{"%c":{"%n":{"%x":"Message","%nm":"isnt_valid","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"var(--color_destructive_default)"},"%x":"State"}},"transitions":{"%fc":{"fn":"ease","duration":200}},"%d":"Standard"},"Dropdown_standard_dropdown_":{"id":"Dropdown_standard_dropdown_","%p":{"%f":"var(--font_default):::400","%bc":"var(--color_bTHBV_default)","%br":4,"%bw":2,"%fc":"var(--color_text_default)","%fs":16,"%bas":"none","font_family":"var(--font_default)","font_weight":"400","padding_top":0,"padding_left":12,"padding_right":12,"computed_value":"number","padding_bottom":0,"placeholder_color":"var(--color_bTHBW_default)"},"%x":"Dropdown","%s":{"bTGmg0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered"},"%x":"ThisElement"},"%p":{"%bc":"var(--color_bTHBW_default)"},"%x":"State"},"bTGmh0":{"%c":{"%n":{"%x":"Message","%nm":"is_focused"},"%x":"ThisElement"},"%p":{"%bc":"var(--color_bTGzw_default)"},"%x":"State"},"bTGmm0":{"%c":{"%n":{"%x":"Message","%nm":"isnt_valid"},"%x":"ThisElement"},"%p":{"%bc":"var(--color_destructive_default)"},"%x":"State"}},"transitions":{"%bc":{"fn":"ease","duration":200},"%fc":{"fn":"ease","duration":200}},"%d":"Standard"},"Button_filled_light_primary_":{"id":"Button_filled_light_primary_","%p":{"%b":false,"%f":"var(--font_default):::600","%br":4,"%fc":"var(--color_primary_contrast_default)","%fs":16,"%ic":"var(--color_primary_contrast_default)","%lh":1.4,"%ls":0,"%bas":"bgcolor","%bgc":"var(--color_primary_default)","button_gap":12,"font_family":"var(--font_default)","font_weight":"600","padding_top":0,"padding_left":20,"padding_right":20,"padding_bottom":0},"%x":"Button","%s":{"bTHBh":{"%c":{"%n":{"%x":"Message","%nm":"isnt_clickable","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"opacity":25},"%x":"State"},"bTGmy0":{"%c":{"%n":{"%n":{"%a":{"%n":{"%n":{"%x":"Message","%nm":"is_false","is_slidable":false},"%x":"Message","%nm":"isnt_clickable","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%x":"Message","%nm":"and_","is_slidable":false},"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bgc":"var(--color_bTHAC_default)"},"%x":"State"}},"transitions":{"%bas":{"fn":"ease","duration":200}},"%d":"Filled Light Primary"}},"settings":{"client_safe":{"project":{"web_app_editor":true,"mobile_app_editor":false},"app_rights":"private","first_times":{"component_library":false},"font_tokens":{"%d1":"Inter"},"app_language":"en_us","color_tokens":{"%3":{"%d1":"rgba(26, 26, 26, 1)"},"alert":{"%d1":"rgba(220,161,20,1)"},"primary":{"%d1":"rgba(12,41,171,1)"},"success":{"%d1":"rgba(30,108,48,1)"},"surface":{"%d1":"rgba(255, 255, 255, 1)"},"background":{"%d1":"rgba(255, 255, 255, 1)"},"destructive":{"%d1":"rgba(176,32,12,1)"},"primary_contrast":{"%d1":"rgba(255, 255, 255, 1)"}},"use_sendgrid":true,"spinner_color":"rgba(227, 227, 229, 1)","style_version":5,"bubble_version":30,"default_styles":{"HTML":"HTML_default_","Icon":"Icon_standard_icon_","Link":"Link_link_light_primary_","Text":"Text_body_16_","Alert":"Alert_success_","Group":"Group_transparent_","Image":"Image_standard_image_","Input":"Input_standard_input_","Popup":"Popup_standard_popup_","Shape":"Shape_standard_shape_","Video":"Video_standard_video_","Button":"Button_filled_light_primary_","Checkbox":"Checkbox_standard_checkbox_","Dropdown":"Dropdown_standard_dropdown_","DateInput":"DateInput_standard_date_picker_","FileInput":"FileInput_standard_uploader_","GoogleMap":"GoogleMap_standard_map_","GroupFocus":"GroupFocus_shadow_","SliderInput":"SliderInput_standard_slider_","PictureInput":"PictureInput_standard_image_uploader_","RadioButtons":"RadioButtons_standard_radio_","FloatingGroup":"FloatingGroup_shadow_","MultiLineInput":"MultiLineInput_standard_multiline_input_","RepeatingGroup":"RepeatingGroup_transparent_","AutocompleteDropdown":"AutocompleteDropdown_standard_search_"},"ai_generated_app":true,"default_icon_set":"material","expose_text_tags":true,"status_bar_color":"rgba(3, 180, 198, 1)","advanced_features":{"expose_id_option":false,"timezone_controls":false,"timezone_controls_page":false,"timezone_controls_date_time_inputs":false,"timezone_controls_backend_workflows":false},"color_tokens_user":{"%d1":{"bTGzp":{"%d3":"","%nm":"Primary 10","%del":false,"rgba":"rgba(245,250,255,1)","order":0},"bTGzq":{"%d3":"","%nm":"Primary 20","%del":false,"rgba":"rgba(235,243,255,1)","order":1},"bTGzr":{"%d3":"","%nm":"Primary 30","%del":false,"rgba":"rgba(213,229,251,1)","order":2},"bTGzv":{"%d3":"","%nm":"Primary 40","%del":false,"rgba":"rgba(175,206,248,1)","order":3},"bTGzw":{"%d3":"","%nm":"Primary 50","%del":false,"rgba":"rgba(30,109,246,1)","order":4},"bTGzx":{"%d3":"","%nm":"Primary 60","%del":false,"rgba":"rgba(9,71,215,1)","order":5},"bTHAB":{"%d3":"","%nm":"Primary 70","%del":false,"rgba":"rgba(12,41,171,1)","order":6},"bTHAC":{"%d3":"","%nm":"Primary 80","%del":false,"rgba":"rgba(9,30,124,1)","order":7},"bTHAD":{"%d3":"","%nm":"Secondary 10","%del":false,"rgba":"rgba(242,243,253,1)","order":8},"bTHAH":{"%d3":"","%nm":"Secondary 20","%del":false,"rgba":"rgba(233,235,251,1)","order":9},"bTHAI":{"%d3":"","%nm":"Secondary 30","%del":false,"rgba":"rgba(216,219,249,1)","order":10},"bTHAJ":{"%d3":"","%nm":"Secondary 40","%del":false,"rgba":"rgba(189,195,244,1)","order":11},"bTHAN":{"%d3":"","%nm":"Secondary 50","%del":false,"rgba":"rgba(98, 93, 254, 1)","order":12},"bTHAO":{"%d3":"","%nm":"Secondary 60","%del":false,"rgba":"rgba(81,62,223,1)","order":13},"bTHAP":{"%d3":"","%nm":"Secondary 70","%del":false,"rgba":"rgba(64,31,193,1)","order":14},"bTHAT":{"%d3":"","%nm":"Secondary 80","%del":false,"rgba":"rgba(52,26,158,1)","order":15},"bTHAU":{"%d3":"","%nm":"Destructive 10","%del":false,"rgba":"rgba(254,246,245,1)","order":16},"bTHAV":{"%d3":"","%nm":"Destructive 20","%del":false,"rgba":"rgba(253,234,231,1)","order":17},"bTHAZ":{"%d3":"","%nm":"Destructive 30","%del":false,"rgba":"rgba(251,208,203,1)","order":18},"bTHAa":{"%d3":"","%nm":"Destructive 40","%del":false,"rgba":"rgba(249,179,169,1)","order":19},"bTHAb":{"%d3":"","%nm":"Destructive 50","%del":false,"rgba":"rgba(239,47,21,1)","order":20},"bTHAf":{"%d3":"","%nm":"Destructive 60","%del":false,"rgba":"rgba(205,38,14,1)","order":21},"bTHAg":{"%d3":"","%nm":"Destructive 70","%del":false,"rgba":"rgba(176,32,12,1)","order":22},"bTHAh":{"%d3":"","%nm":"Destructive 80","%del":false,"rgba":"rgba(153,68,17,1)","order":23},"bTHAl":{"%d3":"","%nm":"Success 10","%del":false,"rgba":"rgba(245,250,246,1)","order":24},"bTHAm":{"%d3":"","%nm":"Success 20","%del":false,"rgba":"rgba(234,245,237,1)","order":25},"bTHAn":{"%d3":"","%nm":"Success 30","%del":false,"rgba":"rgba(207,232,213,1)","order":26},"bTHAr":{"%d3":"","%nm":"Success 40","%del":false,"rgba":"rgba(183,220,191,1)","order":27},"bTHAs":{"%d3":"","%nm":"Success 50","%del":false,"rgba":"rgba(46,168,74,1)","order":28},"bTHAt":{"%d3":"","%nm":"Success 60","%del":false,"rgba":"rgba(38,136,60,1)","order":29},"bTHAx":{"%d3":"","%nm":"Success 70","%del":false,"rgba":"rgba(30,108,48,1)","order":30},"bTHAy":{"%d3":"","%nm":"Success 80","%del":false,"rgba":"rgba(23,84,37,1)","order":31},"bTHAz":{"%d3":"","%nm":"Alert 10","%del":false,"rgba":"rgba(255,250,240,1)","order":32},"bTHBD":{"%d3":"","%nm":"Alert 20","%del":false,"rgba":"rgba(255,244,219,1)","order":33},"bTHBE":{"%d3":"","%nm":"Alert 30","%del":false,"rgba":"rgba(255,239,199,1)","order":34},"bTHBF":{"%d3":"","%nm":"Alert 40","%del":false,"rgba":"rgba(255,220,138,1)","order":35},"bTHBJ":{"%d3":"","%nm":"Alert 50","%del":false,"rgba":"rgba(255,181,5,1)","order":36},"bTHBK":{"%d3":"","%nm":"Alert 60","%del":false,"rgba":"rgba(235,165,0,1)","order":37},"bTHBL":{"%d3":"","%nm":"Alert 70","%del":false,"rgba":"rgba(220,161,20,1)","order":38},"bTHBP":{"%d3":"","%nm":"Alert 80","%del":false,"rgba":"rgba(184,129,0,1)","order":39},"bTHBQ":{"%d3":"","%nm":"Gray 10","%del":false,"rgba":"rgba(247,247,247,1)","order":40},"bTHBR":{"%d3":"","%nm":"Gray 20","%del":false,"rgba":"rgba(242,242,242,1)","order":41},"bTHBV":{"%d3":"","%nm":"Gray 30","%del":false,"rgba":"rgba(230,230,230,1)","order":42},"bTHBW":{"%d3":"","%nm":"Gray 40","%del":false,"rgba":"rgba(199,199,199,1)","order":43},"bTHBX":{"%d3":"","%nm":"Gray 50","%del":false,"rgba":"rgba(166,166,166,1)","order":44},"bTHBb":{"%d3":"","%nm":"Gray 60","%del":false,"rgba":"rgba(138,138,138,1)","order":45},"bTHBc":{"%d3":"","%nm":"Gray 70","%del":false,"rgba":"rgba(82,82,82,1)","order":46},"bTHBd":{"%d3":"","%nm":"Gray 80","%del":false,"rgba":"rgba(0,0,0,1)","order":47}}},"restricted_google":true,"sendgrid_verified":false,"default_page_title":"","initial_mobile_view":"bTHDZ","no_legacy_responsive":true,"use_captions_for_get":true,"redirect_all_to_domain":true,"responsive_breakpoints":{"custom_bTHCk":{"%d1":false,"%nm":"Mobile","size":320,"builtin":true},"built-in-mobile":{"%d1":false,"%nm":"Mobile","%del":true,"size":320,"builtin":true},"built-in-tablet":{"%d1":false,"%nm":"Tablet","size":992,"builtin":true},"built-in-desktop":{"%d1":false,"%nm":"Desktop","size":1200,"builtin":true},"built-in-mobile-landing":{"%d1":false,"%nm":"Mobile Landscape","size":768,"builtin":true},"built-in-mobile-portrait":{"%d1":false,"%nm":"Mobile","size":480,"builtin":true,"on_mobile_view":true},"built-in-tablet-portrait":{"%d1":false,"%nm":"Tablet","size":1024,"builtin":true,"on_mobile_view":true},"built-in-mobile-landscape":{"%d1":false,"%nm":"Mobile Landscape","size":800,"builtin":true,"on_mobile_view":true},"built-in-tablet-landscape":{"%d1":false,"%nm":"Tablet Landscape","size":1360,"builtin":true,"on_mobile_view":true}},"base_responsive_version":1,"should_show_new_app_popup":false,"max_recursive_workflow_depth_live":10,"max_recursive_workflow_depth_test":10,"first_workflow_with_actions_created":true}},"%p3":{"AAW":{"id":"AAL","%nm":"reset_pw","%x":"Page","%p":{"%rf":null}},"AAX":{"id":"AAU","%nm":"404","%x":"Page","%p":{"%rf":null}},"bTGbC":{"id":"bTGYf","%nm":"index","%x":"Page","%p":{"%rf":null}},"bTHDU":{"id":"bTHDT","%nm":"training_module_dashboard","%x":"Page","%p":{"%rf":null}},"bTHDZ":{"id":"bTHDV","%nm":"manager_dashboard","%x":"Page","%p":{"%rf":null}},"bTHDb":{"id":"bTHDa","%nm":"quiz_results","%x":"Page","%p":{"%rf":null}},"bTHDg":{"id":"bTHDf","%nm":"badge_and_leaderboard","%x":"Page","%p":{"%rf":null}}},"%ed":{}}');
window.app = app;
window._bubble_page_load_data.json_info = {
    "settings_json_size": 7503
};
window._bubble_page_load_data.element_counts = undefined;

window.preloaded['app/global_json:'] = true;
app['%p3']['bTGbC'] = Object.assign(app['%p3']['bTGbC'] ? app['%p3']['bTGbC'] : {}, JSON.parse('{"%el":{"ai_QxmttoVW":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":1,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%bs":"outset","%bv":4,"%bw":0,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(255, 255, 255, 1)","%bos":"solid","%bsb":6,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-1,"order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","padding_top":16,"padding_left":24,"single_width":false,"min_width_css":"0px","padding_right":24,"single_height":false,"min_height_css":"0px","padding_bottom":16,"vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"space-between","container_horiz_alignment":"space-between"},"%x":"Group","id":"ai_QxmttoUX","%el":{"ai_QxmttoVX":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"center","horiz_alignment":"center","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoUY","%el":{"ai_QxmttoVY":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"src":{"%e":{"0":"https://placehold.co/50x50/50x50EBF3FF/EBF3FF/jpeg"},"%x":"TextExpression"},"%bos":"solid","order":1,"alt_tag":{"%e":{"0":"FireGuard Pro Logo"},"%x":"TextExpression"},"fit_width":false,"fit_height":true,"font_family":"Open Sans","margin_right":12,"single_width":true,"max_width_css":"100%","min_width_css":"48px","single_height":true,"min_height_css":"48px","vert_alignment":"center","horiz_alignment":"center","use_aspect_ratio":true,"four_border_style":false,"aspect_ratio_width":50,"aspect_ratio_height":50,"collapse_when_hidden":true},"%x":"Image","id":"ai_QxmttoUZ","%nm":"Image header-logo","%s1":"Image_standard_image_"},"ai_QxmttoVZ":{"%p":{"%3":{"%e":{"0":"FireGuard Pro"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":24,"%lh":1.4,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoUa","%nm":"Text header-title","%s1":"Text_heading_1_"}},"%nm":"Group header-logo-container","%s1":"Group_transparent_"},"ai_QxmttoVa":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%iv":false,"%lh":1.5,"%bos":"solid","order":2,"use_gap":true,"fit_width":true,"column_gap":24,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"center","horiz_alignment":"center","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-tablet"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"%iv":true},"%x":"State"}},"%x":"Group","id":"ai_QxmttoUb","%el":{"ai_QxmttoVb":{"%p":{"%3":{"%e":{"0":"Home"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%lh":1.5,"%pa":"index","%bos":"solid","order":1,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","font_weight":"500","vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(220, 38, 38, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoUc","%nm":"Link nav-home","%s1":"Link_link_light_primary_"},"ai_QxmttoVc":{"%p":{"%3":{"%e":{"0":"Training Modules"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%lh":1.5,"%pa":"training_module_dashboard","%bos":"solid","order":2,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","font_weight":"500","vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(220, 38, 38, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoUd","%nm":"Link nav-training","%s1":"Link_link_light_primary_"},"ai_QxmttoVd":{"%p":{"%3":{"%e":{"0":"Manager Dashboard"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%lh":1.5,"%pa":"manager_dashboard","%bos":"solid","order":3,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","font_weight":"500","vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(220, 38, 38, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoUe","%nm":"Link nav-manager","%s1":"Link_link_light_primary_"},"ai_QxmttoVe":{"%p":{"%3":{"%e":{"0":"Quiz Results"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%lh":1.5,"%pa":"quiz_results","%bos":"solid","order":4,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","font_weight":"500","vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(220, 38, 38, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoUf","%nm":"Link nav-quiz","%s1":"Link_link_light_primary_"},"ai_QxmttoVf":{"%p":{"%3":{"%e":{"0":"Badges & Leaderboard"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%lh":1.5,"%pa":"badge_and_leaderboard","%bos":"solid","order":5,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","font_weight":"500","vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(220, 38, 38, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoUg","%nm":"Link nav-badges","%s1":"Link_link_light_primary_"},"ai_QxmttoVg":{"%p":{"%3":{"%e":{"0":"Log In"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%br":6,"%bs":"none","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":16,"%ic":"rgba(255, 255, 255, 1)","%iv":false,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(220, 38, 38, 1)","%bos":"solid","order":6,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":16,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(185, 28, 28, 1)"},"%x":"State"},"1":{"%c":{"%n":{"%x":"Message","%nm":"not_logged_in","is_slidable":false},"%x":"CurrentUser","is_slidable":false},"%p":{"%iv":true},"%x":"State"}},"%x":"Button","id":"ai_QxmttoUh","%nm":"Button login-button","%s1":"Button_filled_light_primary_"},"ai_QxmttoVh":{"%p":{"%3":{"%e":{"0":"Sign Up"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%br":6,"%bs":"none","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":16,"%ic":"rgba(255, 255, 255, 1)","%iv":false,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(37, 99, 235, 1)","%bos":"solid","order":7,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":8,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(29, 78, 216, 1)"},"%x":"State"},"1":{"%c":{"%n":{"%x":"Message","%nm":"not_logged_in","is_slidable":false},"%x":"CurrentUser","is_slidable":false},"%p":{"%iv":true},"%x":"State"}},"%x":"Button","id":"ai_QxmttoUi","%nm":"Button signup-button","%s1":"Button_filled_light_primary_"},"ai_QxmttoVi":{"%p":{"%3":{"%e":{"0":"Log Out"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%br":6,"%bs":"none","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":16,"%ic":"rgba(255, 255, 255, 1)","%iv":false,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(75, 85, 99, 1)","%bos":"solid","order":8,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":16,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(55, 65, 81, 1)"},"%x":"State"},"1":{"%c":{"%n":{"%x":"Message","%nm":"logged_in","is_slidable":false},"%x":"CurrentUser","is_slidable":false},"%p":{"%iv":true},"%x":"State"}},"%x":"Button","id":"ai_QxmttoUj","%nm":"Button logout-button","%s1":"Button_filled_light_primary_"}},"%nm":"Group header-nav","%s1":"Group_transparent_"},"ai_QxmttoVj":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%9i":"fontawesome-6 solid bars","%bc":"rgba(229, 231, 235, 1)","%bs":"none","%bw":0,"%fc":"rgba(0, 0, 0, 1)","%fs":24,"%ic":"rgba(0, 0, 0, 1)","%iv":true,"%lh":2,"%bas":"none","%bos":"solid","order":3,"fit_width":true,"icon_size":24,"fit_height":true,"margin_top":0,"button_type":"icon","font_family":"Open Sans","margin_left":0,"padding_top":0,"margin_right":0,"padding_left":0,"margin_bottom":0,"padding_right":0,"min_height_css":"40px","padding_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-tablet"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"%iv":false},"%x":"State"}},"%x":"Button","id":"ai_QxmttoUk","%nm":"Button menu-icon","%s1":"Button_filled_light_primary_"}},"%nm":"header","%s1":"Group_transparent_"},"ai_QxmttoVk":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":1,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":6,"%bs":"outset","%bv":10,"%bw":1,"%iv":false,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(255, 255, 255, 1)","%bos":"solid","%bsb":15,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-3,"order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","padding_top":20,"padding_left":20,"single_width":true,"min_width_css":"384px","padding_right":20,"single_height":false,"min_height_css":"0px","padding_bottom":20,"vert_alignment":"center","horiz_alignment":"center","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Popup","id":"ai_QxmttoUm","%el":{"ai_QxmttoVl":{"%p":{"%3":{"%e":{"0":"Log In to FireGuard Pro"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":24,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":16,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoUo","%nm":"Text login-title","%s1":"Text_heading_2_"},"ai_QxmttoVm":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoUp","%el":{"ai_QxmttoVn":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":16,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoUq","%el":{"ai_QxmttoVo":{"%p":{"%3":{"%e":{"0":"Email"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":14,"%lh":1.4,"%bos":"solid","order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","font_weight":"700","single_width":false,"margin_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoUr","%nm":"Text A","%s1":"Text_body_16_"},"ai_QxmttoVp":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":4,"%bs":"outset","%bv":1,"%bw":1,"%cf":"email","%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.4,"%vc":true,"%bas":"bgcolor","%bgc":"#FFFFFF","%bos":"solid","%bsb":3,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":0,"order":2,"fit_width":false,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":12,"single_width":false,"margin_bottom":0,"min_width_css":"176px","padding_right":12,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"placeholder_color":"#9BA3AF","collapse_when_hidden":true},"%x":"Input","id":"ai_QxmttoUs","%nm":"Input login-email","%s1":"Input_standard_input_"}},"%nm":"Group B","%s1":"Group_transparent_"},"ai_QxmttoVq":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":24,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoUt","%el":{"ai_QxmttoVr":{"%p":{"%3":{"%e":{"0":"Password"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":14,"%lh":1.4,"%bos":"solid","order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","font_weight":"700","single_width":false,"margin_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoUu","%nm":"Text B","%s1":"Text_body_16_"},"ai_QxmttoVs":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":4,"%bs":"outset","%bv":1,"%bw":1,"%cf":"password","%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.4,"%vc":true,"%bas":"bgcolor","%bgc":"#FFFFFF","%bos":"solid","%bsb":3,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":0,"order":2,"fit_width":false,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":12,"single_width":false,"margin_bottom":12,"min_width_css":"176px","padding_right":12,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"placeholder_color":"#9BA3AF","collapse_when_hidden":true},"%x":"Input","id":"ai_QxmttoUv","%nm":"Input login-password","%s1":"Input_standard_input_"}},"%nm":"Group C","%s1":"Group_transparent_"},"ai_QxmttoVt":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":3,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"space-between","container_horiz_alignment":"space-between"},"%x":"Group","id":"ai_QxmttoUw","%el":{"ai_QxmttoVu":{"%p":{"%3":{"%e":{"0":"Log In"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%br":4,"%bs":"none","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":16,"%ic":"rgba(255, 255, 255, 1)","%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(220, 38, 38, 1)","%bos":"solid","order":1,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(185, 28, 28, 1)"},"%x":"State"},"1":{"%c":{"%n":{"%x":"Message","%nm":"not_logged_in","is_slidable":false},"%x":"CurrentUser","is_slidable":false},"%p":{"%iv":true},"%x":"State"}},"%x":"Button","id":"ai_QxmttoUx","%nm":"Button login-submit","%s1":"Button_filled_light_primary_"},"ai_QxmttoVv":{"%p":{"%3":{"%e":{"0":"Don\'t have an account? Sign up"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bs":"none","%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":14,"%ic":"rgba(220, 38, 38, 1)","%lh":1.4,"%bas":"none","%bos":"solid","order":2,"fit_width":true,"icon_size":14,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"padding_top":0,"margin_right":0,"padding_left":0,"margin_bottom":0,"padding_right":0,"min_height_css":"40px","padding_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(153, 27, 27, 1)","%ic":"rgba(153, 27, 27, 1)"},"%x":"State"}},"%x":"Button","id":"ai_QxmttoUy","%nm":"Button login-to-signup","%s1":"Button_filled_light_primary_"}},"%nm":"Group D","%s1":"Group_transparent_"}},"%nm":"Group login-form","%s1":"Group_transparent_"}},"%nm":"Popup login-popup","%s1":"Group_transparent_"},"ai_QxmttoVw":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":1,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":6,"%bs":"outset","%bv":10,"%bw":1,"%iv":false,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(255, 255, 255, 1)","%bos":"solid","%bsb":15,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-3,"order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","padding_top":20,"padding_left":20,"single_width":true,"min_width_css":"384px","padding_right":20,"single_height":false,"min_height_css":"0px","padding_bottom":20,"vert_alignment":"center","horiz_alignment":"center","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Popup","id":"ai_QxmttoUz","%el":{"ai_QxmttoVx":{"%p":{"%3":{"%e":{"0":"Sign Up for FireGuard Pro"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":24,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":16,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoVB","%nm":"Text signup-title","%s1":"Text_heading_2_"},"ai_QxmttoVy":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoVC","%el":{"ai_QxmttoVz":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":16,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoVD","%el":{"ai_QxmttoWA":{"%p":{"%3":{"%e":{"0":"Full Name"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":14,"%lh":1.4,"%bos":"solid","order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","font_weight":"700","single_width":false,"margin_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoVE","%nm":"Text C","%s1":"Text_body_16_"},"ai_QxmttoWB":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":4,"%bs":"outset","%bv":1,"%bw":1,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.4,"%vc":true,"%bas":"bgcolor","%bgc":"#FFFFFF","%bos":"solid","%bsb":3,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":0,"order":2,"fit_width":false,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":12,"single_width":false,"margin_bottom":0,"min_width_css":"176px","padding_right":12,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"placeholder_color":"#9BA3AF","collapse_when_hidden":true},"%x":"Input","id":"ai_QxmttoVF","%nm":"Input signup-name","%s1":"Input_standard_input_"}},"%nm":"Group F","%s1":"Group_transparent_"},"ai_QxmttoWC":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":16,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoVG","%el":{"ai_QxmttoWD":{"%p":{"%3":{"%e":{"0":"Role"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":14,"%lh":1.4,"%bos":"solid","order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","font_weight":"700","single_width":false,"margin_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoVH","%nm":"Text D","%s1":"Text_body_16_"},"ai_QxmttoWE":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":4,"%bs":"outset","%bv":1,"%bw":1,"%ch":"Hotel Staff\\nHotel Manager\\nVR Developer","%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.4,"%ps":{"%e":{"0":"Select your role"},"%x":"TextExpression"},"%vc":true,"%bas":"bgcolor","%bgc":"#FFFFFF","%bos":"solid","%bsb":3,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":0,"order":2,"fit_width":false,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"margin_right":0,"padding_left":12,"single_width":false,"margin_bottom":0,"min_width_css":"170px","padding_right":12,"computed_value":"text","min_height_css":"40px","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"placeholder_color":"#9BA3AF","collapse_when_hidden":true},"%x":"Dropdown","id":"ai_QxmttoVI","%nm":"Dropdown signup-role","%s1":"Dropdown_standard_dropdown_"}},"%nm":"Group G","%s1":"Group_transparent_"},"ai_QxmttoWF":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":3,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":16,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoVN","%el":{"ai_QxmttoWG":{"%p":{"%3":{"%e":{"0":"Email"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":14,"%lh":1.4,"%bos":"solid","order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","font_weight":"700","single_width":false,"margin_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoVO","%nm":"Text E","%s1":"Text_body_16_"},"ai_QxmttoWH":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":4,"%bs":"outset","%bv":1,"%bw":1,"%cf":"email","%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.4,"%vc":true,"%bas":"bgcolor","%bgc":"#FFFFFF","%bos":"solid","%bsb":3,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":0,"order":2,"fit_width":false,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":12,"single_width":false,"margin_bottom":0,"min_width_css":"176px","padding_right":12,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"placeholder_color":"#9BA3AF","collapse_when_hidden":true},"%x":"Input","id":"ai_QxmttoVP","%nm":"Input signup-email","%s1":"Input_standard_input_"}},"%nm":"Group H","%s1":"Group_transparent_"},"ai_QxmttoWI":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":4,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":24,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoVQ","%el":{"ai_QxmttoWJ":{"%p":{"%3":{"%e":{"0":"Password"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":14,"%lh":1.4,"%bos":"solid","order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","font_weight":"700","single_width":false,"margin_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoVR","%nm":"Text F","%s1":"Text_body_16_"},"ai_QxmttoWK":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":4,"%bs":"outset","%bv":1,"%bw":1,"%cf":"password","%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.4,"%vc":true,"%bas":"bgcolor","%bgc":"#FFFFFF","%bos":"solid","%bsb":3,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":0,"order":2,"fit_width":false,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":12,"single_width":false,"margin_bottom":12,"min_width_css":"176px","padding_right":12,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"placeholder_color":"#9BA3AF","collapse_when_hidden":true},"%x":"Input","id":"ai_QxmttoVS","%nm":"Input signup-password","%s1":"Input_standard_input_"}},"%nm":"Group I","%s1":"Group_transparent_"},"ai_QxmttoWL":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":5,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"space-between","container_horiz_alignment":"space-between"},"%x":"Group","id":"ai_QxmttoVT","%el":{"ai_QxmttoWM":{"%p":{"%3":{"%e":{"0":"Sign Up"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%br":4,"%bs":"none","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":16,"%ic":"rgba(255, 255, 255, 1)","%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(37, 99, 235, 1)","%bos":"solid","order":1,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(29, 78, 216, 1)"},"%x":"State"},"1":{"%c":{"%n":{"%x":"Message","%nm":"not_logged_in","is_slidable":false},"%x":"CurrentUser","is_slidable":false},"%p":{"%iv":true},"%x":"State"}},"%x":"Button","id":"ai_QxmttoVU","%nm":"Button signup-submit","%s1":"Button_filled_light_primary_"},"ai_QxmttoWN":{"%p":{"%3":{"%e":{"0":"Already have an account? Log in"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bs":"none","%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":14,"%ic":"rgba(220, 38, 38, 1)","%lh":1.4,"%bas":"none","%bos":"solid","order":2,"fit_width":true,"icon_size":14,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"padding_top":0,"margin_right":0,"padding_left":0,"margin_bottom":0,"padding_right":0,"min_height_css":"40px","padding_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(153, 27, 27, 1)","%ic":"rgba(153, 27, 27, 1)"},"%x":"State"}},"%x":"Button","id":"ai_QxmttoVV","%nm":"Button signup-to-login","%s1":"Button_filled_light_primary_"}},"%nm":"Group J","%s1":"Group_transparent_"}},"%nm":"Group signup-form","%s1":"Group_transparent_"}},"%nm":"Popup signup-popup","%s1":"Group_transparent_"},"ai_QxmttoZE":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":1,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(31, 41, 55, 1)","%bos":"solid","order":3,"fit_width":true,"fit_height":true,"font_family":"Open Sans","padding_top":32,"padding_left":24,"single_width":false,"min_width_css":"0px","padding_right":24,"single_height":false,"min_height_css":"0px","padding_bottom":32,"vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoYZ","%el":{"ai_QxmttoZF":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":24,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"space-between","container_horiz_alignment":"space-between"},"%x":"Group","id":"ai_QxmttoYa","%el":{"ai_QxmttoZG":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":24,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-tablet"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"margin_bottom":0},"%x":"State"}},"%x":"Group","id":"ai_QxmttoYb","%el":{"ai_QxmttoZH":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":12,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoYc","%el":{"ai_QxmttoZI":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"src":{"%e":{"0":"https://placehold.co/40x40/40x40EBF3FF/EBF3FF/jpeg"},"%x":"TextExpression"},"%bos":"solid","order":1,"alt_tag":{"%e":{"0":"FireGuard Pro Logo"},"%x":"TextExpression"},"fit_width":false,"fit_height":true,"font_family":"Open Sans","margin_right":8,"single_width":true,"max_width_css":"100%","min_width_css":"40px","single_height":true,"min_height_css":"40px","vert_alignment":"center","horiz_alignment":"center","use_aspect_ratio":true,"four_border_style":false,"aspect_ratio_width":40,"aspect_ratio_height":40,"collapse_when_hidden":true},"%x":"Image","id":"ai_QxmttoYd","%nm":"Image footer-logo","%s1":"Image_standard_image_"},"ai_QxmttoZJ":{"%p":{"%3":{"%e":{"0":"FireGuard Pro"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(248, 113, 113, 1)","%fs":20,"%lh":1.4,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoYe","%nm":"Text footer-title","%s1":"Text_heading_3_"}},"%nm":"Group footer-logo-container","%s1":"Group_transparent_"},"ai_QxmttoZK":{"%p":{"%3":{"%e":{"0":"AI-powered fire safety training for hotel staff. Learn, practice, and prepare for emergencies with interactive modules."},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%fs":14,"%lh":1.4,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"margin_right":0,"single_width":false,"margin_bottom":0,"max_width_css":"320px","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoYf","%nm":"Text footer-tagline","%s1":"Text_body_16_"}},"%nm":"Group footer-logo-section","%s1":"Group_transparent_"},"ai_QxmttoZL":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":24,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-tablet"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"margin_bottom":0},"%x":"State"}},"%x":"Group","id":"ai_QxmttoYg","%el":{"ai_QxmttoZM":{"%p":{"%3":{"%e":{"0":"Quick Links"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(248, 113, 113, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":12,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoYh","%nm":"Text footer-links-title","%s1":"Text_heading_4_"},"ai_QxmttoZN":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"%bos":"solid","order":2,"row_gap":8,"use_gap":true,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoYi","%el":{"ai_QxmttoZO":{"%p":{"%3":{"%e":{"0":"Home"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%fs":14,"%lh":1.4,"%pa":"index","%bos":"solid","order":1,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(255, 255, 255, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoYj","%nm":"Link footer-home","%s1":"Link_link_light_primary_"},"ai_QxmttoZP":{"%p":{"%3":{"%e":{"0":"Training Modules"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%fs":14,"%lh":1.4,"%pa":"training_module_dashboard","%bos":"solid","order":2,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(255, 255, 255, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoYk","%nm":"Link footer-training","%s1":"Link_link_light_primary_"},"ai_QxmttoZQ":{"%p":{"%3":{"%e":{"0":"Manager Dashboard"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%fs":14,"%lh":1.4,"%pa":"manager_dashboard","%bos":"solid","order":3,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(255, 255, 255, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoYl","%nm":"Link footer-manager","%s1":"Link_link_light_primary_"},"ai_QxmttoZR":{"%p":{"%3":{"%e":{"0":"Quiz Results"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%fs":14,"%lh":1.4,"%pa":"quiz_results","%bos":"solid","order":4,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(255, 255, 255, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoYm","%nm":"Link footer-quiz","%s1":"Link_link_light_primary_"},"ai_QxmttoZS":{"%p":{"%3":{"%e":{"0":"Badges & Leaderboard"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%fs":14,"%lh":1.4,"%pa":"badge_and_leaderboard","%bos":"solid","order":5,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(255, 255, 255, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoYn","%nm":"Link footer-badges","%s1":"Link_link_light_primary_"}},"%nm":"Group footer-links","%s1":"Group_transparent_"}},"%nm":"Group footer-links-section","%s1":"Group_transparent_"},"ai_QxmttoZT":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"%bos":"solid","order":3,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoYo","%el":{"ai_QxmttoZU":{"%p":{"%3":{"%e":{"0":"Contact Us"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(248, 113, 113, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":12,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoYp","%nm":"Text footer-contact-title","%s1":"Text_heading_4_"},"ai_QxmttoZV":{"%p":{"%3":{"%e":{"0":"support@fireguardpro.com"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%fs":14,"%lh":1.4,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"margin_right":0,"margin_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoYq","%nm":"Text footer-email","%s1":"Text_body_16_"},"ai_QxmttoZW":{"%p":{"%3":{"%e":{"0":"+1 (800) 555-FIRE"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%fs":14,"%lh":1.4,"%bos":"solid","order":3,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"margin_right":0,"margin_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoYr","%nm":"Text footer-phone","%s1":"Text_body_16_"},"ai_QxmttoZX":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"%bos":"solid","order":4,"use_gap":true,"fit_width":true,"column_gap":16,"fit_height":true,"margin_top":8,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoYs","%el":{"ai_QxmttoZY":{"%p":{"%3":{"%e":{"0":"[fa]twitter[/fa]"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%1l":"url","%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%lh":1.5,"url":{"%e":{"0":"https://twitter.com/fireguardpro"},"%x":"TextExpression"},"%bos":"solid","order":1,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(255, 255, 255, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoYt","%nm":"Link footer-twitter","%s1":"Link_link_light_primary_"},"ai_QxmttoZZ":{"%p":{"%3":{"%e":{"0":"[fa]linkedin[/fa]"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%1l":"url","%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%lh":1.5,"url":{"%e":{"0":"https://linkedin.com/company/fireguardpro"},"%x":"TextExpression"},"%bos":"solid","order":2,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(255, 255, 255, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoYv","%nm":"Link footer-linkedin","%s1":"Link_link_light_primary_"},"ai_QxmttoZa":{"%p":{"%3":{"%e":{"0":"[fa]facebook[/fa]"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%1l":"url","%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(209, 213, 219, 1)","%lh":1.5,"url":{"%e":{"0":"https://facebook.com/fireguardpro"},"%x":"TextExpression"},"%bos":"solid","order":3,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(255, 255, 255, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoYx","%nm":"Link footer-facebook","%s1":"Link_link_light_primary_"}},"%nm":"Group footer-social","%s1":"Group_transparent_"}},"%nm":"Group footer-contact-section","%s1":"Group_transparent_"}},"%nm":"Group footer-main","%s1":"Group_transparent_"},"ai_QxmttoZb":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(55, 65, 81, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","padding_top":24,"single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"space-between","container_horiz_alignment":"space-between"},"%x":"Group","id":"ai_QxmttoYz","%el":{"ai_QxmttoZc":{"%p":{"%3":{"%e":{"0":"© 2025 FireGuard Pro. All rights reserved."},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(156, 163, 175, 1)","%fs":14,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoZA","%nm":"Text footer-copyright","%s1":"Text_body_16_"},"ai_QxmttoZd":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%lh":1.5,"%bos":"solid","order":2,"use_gap":true,"fit_width":true,"column_gap":16,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"center","horiz_alignment":"center","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoZB","%el":{"ai_QxmttoZe":{"%p":{"%3":{"%e":{"0":"Privacy Policy"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(156, 163, 175, 1)","%fs":14,"%lh":1.4,"%pa":"privacy","%bos":"solid","order":1,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(255, 255, 255, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoZC","%nm":"Link footer-privacy","%s1":"Link_link_light_primary_"},"ai_QxmttoZf":{"%p":{"%3":{"%e":{"0":"Terms of Service"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(156, 163, 175, 1)","%fs":14,"%lh":1.4,"%pa":"terms","%bos":"solid","order":2,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(255, 255, 255, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttoZD","%nm":"Link footer-terms","%s1":"Link_link_light_primary_"}},"%nm":"Group footer-legal","%s1":"Group_transparent_"}},"%nm":"Group footer-bottom","%s1":"Group_transparent_"}},"%nm":"footer","%s1":"Group_transparent_"},"ai_Qxmttobw":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":1,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(249, 250, 251, 1)","%bos":"solid","order":2,"fit_width":false,"fit_height":true,"font_family":"Open Sans","padding_top":32,"padding_left":16,"single_width":false,"min_width_css":"0px","padding_right":16,"single_height":false,"min_height_css":"640px","padding_bottom":32,"vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-mobile-landing"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"padding_left":32,"padding_right":32},"%x":"State"},"1":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-tablet"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"padding_left":48,"padding_right":48},"%x":"State"}},"%x":"Group","id":"ai_QxmttoaB","%el":{"ai_Qxmttobx":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":40,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoaC","%el":{"ai_Qxmttoby":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%b4":"left","%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":12,"%bs":"outset","%bv":10,"%bw":0,"%lh":1.5,"%bas":"gradient","%bgf":"rgba(220, 38, 38, 1)","%bgt":"rgba(249, 115, 22, 1)","%bos":"solid","%bsb":15,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-3,"order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoaD","%el":{"ai_Qxmttobz":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","padding_top":32,"padding_left":32,"single_width":true,"min_width_css":"64.666667%","padding_right":32,"single_height":false,"min_height_css":"0px","padding_bottom":32,"vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoaE","%el":{"ai_QxmttocA":{"%p":{"%3":{"%e":{"0":"Welcome to FireGuard Pro"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":36,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":16,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-mobile-landing"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"%fs":48,"%lh":1.4},"%x":"State"}},"%x":"Text","id":"ai_QxmttoaF","%nm":"Text hero-title","%s1":"Text_heading_1_"},"ai_QxmttocB":{"%p":{"%3":{"%e":{"0":"The AI-driven interactive training platform designed to enhance hotel staff emergency preparedness through gamified learning and immersive VR simulations."},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":20,"%lh":1.4,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"margin_right":0,"margin_bottom":24,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoaG","%nm":"Text hero-description","%s1":"Text_body_16_"},"ai_QxmttocC":{"%p":{"%3":{"%e":{"0":"Get Started with Training"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":6,"%bs":"outset","%bv":4,"%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":16,"%ic":"rgba(220, 38, 38, 1)","%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(255, 255, 255, 1)","%bos":"solid","%bsb":6,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-1,"order":3,"fit_width":false,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"padding_top":12,"margin_right":0,"padding_left":24,"single_width":false,"margin_bottom":0,"padding_right":24,"min_height_css":"40px","padding_bottom":12,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(243, 244, 246, 1)"},"%x":"State"}},"%x":"Button","id":"ai_QxmttoaH","%nm":"Button get-started-button","%s1":"Button_filled_light_primary_"}},"%nm":"Group hero-content","%s1":"Group_transparent_"},"ai_QxmttocD":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":true,"min_width_css":"31.333333000000003%","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoaI","%el":{"ai_QxmttocE":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"src":{"%e":{"0":"https://images.unsplash.com/photo-1513460587394-905bb175a04c?ixid=M3w2OTk3Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDMyNjkwMzN8&ixlib=rb-4.0.3"},"%x":"TextExpression"},"%bos":"solid","order":1,"alt_tag":{"%e":{"0":"selective focus photography of fire"},"%x":"TextExpression"},"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"max_width_css":"100%","single_height":false,"vert_alignment":"stretch","horiz_alignment":"stretch","use_aspect_ratio":true,"four_border_style":false,"aspect_ratio_width":2304,"aspect_ratio_height":1536,"collapse_when_hidden":true},"%x":"Image","id":"ai_QxmttoaJ","%nm":"Image hero-image","%s1":"Image_standard_image_"}},"%nm":"Group hero-image-container","%s1":"Group_transparent_"}},"%nm":"Group hero-container","%s1":"Group_transparent_"}},"%nm":"Group welcome-section","%s1":"Group_transparent_"},"ai_QxmttocF":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":40,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoaK","%el":{"ai_QxmttocG":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":24,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"space-between","container_horiz_alignment":"space-between"},"%x":"Group","id":"ai_QxmttoaL","%el":{"ai_QxmttocH":{"%p":{"%3":{"%e":{"0":"Available Training Modules"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(31, 41, 55, 1)","%fs":30,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoaM","%nm":"Text training-title","%s1":"Text_heading_2_"},"ai_QxmttocI":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"center","horiz_alignment":"center","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoaN","%el":{"ai_QxmttocJ":{"%p":{"%3":{"%e":{"0":"  Notification Settings "},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%9i":"fontawesome-6 solid bell","%bc":"rgba(209, 213, 219, 1)","%br":6,"%bs":"none","%bw":1,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%ic":"rgba(55, 65, 81, 1)","%lh":1.5,"%bas":"none","%bos":"solid","order":1,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"button_type":"label_icon","font_family":"Open Sans","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(220, 38, 38, 1)","%ic":"rgba(220, 38, 38, 1)"},"%x":"State"}},"%x":"Button","id":"ai_QxmttoaO","%nm":"Button notification-settings-button","%s1":"Button_filled_light_primary_"}},"%nm":"Group notification-preferences","%s1":"Group_transparent_"}},"%nm":"Group training-header","%s1":"Group_transparent_"},"ai_QxmttocK":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"row_gap":24,"use_gap":true,"fit_width":false,"column_gap":24,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_horiz_alignment":"space-between"},"%x":"Group","id":"ai_QxmttoaR","%el":{"ai_QxmttocL":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":8,"%bs":"outset","%bv":4,"%bw":0,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(255, 255, 255, 1)","%bos":"solid","%bsb":6,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-1,"order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"max_width_css":"100%","min_width_css":"50%","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-mobile-landing"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"max_width_css":"50%","min_width_css":"33%"},"%x":"State"},"1":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-tablet"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"max_width_css":"33%","min_width_css":"25%"},"%x":"State"}},"%x":"Group","id":"ai_QxmttoaS","%el":{"ai_QxmttocM":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":true,"min_height_css":"192px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoaT","%el":{"ai_QxmttocN":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%2f":"zoom","%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"src":{"%e":{"0":{"%n":{"%n":{"%x":"Message","%nm":"title_text","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%t5":"custom.trainingmodule","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%bos":"solid","order":1,"alt_tag":{"%e":{"0":"Training module thumbnail"},"%x":"TextExpression"},"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"max_width_css":"100%","single_height":false,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Image","id":"ai_QxmttoaU","%nm":"Image module-image","%s1":"Image_standard_image_"}},"%nm":"Group module-image-container","%s1":"Group_transparent_"},"ai_QxmttocO":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":false,"fit_height":true,"font_family":"Open Sans","padding_top":24,"padding_left":24,"single_width":false,"min_width_css":"0px","padding_right":24,"single_height":false,"min_height_css":"0px","padding_bottom":24,"vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoaV","%el":{"ai_QxmttocP":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":12,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"space-between","container_horiz_alignment":"space-between"},"%x":"Group","id":"ai_QxmttoaW","%el":{"ai_QxmttocQ":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"title_text","is_slidable":false},"%x":"Message","%nm":"module_custom_trainingmodule","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.trainingsession","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":7,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(31, 41, 55, 1)","%fs":20,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoaX","%nm":"Text module-title","%s1":"Text_heading_3_"},"ai_QxmttocR":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":7,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"center","horiz_alignment":"center","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttoaY","%el":{"ai_QxmttocS":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"difficulty_level_text","is_slidable":false},"%x":"Message","%nm":"module_custom_trainingmodule","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%d2":true,"%sf":"completion_date_date","%t5":"custom.trainingsession","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":8,"%bc":"rgba(229, 231, 235, 1)","%br":9999,"%bw":0,"%fs":12,"%lh":1.4,"%bas":"bgcolor","%bgc":"{% if module.difficulty_level == \'Easy\' %","%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","font_weight":"600","padding_top":2,"padding_left":10,"padding_right":10,"padding_bottom":2,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttoaZ","%nm":"Text difficulty-badge","%s1":"Text_body_16_"}},"%nm":"Group module-difficulty","%s1":"Group_transparent_"}},"%nm":"Group module-header","%s1":"Group_transparent_"},"ai_QxmttocT":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"title_text","is_slidable":false},"%x":"Message","%nm":"module_custom_trainingmodule","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.trainingsession","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(75, 85, 99, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"margin_right":0,"margin_bottom":16,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttoaa","%nm":"Text module-description","%s1":"Text_body_16_"},"ai_QxmttocU":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":3,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":16,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttoab","%el":{"ai_QxmttocV":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"type_text","is_slidable":false},"%x":"Message","%nm":"module_custom_trainingmodule","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.trainingsession","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":7,"%bc":"rgba(229, 231, 235, 1)","%br":9999,"%bw":0,"%fc":"rgba(30, 64, 175, 1)","%fs":12,"%lh":1.4,"%bas":"bgcolor","%bgc":"rgba(219, 234, 254, 1)","%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","font_weight":"600","padding_top":4,"padding_left":12,"padding_right":12,"padding_bottom":4,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttoac","%nm":"Text type-label","%s1":"Text_body_16_"}},"%nm":"Group module-type-badge","%s1":"Group_transparent_"},"ai_QxmttocW":{"%p":{"%3":{"%e":{"0":"Start Training"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%br":6,"%bs":"none","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":16,"%ic":"rgba(255, 255, 255, 1)","%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(220, 38, 38, 1)","%bos":"solid","order":4,"fit_width":false,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":16,"single_width":false,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(185, 28, 28, 1)"},"%x":"State"}},"%x":"Button","id":"ai_Qxmttoad","%nm":"Button start-module-button","%s1":"Button_filled_light_primary_"}},"%nm":"Group module-content","%s1":"Group_transparent_"}},"%nm":"Group module-card","%s1":"Group_transparent_"}},"%nm":"Group training-modules-grid","%s1":"Group_transparent_"}},"%nm":"Group training-modules-section","%s1":"Group_transparent_"},"ai_QxmttocX":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":3,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":40,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttoae","%el":{"ai_QxmttocY":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":24,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttoaf","%el":{"ai_QxmttocZ":{"%p":{"%3":{"%e":{"0":"Your Progress & Achievements"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(31, 41, 55, 1)","%fs":30,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttoag","%nm":"Text gamification-title","%s1":"Text_heading_2_"}},"%nm":"Group gamification-header","%s1":"Group_transparent_"},"ai_Qxmttoca":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"row_gap":24,"use_gap":true,"fit_width":true,"column_gap":24,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttoah","%el":{"ai_Qxmttocb":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":8,"%bs":"outset","%bv":4,"%bw":0,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(255, 255, 255, 1)","%bos":"solid","%bsb":6,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-1,"order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","padding_top":24,"padding_left":24,"single_width":true,"min_width_css":"48%","padding_right":24,"single_height":false,"min_height_css":"0px","padding_bottom":24,"vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttoai","%el":{"ai_Qxmttocc":{"%p":{"%3":{"%e":{"0":"Your Badges"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(31, 41, 55, 1)","%fs":24,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":16,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttoaj","%nm":"Text badges-title","%s1":"Text_heading_3_"},"ai_Qxmttocd":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"row_gap":16,"use_gap":true,"fit_width":false,"column_gap":16,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_horiz_alignment":"space-between"},"%x":"Group","id":"ai_Qxmttoak","%el":{"ai_Qxmttoce":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"max_width_css":"50%","min_width_css":"33%","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-mobile"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"max_width_css":"33%","min_width_css":"25%"},"%x":"State"}},"%x":"Group","id":"ai_Qxmttoal","%el":{"ai_Qxmttocf":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":7,"%bc":"rgba(229, 231, 235, 1)","%br":9999,"%bw":0,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(243, 244, 246, 1)","%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":true,"margin_bottom":8,"min_width_css":"80px","single_height":true,"min_height_css":"80px","vert_alignment":"center","horiz_alignment":"center","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"center","container_horiz_alignment":"center"},"%x":"Group","id":"ai_Qxmttoam","%el":{"ai_Qxmttocg":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":8,"%2f":"zoom","%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"src":{"%e":{"0":"Expression: badge.image_url"},"%x":"TextExpression"},"%bos":"solid","order":1,"alt_tag":{"%e":{"0":"Achievement badge"},"%x":"TextExpression"},"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":true,"max_width_css":"100%","min_width_css":"64px","single_height":true,"min_height_css":"64px","vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Image","id":"ai_Qxmttoan","%nm":"Image badge-image","%s1":"Image_standard_image_"}},"%nm":"Group badge-image-container","%s1":"Group_transparent_"},"ai_Qxmttoch":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%x":"Message","%nm":"name_text","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.badge","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":7,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fa":"center","%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":2,"fit_width":false,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"500","margin_left":0,"margin_right":0,"single_width":false,"margin_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttoao","%nm":"Text badge-name","%s1":"Text_body_16_"}},"%nm":"Group badge-card","%s1":"Group_transparent_"}},"%nm":"Group badges-grid","%s1":"Group_transparent_"},"ai_Qxmttoci":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":3,"fit_width":true,"fit_height":true,"margin_top":24,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"center","container_horiz_alignment":"center"},"%x":"Group","id":"ai_Qxmttoap","%el":{"ai_Qxmttocj":{"%p":{"%3":{"%e":{"0":"View All Badges"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(220, 38, 38, 1)","%lh":1.5,"%pa":"badge_and_leaderboard","%bos":"solid","order":1,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","font_weight":"500","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(153, 27, 27, 1)"},"%x":"State"}},"%x":"Link","id":"ai_Qxmttoaq","%nm":"Link badges-link","%s1":"Link_link_light_primary_"}},"%nm":"Group view-all-badges","%s1":"Group_transparent_"}},"%nm":"Group badges-container","%s1":"Group_transparent_"},"ai_Qxmttock":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":8,"%bs":"outset","%bv":4,"%bw":0,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(255, 255, 255, 1)","%bos":"solid","%bsb":6,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-1,"order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","padding_top":24,"padding_left":24,"single_width":true,"min_width_css":"48%","padding_right":24,"single_height":false,"min_height_css":"0px","padding_bottom":24,"vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttoar","%el":{"ai_Qxmttocl":{"%p":{"%3":{"%e":{"0":"Top Performers"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(31, 41, 55, 1)","%fs":24,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":16,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttoas","%nm":"Text leaderboard-title","%s1":"Text_heading_3_"},"ai_Qxmttocm":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"row_gap":12,"use_gap":true,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttoat","%el":{"ai_Qxmttocn":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%br":6,"%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","padding_top":12,"padding_left":12,"single_width":false,"min_width_css":"0px","padding_right":12,"single_height":false,"min_height_css":"0px","padding_bottom":12,"vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(249, 250, 251, 1)"},"%x":"State"}},"%x":"Group","id":"ai_Qxmttoau","%el":{"ai_Qxmttoco":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":7,"%bc":"rgba(229, 231, 235, 1)","%br":9999,"%bw":0,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(243, 244, 246, 1)","%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","margin_right":16,"single_width":true,"min_width_css":"40px","single_height":true,"min_height_css":"40px","vert_alignment":"center","horiz_alignment":"center","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"center","container_horiz_alignment":"center"},"%x":"Group","id":"ai_Qxmttoav","%el":{"ai_Qxmttocp":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%x":"Message","%nm":"rank_number","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.leaderboard","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":8,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttoaw","%nm":"Text rank-number","%s1":"Text_body_16_"}},"%nm":"Group rank-container","%s1":"Group_transparent_"},"ai_Qxmttocq":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":7,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"center","horiz_alignment":"center","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttoax","%el":{"ai_Qxmttocr":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"name_text","is_slidable":false},"%x":"Message","%nm":"user_user","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.leaderboard","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":8,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(31, 41, 55, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"500","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttoay","%nm":"Text user-name","%s1":"Text_body_16_"}},"%nm":"Group user-info","%s1":"Group_transparent_"},"ai_Qxmttocs":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":7,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":3,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"center","horiz_alignment":"center","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttoaz","%el":{"ai_Qxmttoct":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%x":"Message","%nm":"points_number","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.leaderboard","ignore_empty_constraints":false},"%x":"Search"},"1":" pts"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":8,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"600","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttobA","%nm":"Text points-value","%s1":"Text_body_16_"}},"%nm":"Group points-container","%s1":"Group_transparent_"}},"%nm":"Group leaderboard-item","%s1":"Group_transparent_"}},"%nm":"Group leaderboard-list","%s1":"Group_transparent_"},"ai_Qxmttocu":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":3,"fit_width":true,"fit_height":true,"margin_top":24,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"center","container_horiz_alignment":"center"},"%x":"Group","id":"ai_QxmttobB","%el":{"ai_Qxmttocv":{"%p":{"%3":{"%e":{"0":"View Full Leaderboard"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(220, 38, 38, 1)","%lh":1.5,"%pa":"badge_and_leaderboard","%bos":"solid","order":1,"no_html":true,"fit_width":true,"no_bbcode":false,"fit_height":true,"font_family":"Open Sans","font_weight":"500","vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%fc":"rgba(153, 27, 27, 1)"},"%x":"State"}},"%x":"Link","id":"ai_QxmttobC","%nm":"Link leaderboard-link","%s1":"Link_link_light_primary_"}},"%nm":"Group view-full-leaderboard","%s1":"Group_transparent_"}},"%nm":"Group leaderboard-container","%s1":"Group_transparent_"}},"%nm":"Group badges-leaderboard-container","%s1":"Group_transparent_"}},"%nm":"Group badges-leaderboard-section","%s1":"Group_transparent_"},"ai_Qxmttocw":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":4,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":40,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttobD","%el":{"ai_Qxmttocx":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"margin_bottom":24,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttobE","%el":{"ai_Qxmttocy":{"%p":{"%3":{"%e":{"0":"VR Training Scenarios"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(31, 41, 55, 1)","%fs":30,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttobF","%nm":"Text vr-title","%s1":"Text_heading_2_"}},"%nm":"Group vr-header","%s1":"Group_transparent_"},"ai_Qxmttocz":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"row_gap":24,"use_gap":true,"fit_width":false,"column_gap":24,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_horiz_alignment":"space-between"},"%x":"Group","id":"ai_QxmttobG","%el":{"ai_QxmttodA":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":8,"%bs":"outset","%bv":4,"%bw":0,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(255, 255, 255, 1)","%bos":"solid","%bsb":6,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-1,"order":1,"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"max_width_css":"100%","min_width_css":"50%","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%a":{"%p":{"breakpoint_id":"built-in-mobile-landing"},"%x":"Breakpoint","is_slidable":false},"%x":"Message","%nm":"greater_than","is_slidable":false},"%p":{"%nm":"Current Page Width"},"%x":"PageData","is_slidable":false},"%p":{"max_width_css":"50%","min_width_css":"33%"},"%x":"State"}},"%x":"Group","id":"ai_QxmttobH","%el":{"ai_QxmttodB":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":true,"min_height_css":"224px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttobI","%el":{"ai_QxmttodC":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%2f":"zoom","%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"src":{"%e":{"0":"Expression: module.image_url"},"%x":"TextExpression"},"%bos":"solid","order":1,"alt_tag":{"%e":{"0":"VR training scenario"},"%x":"TextExpression"},"fit_width":false,"fit_height":true,"font_family":"Open Sans","single_width":false,"max_width_css":"100%","single_height":false,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Image","id":"ai_QxmttobJ","%nm":"Image vr-image","%s1":"Image_standard_image_"}},"%nm":"Group vr-image-container","%s1":"Group_transparent_"},"ai_QxmttodD":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","padding_top":24,"padding_left":24,"single_width":false,"min_width_css":"0px","padding_right":24,"single_height":false,"min_height_css":"0px","padding_bottom":24,"vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttobK","%el":{"ai_QxmttodE":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"title_text","is_slidable":false},"%x":"Message","%nm":"module_custom_trainingmodule","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.trainingsession","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(31, 41, 55, 1)","%fs":20,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":12,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttobL","%nm":"Text vr-scenario-title","%s1":"Text_heading_3_"},"ai_QxmttodF":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"title_text","is_slidable":false},"%x":"Message","%nm":"module_custom_trainingmodule","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.trainingsession","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(75, 85, 99, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"margin_right":0,"margin_bottom":16,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttobM","%nm":"Text vr-description","%s1":"Text_body_16_"},"ai_QxmttodG":{"%p":{"%3":{"%e":{"0":"Start VR Scenario"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%br":6,"%bs":"none","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":16,"%ic":"rgba(255, 255, 255, 1)","%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(37, 99, 235, 1)","%bos":"solid","order":3,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(29, 78, 216, 1)"},"%x":"State"}},"%x":"Button","id":"ai_QxmttobN","%nm":"Button start-vr-button","%s1":"Button_filled_light_primary_"}},"%nm":"Group vr-content","%s1":"Group_transparent_"}},"%nm":"Group vr-card","%s1":"Group_transparent_"}},"%nm":"Group vr-scenarios-grid","%s1":"Group_transparent_"}},"%nm":"Group vr-training-section","%s1":"Group_transparent_"}},"%nm":"main","%s1":"Group_transparent_"},"ai_QxmttodH":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":8,"%bs":"outset","%bv":10,"%bw":0,"%iv":false,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(255, 255, 255, 1)","%bos":"solid","%bsb":15,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-3,"order":5,"fit_width":false,"fit_height":true,"font_family":"Open Sans","padding_top":24,"padding_left":24,"single_width":false,"max_width_css":"448px","min_width_css":"0px","padding_right":24,"single_height":false,"min_height_css":"0px","padding_bottom":24,"vert_alignment":"center","horiz_alignment":"center","container_layout":"column","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"center","container_horiz_alignment":"center"},"%x":"Popup","id":"ai_QxmttobO","%el":{"ai_QxmttodI":{"%p":{"%3":{"%e":{"0":"Notification Preferences"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(31, 41, 55, 1)","%fs":24,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":16,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttobQ","%nm":"Text notification-title","%s1":"Text_heading_2_"},"ai_QxmttodJ":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"row_gap":16,"use_gap":true,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttobR","%el":{"ai_QxmttodK":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"use_gap":true,"fit_width":true,"column_gap":12,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttobS","%el":{"ai_QxmttodL":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(209, 213, 219, 1)","%br":4,"%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":16,"%lh":1.5,"%vc":true,"%bos":"solid","%lab":{"%e":{"0":""},"%x":"TextExpression"},"order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":0,"margin_right":0,"padding_left":0,"single_width":true,"margin_bottom":0,"min_width_css":"20px","padding_right":0,"single_height":true,"min_height_css":"20px","padding_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Checkbox","id":"ai_QxmttobT","%nm":"Checkbox training-checkbox","%s1":"Checkbox_standard_checkbox_"},"ai_QxmttodM":{"%p":{"%3":{"%e":{"0":"Training Schedule Reminders"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttobU","%nm":"Text A","%s1":"Text_body_16_"}},"%nm":"Group training-notifications","%s1":"Group_transparent_"},"ai_QxmttodN":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"use_gap":true,"fit_width":true,"column_gap":12,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttobV","%el":{"ai_QxmttodO":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(209, 213, 219, 1)","%br":4,"%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":16,"%lh":1.5,"%vc":true,"%bos":"solid","%lab":{"%e":{"0":""},"%x":"TextExpression"},"order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":0,"margin_right":0,"padding_left":0,"single_width":true,"margin_bottom":0,"min_width_css":"20px","padding_right":0,"single_height":true,"min_height_css":"20px","padding_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Checkbox","id":"ai_QxmttobW","%nm":"Checkbox module-checkbox","%s1":"Checkbox_standard_checkbox_"},"ai_QxmttodP":{"%p":{"%3":{"%e":{"0":"Module Completion Updates"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_QxmttobX","%nm":"Text B","%s1":"Text_body_16_"}},"%nm":"Group module-notifications","%s1":"Group_transparent_"},"ai_QxmttodQ":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":3,"use_gap":true,"fit_width":true,"column_gap":12,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_QxmttobY","%el":{"ai_QxmttodR":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(209, 213, 219, 1)","%br":4,"%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":16,"%lh":1.5,"%vc":true,"%bos":"solid","%lab":{"%e":{"0":""},"%x":"TextExpression"},"order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":0,"margin_right":0,"padding_left":0,"single_width":true,"margin_bottom":0,"min_width_css":"20px","padding_right":0,"single_height":true,"min_height_css":"20px","padding_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Checkbox","id":"ai_QxmttobZ","%nm":"Checkbox leaderboard-checkbox","%s1":"Checkbox_standard_checkbox_"},"ai_QxmttodS":{"%p":{"%3":{"%e":{"0":"Leaderboard Updates"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttoba","%nm":"Text C","%s1":"Text_body_16_"}},"%nm":"Group leaderboard-notifications","%s1":"Group_transparent_"},"ai_QxmttodT":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":4,"use_gap":true,"fit_width":true,"column_gap":12,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttobb","%el":{"ai_QxmttodU":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(209, 213, 219, 1)","%br":4,"%bw":0,"%fc":"rgba(220, 38, 38, 1)","%fs":16,"%lh":1.5,"%vc":true,"%bos":"solid","%lab":{"%e":{"0":""},"%x":"TextExpression"},"order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":0,"margin_right":0,"padding_left":0,"single_width":true,"margin_bottom":0,"min_width_css":"20px","padding_right":0,"single_height":true,"min_height_css":"20px","padding_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Checkbox","id":"ai_Qxmttobc","%nm":"Checkbox badge-checkbox","%s1":"Checkbox_standard_checkbox_"},"ai_QxmttodV":{"%p":{"%3":{"%e":{"0":"Badge Achievements"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttobd","%nm":"Text D","%s1":"Text_body_16_"}},"%nm":"Group badge-notifications","%s1":"Group_transparent_"},"ai_QxmttodW":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":5,"use_gap":true,"fit_width":true,"column_gap":12,"fit_height":true,"margin_top":24,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"flex-end","container_horiz_alignment":"flex-end"},"%x":"Group","id":"ai_Qxmttobe","%el":{"ai_QxmttodX":{"%p":{"%3":{"%e":{"0":"Cancel"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(209, 213, 219, 1)","%br":6,"%bs":"none","%bw":1,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%ic":"rgba(55, 65, 81, 1)","%lh":1.5,"%bas":"none","%bos":"solid","order":1,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(249, 250, 251, 1)"},"%x":"State"}},"%x":"Button","id":"ai_Qxmttobf","%nm":"Button cancel-notifications","%s1":"Button_filled_light_primary_"},"ai_QxmttodY":{"%p":{"%3":{"%e":{"0":"Save Preferences"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%br":6,"%bs":"none","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":16,"%ic":"rgba(255, 255, 255, 1)","%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(220, 38, 38, 1)","%bos":"solid","order":2,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(185, 28, 28, 1)"},"%x":"State"}},"%x":"Button","id":"ai_Qxmttobg","%nm":"Button save-notifications","%s1":"Button_filled_light_primary_"}},"%nm":"Group notification-buttons","%s1":"Group_transparent_"}},"%nm":"Group notification-form","%s1":"Group_transparent_"}},"%nm":"Popup notification-popup","%s1":"Group_transparent_"},"ai_QxmttodZ":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":2,"%bc":"rgba(229, 231, 235, 1)","%bh":0,"%br":8,"%bs":"outset","%bv":10,"%bw":0,"%iv":false,"%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(255, 255, 255, 1)","%bos":"solid","%bsb":15,"%bsc":"rgba(0, 0, 0, 0.1)","%bsp":-3,"order":4,"fit_width":false,"fit_height":true,"font_family":"Open Sans","padding_top":24,"padding_left":24,"single_width":false,"max_width_css":"672px","min_width_css":"0px","padding_right":24,"single_height":false,"min_height_css":"0px","padding_bottom":24,"vert_alignment":"center","horiz_alignment":"center","container_layout":"column","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"center","container_horiz_alignment":"center"},"%x":"Popup","id":"ai_Qxmttobh","%el":{"ai_Qxmttoda":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"title_text","is_slidable":false},"%x":"Message","%nm":"module_custom_trainingmodule","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.trainingsession","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(31, 41, 55, 1)","%fs":24,"%lh":1.4,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"700","margin_left":0,"margin_right":0,"margin_bottom":16,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttobj","%nm":"Text module-details-title","%s1":"Text_heading_2_"},"ai_Qxmttodb":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"row_gap":16,"use_gap":true,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"column","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttobk","%el":{"ai_Qxmttodc":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"title_text","is_slidable":false},"%x":"Message","%nm":"module_custom_trainingmodule","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%d2":true,"%sf":"completion_date_date","%t5":"custom.trainingsession","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(75, 85, 99, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"margin_right":0,"margin_bottom":0,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttobl","%nm":"Text module-details-description","%s1":"Text_body_16_"},"ai_Qxmttodd":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"use_gap":true,"fit_width":true,"column_gap":24,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttobm","%el":{"ai_Qxmttode":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttobn","%el":{"ai_Qxmttodf":{"%p":{"%3":{"%e":{"0":"Difficulty:"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"500","margin_left":0,"margin_right":8,"margin_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttobo","%nm":"Text difficulty-label","%s1":"Text_body_16_"},"ai_Qxmttodg":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"difficulty_level_text","is_slidable":false},"%x":"Message","%nm":"module_custom_trainingmodule","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.trainingsession","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%br":9999,"%bw":0,"%fs":14,"%lh":1.4,"%bas":"bgcolor","%bgc":"{% if module.difficulty_level == \'Easy\' %","%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","font_weight":"600","padding_top":2,"padding_left":10,"padding_right":10,"padding_bottom":2,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttobp","%nm":"Text difficulty-value","%s1":"Text_body_16_"}},"%nm":"Group difficulty-container","%s1":"Group_transparent_"},"ai_Qxmttodh":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":5,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true},"%x":"Group","id":"ai_Qxmttobq","%el":{"ai_Qxmttodi":{"%p":{"%3":{"%e":{"0":"Type:"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%lh":1.5,"%bos":"solid","order":1,"fit_width":true,"fit_height":true,"margin_top":0,"font_family":"Open Sans","font_weight":"500","margin_left":0,"margin_right":8,"margin_bottom":0,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttobr","%nm":"Text type-label-detail","%s1":"Text_body_16_"},"ai_Qxmttodj":{"%p":{"%3":{"%e":{"0":{"%n":{"%n":{"%n":{"%x":"Message","%nm":"type_text","is_slidable":false},"%x":"Message","%nm":"module_custom_trainingmodule","is_slidable":false},"%x":"Message","%nm":"first_element","is_slidable":false},"%p":{"%co":{"0":{"%k":"user_user","%v":{"%x":"CurrentUser"},"%c2":"equals"}},"%t5":"custom.trainingsession","ignore_empty_constraints":false},"%x":"Search"}},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":6,"%bc":"rgba(229, 231, 235, 1)","%br":9999,"%bw":0,"%fc":"rgba(30, 64, 175, 1)","%fs":14,"%lh":1.4,"%bas":"bgcolor","%bgc":"rgba(219, 234, 254, 1)","%bos":"solid","order":2,"fit_width":true,"fit_height":true,"font_family":"Open Sans","font_weight":"600","padding_top":2,"padding_left":10,"padding_right":10,"padding_bottom":2,"vert_alignment":"center","horiz_alignment":"center","four_border_style":false,"collapse_when_hidden":true},"%x":"Text","id":"ai_Qxmttobs","%nm":"Text type-value","%s1":"Text_body_16_"}},"%nm":"Group type-container","%s1":"Group_transparent_"}},"%nm":"Group module-details-meta","%s1":"Group_transparent_"}},"%nm":"Group module-details-info","%s1":"Group_transparent_"},"ai_Qxmttodk":{"%p":{"%h":0,"%l":0,"%t":0,"%w":0,"%z":3,"%bc":"rgba(229, 231, 235, 1)","%bw":0,"%lh":1.5,"%bos":"solid","order":3,"use_gap":true,"fit_width":true,"column_gap":12,"fit_height":true,"margin_top":24,"font_family":"Open Sans","single_width":false,"min_width_css":"0px","single_height":false,"min_height_css":"0px","vert_alignment":"stretch","horiz_alignment":"stretch","container_layout":"row","four_border_style":false,"collapse_when_hidden":true,"container_vert_alignment":"flex-end","container_horiz_alignment":"flex-end"},"%x":"Group","id":"ai_Qxmttobt","%el":{"ai_Qxmttodl":{"%p":{"%3":{"%e":{"0":"Close"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(209, 213, 219, 1)","%br":6,"%bs":"none","%bw":1,"%fc":"rgba(55, 65, 81, 1)","%fs":16,"%ic":"rgba(55, 65, 81, 1)","%lh":1.5,"%bas":"none","%bos":"solid","order":1,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(249, 250, 251, 1)"},"%x":"State"}},"%x":"Button","id":"ai_Qxmttobu","%nm":"Button close-module-details","%s1":"Button_filled_light_primary_"},"ai_Qxmttodm":{"%p":{"%3":{"%e":{"0":"Start Training"},"%x":"TextExpression"},"%h":0,"%l":0,"%t":0,"%w":0,"%z":4,"%bc":"rgba(229, 231, 235, 1)","%br":6,"%bs":"none","%bw":0,"%fc":"rgba(255, 255, 255, 1)","%fs":16,"%ic":"rgba(255, 255, 255, 1)","%lh":1.5,"%bas":"bgcolor","%bgc":"rgba(220, 38, 38, 1)","%bos":"solid","order":2,"fit_width":true,"icon_size":16,"fit_height":true,"margin_top":0,"font_family":"Open Sans","margin_left":0,"padding_top":8,"margin_right":0,"padding_left":16,"margin_bottom":0,"padding_right":16,"min_height_css":"40px","padding_bottom":8,"vert_alignment":"stretch","horiz_alignment":"stretch","four_border_style":false,"collapse_when_hidden":true},"%s":{"0":{"%c":{"%n":{"%x":"Message","%nm":"is_hovered","is_slidable":false},"%x":"ThisElement","is_slidable":false},"%p":{"%bas":"bgcolor","%bgc":"rgba(185, 28, 28, 1)"},"%x":"State"}},"%x":"Button","id":"ai_Qxmttobv","%nm":"Button start-module-details","%s1":"Button_filled_light_primary_"}},"%nm":"Group module-details-buttons","%s1":"Group_transparent_"}},"%nm":"Popup module-details-popup","%s1":"Group_transparent_"}},"%wf":{"13ffd0a5-cbf0-48b1-8023-43598d81ca37":{"%p":{"%ei":"ai_QxmttoaO"},"%x":"ButtonClicked","id":"8ad58366-8636-45f9-a5d2-c8e372681530","actions":{"0":{"%p":{"%ei":"ai_QxmttobO"},"%x":"ShowElement","id":"d9fb0092-2f69-4a61-8532-c30a95183341"}}},"16d00d80-1589-4720-b40c-bfb98c27d265":{"%p":{"%ei":"ai_QxmttoUh"},"%x":"ButtonClicked","id":"a5079bb1-2b57-42da-bad5-9fcde000487f","actions":{"0":{"%p":{"%ei":"ai_QxmttoUm"},"%x":"ShowElement","id":"28fbd821-2871-4ba4-9d23-9ebf89f3aef7"}}},"1838c392-71f9-47ae-ba47-8c446bcc5161":{"%p":{"%ei":"ai_QxmttoVV"},"%x":"ButtonClicked","id":"3b5f3177-543a-4d48-946f-000cab0cbb15","actions":{"0":{"%p":{"%ei":"ai_QxmttoUz"},"%x":"HideElement","id":"dd4a8008-9821-45f0-b6d7-bbdf6d7fa6f9"},"1":{"%p":{"%ei":"ai_QxmttoUm"},"%x":"ShowElement","id":"d2a5b17d-fe1e-4747-90a7-3b9f7bcbe2d8"}}},"2f45251f-97de-441b-aeb3-709a5ba84d0b":{"%p":{"%ei":"ai_Qxmttoad"},"%x":"ButtonClicked","id":"09f70d09-a2cd-4b95-9f88-b2899560f7d8","actions":{"0":{"%p":{"%ds":{"%x":"ElementParent","is_slidable":false},"%ei":"ai_Qxmttobh","%nm":"Display data"},"%x":"DisplayGroupData","id":"e2b5e54b-db28-443f-9c5f-f14110b704c3"},"1":{"%p":{"%ei":"ai_Qxmttobh"},"%x":"ShowElement","id":"a8168720-af48-4971-ad0c-fe2bfdcb59d4"}}},"38049588-becb-41eb-851a-8eeb3af0a6a1":{"%p":{"%ei":"ai_QxmttoUy"},"%x":"ButtonClicked","id":"a7f22ee5-64b2-4582-8d2a-ee0d5488fe6b","actions":{"0":{"%p":{"%ei":"ai_QxmttoUm"},"%x":"HideElement","id":"d76ab4d8-1ebb-4547-a459-13f8692d1054"},"1":{"%p":{"%ei":"ai_QxmttoUz"},"%x":"ShowElement","id":"b8bc55f6-41f2-46b8-85fa-6df3564c850f"}}},"47270536-4821-43cf-8f31-9de14f5b74d0":{"%p":{"%ei":"ai_QxmttoVU"},"%x":"ButtonClicked","id":"86c05a3f-57b6-4cf5-9cd9-71ad60a9ba95","actions":{"0":{"%p":{"%cs":{"0":{"%k":"name_text","%v":{"%e":{"0":{"%n":{"%x":"Message","%nm":"get_data","is_slidable":false},"%p":{"%ei":"ai_QxmttoVF"},"%x":"GetElement","is_slidable":false}},"%x":"TextExpression"},"%ak":{"%x":"Empty"}},"1":{"%k":"role_text","%v":{"%e":{"0":{"%n":{"%x":"Message","%nm":"get_data","is_slidable":false},"%p":{"%ei":"ai_QxmttoVI"},"%x":"GetElement","is_slidable":false}},"%x":"TextExpression"},"%ak":{"%x":"Empty"}}},"%em":{"%n":{"%x":"Message","%nm":"get_data","is_slidable":false},"%p":{"%ei":"ai_QxmttoVP"},"%x":"GetElement","is_slidable":false},"%pw":{"%n":{"%x":"Message","%nm":"get_data","is_slidable":false},"%p":{"%ei":"ai_QxmttoVS"},"%x":"GetElement","is_slidable":false}},"%x":"SignUp","id":"d4fc666e-6c53-4443-95ef-a1a6a38e6c50"},"1":{"%p":{"%ei":"ai_QxmttoUz"},"%x":"HideElement","id":"e43e64da-b409-4d37-9637-39a4bec35de4"}}},"6bbe7fb0-8e9a-4714-9863-3bf324f82c5e":{"%p":{"%ei":"ai_QxmttoUi"},"%x":"ButtonClicked","id":"ada07854-bcf3-44f3-9f09-48b3b556bc7f","actions":{"0":{"%p":{"%ei":"ai_QxmttoUz"},"%x":"ShowElement","id":"4bd14bcc-71d9-461d-af71-e2c5ea2afdcc"}}},"a85d6549-bd10-4e39-8cae-9874592d8374":{"%p":{"%ei":"ai_QxmttoUx"},"%x":"ButtonClicked","id":"cad37f3a-b677-4b59-8640-9ea2033729b8","actions":{"0":{"%p":{"%em":{"%n":{"%x":"Message","%nm":"get_data","is_slidable":false},"%p":{"%ei":"ai_QxmttoUs"},"%x":"GetElement","is_slidable":false},"%pw":{"%n":{"%x":"Message","%nm":"get_data","is_slidable":false},"%p":{"%ei":"ai_QxmttoUv"},"%x":"GetElement","is_slidable":false}},"%x":"LogIn","id":"58601b95-e0c7-48e0-965f-26ee5bc59f62"},"1":{"%p":{"%ei":"ai_QxmttoUm"},"%x":"HideElement","id":"7542d044-f6e6-438f-9d85-23374605374b"}}},"b3db86b6-4ce3-41bf-8fee-b7699a94984a":{"%p":{"%ei":"ai_QxmttobN"},"%x":"ButtonClicked","id":"d91ea50e-dc5f-41e0-8dc9-f46072270bd3","actions":{"0":{"%p":{"%ds":{"%x":"ElementParent","is_slidable":false},"%ei":"ai_Qxmttobh","%nm":"Display data"},"%x":"DisplayGroupData","id":"2afa6e02-58cd-4774-a133-4c04b8282d1a"},"1":{"%p":{"%ei":"ai_Qxmttobh"},"%x":"ShowElement","id":"055aa35d-984e-4513-80c1-cd329db6f252"}}},"bfe279d7-3d37-448a-9138-759f9ca959e3":{"%p":{"%ei":"ai_QxmttoaH"},"%x":"ButtonClicked","id":"fbecf555-6d13-4fff-aca7-058d90016096","actions":{"0":{"%p":{"%ei":"bTHDT"},"%x":"ChangePage","id":"00b8c702-4306-417b-b1ec-84c278cc0f40"}}}},"%p":{"%h":767,"%w":1080,"%t1":{"%e":{"0":"index"},"%x":"TextExpression"},"fixed_width":true,"min_width_px":0,"default_width":1080,"min_height_px":767,"new_responsive":true,"element_version":5,"container_layout":"column","responsive_version":1},"%x":"Page","id":"bTGYf","%nm":"index"}'));
app['_index']['id_to_path'] = Object.assign(app['_index']['id_to_path'] ? app['_index']['id_to_path'] : {}, JSON.parse('{"ai_QxmttoUX":"%p3.bTGbC.%el.ai_QxmttoVW","ai_QxmttoUY":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVX","ai_QxmttoUZ":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVX.%el.ai_QxmttoVY","ai_QxmttoUa":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVX.%el.ai_QxmttoVZ","ai_QxmttoUb":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVa","ai_QxmttoUc":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVa.%el.ai_QxmttoVb","ai_QxmttoUd":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVa.%el.ai_QxmttoVc","ai_QxmttoUe":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVa.%el.ai_QxmttoVd","00b8c702-4306-417b-b1ec-84c278cc0f40":"%p3.bTGbC.%wf.bfe279d7-3d37-448a-9138-759f9ca959e3.actions.0","055aa35d-984e-4513-80c1-cd329db6f252":"%p3.bTGbC.%wf.b3db86b6-4ce3-41bf-8fee-b7699a94984a.actions.1","09f70d09-a2cd-4b95-9f88-b2899560f7d8":"%p3.bTGbC.%wf.2f45251f-97de-441b-aeb3-709a5ba84d0b","28fbd821-2871-4ba4-9d23-9ebf89f3aef7":"%p3.bTGbC.%wf.16d00d80-1589-4720-b40c-bfb98c27d265.actions.0","2afa6e02-58cd-4774-a133-4c04b8282d1a":"%p3.bTGbC.%wf.b3db86b6-4ce3-41bf-8fee-b7699a94984a.actions.0","3b5f3177-543a-4d48-946f-000cab0cbb15":"%p3.bTGbC.%wf.1838c392-71f9-47ae-ba47-8c446bcc5161","4bd14bcc-71d9-461d-af71-e2c5ea2afdcc":"%p3.bTGbC.%wf.6bbe7fb0-8e9a-4714-9863-3bf324f82c5e.actions.0","58601b95-e0c7-48e0-965f-26ee5bc59f62":"%p3.bTGbC.%wf.a85d6549-bd10-4e39-8cae-9874592d8374.actions.0","7542d044-f6e6-438f-9d85-23374605374b":"%p3.bTGbC.%wf.a85d6549-bd10-4e39-8cae-9874592d8374.actions.1","86c05a3f-57b6-4cf5-9cd9-71ad60a9ba95":"%p3.bTGbC.%wf.47270536-4821-43cf-8f31-9de14f5b74d0","8ad58366-8636-45f9-a5d2-c8e372681530":"%p3.bTGbC.%wf.13ffd0a5-cbf0-48b1-8023-43598d81ca37","a5079bb1-2b57-42da-bad5-9fcde000487f":"%p3.bTGbC.%wf.16d00d80-1589-4720-b40c-bfb98c27d265","a7f22ee5-64b2-4582-8d2a-ee0d5488fe6b":"%p3.bTGbC.%wf.38049588-becb-41eb-851a-8eeb3af0a6a1","a8168720-af48-4971-ad0c-fe2bfdcb59d4":"%p3.bTGbC.%wf.2f45251f-97de-441b-aeb3-709a5ba84d0b.actions.1","ada07854-bcf3-44f3-9f09-48b3b556bc7f":"%p3.bTGbC.%wf.6bbe7fb0-8e9a-4714-9863-3bf324f82c5e","ai_QxmttoUf":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVa.%el.ai_QxmttoVe","ai_QxmttoUg":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVa.%el.ai_QxmttoVf","ai_QxmttoUh":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVa.%el.ai_QxmttoVg","ai_QxmttoUi":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVa.%el.ai_QxmttoVh","ai_QxmttoUj":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVa.%el.ai_QxmttoVi","ai_QxmttoUk":"%p3.bTGbC.%el.ai_QxmttoVW.%el.ai_QxmttoVj","ai_QxmttoUm":"%p3.bTGbC.%el.ai_QxmttoVk","ai_QxmttoUo":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVl","ai_QxmttoUp":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVm","ai_QxmttoUq":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVm.%el.ai_QxmttoVn","ai_QxmttoUr":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVm.%el.ai_QxmttoVn.%el.ai_QxmttoVo","ai_QxmttoUs":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVm.%el.ai_QxmttoVn.%el.ai_QxmttoVp","ai_QxmttoUt":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVm.%el.ai_QxmttoVq","ai_QxmttoUu":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVm.%el.ai_QxmttoVq.%el.ai_QxmttoVr","ai_QxmttoUv":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVm.%el.ai_QxmttoVq.%el.ai_QxmttoVs","ai_QxmttoUw":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVm.%el.ai_QxmttoVt","ai_QxmttoUx":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVm.%el.ai_QxmttoVt.%el.ai_QxmttoVu","ai_QxmttoUy":"%p3.bTGbC.%el.ai_QxmttoVk.%el.ai_QxmttoVm.%el.ai_QxmttoVt.%el.ai_QxmttoVv","ai_QxmttoUz":"%p3.bTGbC.%el.ai_QxmttoVw","ai_QxmttoVB":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVx","ai_QxmttoVC":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy","ai_QxmttoVD":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoVz","ai_QxmttoVE":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoVz.%el.ai_QxmttoWA","ai_QxmttoVF":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoVz.%el.ai_QxmttoWB","ai_QxmttoVG":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWC","ai_QxmttoVH":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWC.%el.ai_QxmttoWD","ai_QxmttoVI":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWC.%el.ai_QxmttoWE","ai_QxmttoVN":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWF","ai_QxmttoVO":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWF.%el.ai_QxmttoWG","ai_QxmttoVP":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWF.%el.ai_QxmttoWH","ai_QxmttoVQ":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWI","ai_QxmttoVR":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWI.%el.ai_QxmttoWJ","ai_QxmttoVS":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWI.%el.ai_QxmttoWK","ai_QxmttoVT":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWL","ai_QxmttoVU":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWL.%el.ai_QxmttoWM","ai_QxmttoVV":"%p3.bTGbC.%el.ai_QxmttoVw.%el.ai_QxmttoVy.%el.ai_QxmttoWL.%el.ai_QxmttoWN","ai_QxmttoYZ":"%p3.bTGbC.%el.ai_QxmttoZE","ai_QxmttoYa":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF","ai_QxmttoYb":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZG","ai_QxmttoYc":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZG.%el.ai_QxmttoZH","ai_QxmttoYd":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZG.%el.ai_QxmttoZH.%el.ai_QxmttoZI","ai_QxmttoYe":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZG.%el.ai_QxmttoZH.%el.ai_QxmttoZJ","ai_QxmttoYf":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZG.%el.ai_QxmttoZK","ai_QxmttoYg":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZL","ai_QxmttoYh":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZL.%el.ai_QxmttoZM","ai_QxmttoYi":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZL.%el.ai_QxmttoZN","ai_QxmttoYj":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZL.%el.ai_QxmttoZN.%el.ai_QxmttoZO","ai_QxmttoYk":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZL.%el.ai_QxmttoZN.%el.ai_QxmttoZP","ai_QxmttoYl":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZL.%el.ai_QxmttoZN.%el.ai_QxmttoZQ","ai_QxmttoYm":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZL.%el.ai_QxmttoZN.%el.ai_QxmttoZR","ai_QxmttoYn":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZL.%el.ai_QxmttoZN.%el.ai_QxmttoZS","ai_QxmttoYo":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZT","ai_QxmttoYp":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZT.%el.ai_QxmttoZU","ai_QxmttoYq":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZT.%el.ai_QxmttoZV","ai_QxmttoYr":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZT.%el.ai_QxmttoZW","ai_QxmttoYs":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZT.%el.ai_QxmttoZX","ai_QxmttoYt":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZT.%el.ai_QxmttoZX.%el.ai_QxmttoZY","ai_QxmttoYv":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZT.%el.ai_QxmttoZX.%el.ai_QxmttoZZ","ai_QxmttoYx":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZF.%el.ai_QxmttoZT.%el.ai_QxmttoZX.%el.ai_QxmttoZa","ai_QxmttoYz":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZb","ai_QxmttoZA":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZb.%el.ai_QxmttoZc","ai_QxmttoZB":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZb.%el.ai_QxmttoZd","ai_QxmttoZC":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZb.%el.ai_QxmttoZd.%el.ai_QxmttoZe","ai_QxmttoZD":"%p3.bTGbC.%el.ai_QxmttoZE.%el.ai_QxmttoZb.%el.ai_QxmttoZd.%el.ai_QxmttoZf","ai_QxmttoaB":"%p3.bTGbC.%el.ai_Qxmttobw","ai_QxmttoaC":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttobx","ai_QxmttoaD":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttobx.%el.ai_Qxmttoby","ai_QxmttoaE":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttobx.%el.ai_Qxmttoby.%el.ai_Qxmttobz","ai_QxmttoaF":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttobx.%el.ai_Qxmttoby.%el.ai_Qxmttobz.%el.ai_QxmttocA","ai_QxmttoaG":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttobx.%el.ai_Qxmttoby.%el.ai_Qxmttobz.%el.ai_QxmttocB","ai_QxmttoaH":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttobx.%el.ai_Qxmttoby.%el.ai_Qxmttobz.%el.ai_QxmttocC","ai_QxmttoaI":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttobx.%el.ai_Qxmttoby.%el.ai_QxmttocD","ai_QxmttoaJ":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttobx.%el.ai_Qxmttoby.%el.ai_QxmttocD.%el.ai_QxmttocE","ai_QxmttoaK":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF","ai_QxmttoaL":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocG","ai_QxmttoaM":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocG.%el.ai_QxmttocH","ai_QxmttoaN":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocG.%el.ai_QxmttocI","ai_QxmttoaO":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocG.%el.ai_QxmttocI.%el.ai_QxmttocJ","ai_QxmttoaR":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK","ai_QxmttoaS":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL","ai_QxmttoaT":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocM","ai_QxmttoaU":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocM.%el.ai_QxmttocN","ai_QxmttoaV":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocO","ai_QxmttoaW":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocO.%el.ai_QxmttocP","ai_QxmttoaX":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocO.%el.ai_QxmttocP.%el.ai_QxmttocQ","ai_QxmttoaY":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocO.%el.ai_QxmttocP.%el.ai_QxmttocR","ai_QxmttoaZ":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocO.%el.ai_QxmttocP.%el.ai_QxmttocR.%el.ai_QxmttocS","ai_Qxmttoaa":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocO.%el.ai_QxmttocT","ai_Qxmttoab":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocO.%el.ai_QxmttocU","ai_Qxmttoac":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocO.%el.ai_QxmttocU.%el.ai_QxmttocV","ai_Qxmttoad":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocF.%el.ai_QxmttocK.%el.ai_QxmttocL.%el.ai_QxmttocO.%el.ai_QxmttocW","ai_Qxmttoae":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX","ai_Qxmttoaf":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_QxmttocY","ai_Qxmttoag":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_QxmttocY.%el.ai_QxmttocZ","ai_Qxmttoah":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca","ai_Qxmttoai":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttocb","ai_Qxmttoaj":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttocb.%el.ai_Qxmttocc","ai_Qxmttoak":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttocb.%el.ai_Qxmttocd","ai_Qxmttoal":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttocb.%el.ai_Qxmttocd.%el.ai_Qxmttoce","ai_Qxmttoam":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttocb.%el.ai_Qxmttocd.%el.ai_Qxmttoce.%el.ai_Qxmttocf","ai_Qxmttoan":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttocb.%el.ai_Qxmttocd.%el.ai_Qxmttoce.%el.ai_Qxmttocf.%el.ai_Qxmttocg","ai_Qxmttoao":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttocb.%el.ai_Qxmttocd.%el.ai_Qxmttoce.%el.ai_Qxmttoch","ai_Qxmttoap":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttocb.%el.ai_Qxmttoci","ai_Qxmttoaq":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttocb.%el.ai_Qxmttoci.%el.ai_Qxmttocj","ai_Qxmttoar":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock","ai_Qxmttoas":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocl","ai_Qxmttoat":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocm","ai_Qxmttoau":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocm.%el.ai_Qxmttocn","ai_Qxmttoav":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocm.%el.ai_Qxmttocn.%el.ai_Qxmttoco","ai_Qxmttoaw":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocm.%el.ai_Qxmttocn.%el.ai_Qxmttoco.%el.ai_Qxmttocp","ai_Qxmttoax":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocm.%el.ai_Qxmttocn.%el.ai_Qxmttocq","ai_Qxmttoay":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocm.%el.ai_Qxmttocn.%el.ai_Qxmttocq.%el.ai_Qxmttocr","ai_Qxmttoaz":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocm.%el.ai_Qxmttocn.%el.ai_Qxmttocs","ai_QxmttobA":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocm.%el.ai_Qxmttocn.%el.ai_Qxmttocs.%el.ai_Qxmttoct","ai_QxmttobB":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocu","ai_QxmttobC":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_QxmttocX.%el.ai_Qxmttoca.%el.ai_Qxmttock.%el.ai_Qxmttocu.%el.ai_Qxmttocv","ai_QxmttobD":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw","ai_QxmttobE":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw.%el.ai_Qxmttocx","ai_QxmttobF":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw.%el.ai_Qxmttocx.%el.ai_Qxmttocy","ai_QxmttobG":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw.%el.ai_Qxmttocz","ai_QxmttobH":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw.%el.ai_Qxmttocz.%el.ai_QxmttodA","ai_QxmttobI":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw.%el.ai_Qxmttocz.%el.ai_QxmttodA.%el.ai_QxmttodB","ai_QxmttobJ":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw.%el.ai_Qxmttocz.%el.ai_QxmttodA.%el.ai_QxmttodB.%el.ai_QxmttodC","ai_QxmttobK":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw.%el.ai_Qxmttocz.%el.ai_QxmttodA.%el.ai_QxmttodD","ai_QxmttobL":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw.%el.ai_Qxmttocz.%el.ai_QxmttodA.%el.ai_QxmttodD.%el.ai_QxmttodE","ai_QxmttobM":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw.%el.ai_Qxmttocz.%el.ai_QxmttodA.%el.ai_QxmttodD.%el.ai_QxmttodF","ai_QxmttobN":"%p3.bTGbC.%el.ai_Qxmttobw.%el.ai_Qxmttocw.%el.ai_Qxmttocz.%el.ai_QxmttodA.%el.ai_QxmttodD.%el.ai_QxmttodG","ai_QxmttobO":"%p3.bTGbC.%el.ai_QxmttodH","ai_QxmttobQ":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodI","ai_QxmttobR":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ","ai_QxmttobS":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodK","ai_QxmttobT":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodK.%el.ai_QxmttodL","ai_QxmttobU":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodK.%el.ai_QxmttodM","ai_QxmttobV":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodN","ai_QxmttobW":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodN.%el.ai_QxmttodO","ai_QxmttobX":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodN.%el.ai_QxmttodP","ai_QxmttobY":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodQ","ai_QxmttobZ":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodQ.%el.ai_QxmttodR","ai_Qxmttoba":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodQ.%el.ai_QxmttodS","ai_Qxmttobb":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodT","ai_Qxmttobc":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodT.%el.ai_QxmttodU","ai_Qxmttobd":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodT.%el.ai_QxmttodV","ai_Qxmttobe":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodW","ai_Qxmttobf":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodW.%el.ai_QxmttodX","ai_Qxmttobg":"%p3.bTGbC.%el.ai_QxmttodH.%el.ai_QxmttodJ.%el.ai_QxmttodW.%el.ai_QxmttodY","ai_Qxmttobh":"%p3.bTGbC.%el.ai_QxmttodZ","ai_Qxmttobj":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttoda","ai_Qxmttobk":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodb","ai_Qxmttobl":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodb.%el.ai_Qxmttodc","ai_Qxmttobm":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodb.%el.ai_Qxmttodd","ai_Qxmttobn":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodb.%el.ai_Qxmttodd.%el.ai_Qxmttode","ai_Qxmttobo":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodb.%el.ai_Qxmttodd.%el.ai_Qxmttode.%el.ai_Qxmttodf","ai_Qxmttobp":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodb.%el.ai_Qxmttodd.%el.ai_Qxmttode.%el.ai_Qxmttodg","ai_Qxmttobq":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodb.%el.ai_Qxmttodd.%el.ai_Qxmttodh","ai_Qxmttobr":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodb.%el.ai_Qxmttodd.%el.ai_Qxmttodh.%el.ai_Qxmttodi","ai_Qxmttobs":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodb.%el.ai_Qxmttodd.%el.ai_Qxmttodh.%el.ai_Qxmttodj","ai_Qxmttobt":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodk","ai_Qxmttobu":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodk.%el.ai_Qxmttodl","ai_Qxmttobv":"%p3.bTGbC.%el.ai_QxmttodZ.%el.ai_Qxmttodk.%el.ai_Qxmttodm","b8bc55f6-41f2-46b8-85fa-6df3564c850f":"%p3.bTGbC.%wf.38049588-becb-41eb-851a-8eeb3af0a6a1.actions.1","cad37f3a-b677-4b59-8640-9ea2033729b8":"%p3.bTGbC.%wf.a85d6549-bd10-4e39-8cae-9874592d8374","d2a5b17d-fe1e-4747-90a7-3b9f7bcbe2d8":"%p3.bTGbC.%wf.1838c392-71f9-47ae-ba47-8c446bcc5161.actions.1","d4fc666e-6c53-4443-95ef-a1a6a38e6c50":"%p3.bTGbC.%wf.47270536-4821-43cf-8f31-9de14f5b74d0.actions.0","d76ab4d8-1ebb-4547-a459-13f8692d1054":"%p3.bTGbC.%wf.38049588-becb-41eb-851a-8eeb3af0a6a1.actions.0","d91ea50e-dc5f-41e0-8dc9-f46072270bd3":"%p3.bTGbC.%wf.b3db86b6-4ce3-41bf-8fee-b7699a94984a","d9fb0092-2f69-4a61-8532-c30a95183341":"%p3.bTGbC.%wf.13ffd0a5-cbf0-48b1-8023-43598d81ca37.actions.0","dd4a8008-9821-45f0-b6d7-bbdf6d7fa6f9":"%p3.bTGbC.%wf.1838c392-71f9-47ae-ba47-8c446bcc5161.actions.0","e2b5e54b-db28-443f-9c5f-f14110b704c3":"%p3.bTGbC.%wf.2f45251f-97de-441b-aeb3-709a5ba84d0b.actions.0","e43e64da-b409-4d37-9637-39a4bec35de4":"%p3.bTGbC.%wf.47270536-4821-43cf-8f31-9de14f5b74d0.actions.1","fbecf555-6d13-4fff-aca7-058d90016096":"%p3.bTGbC.%wf.bfe279d7-3d37-448a-9138-759f9ca959e3","bTGYf":"%p3.bTGbC","AAL":"%p3.AAW","AAU":"%p3.AAX","bTHDT":"%p3.bTHDU","bTHDV":"%p3.bTHDZ","bTHDa":"%p3.bTHDb","bTHDf":"%p3.bTHDg"}'));
if (false) {
    app['_index']['responsive'] = Object.assign(app['_index']['responsive'] ? app['_index']['responsive'] : {}, JSON.parse('{}'));
}
window.preloaded['app/page_json:index'] = true;

window._bubble_page_load_data.js_execution_timings.dynamic_js_end_execution = Date.now();
window.display_page(app, 'index');

window._bubble_page_load_data.js_execution_timings.dynamic_js_end_execution = Date.now();
