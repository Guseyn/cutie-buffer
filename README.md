# cutie-buffer

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>buffer</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-buffer/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/buffer');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>buffer</b> module.

| Async Object  | Async/sync call | Parameters | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `AllocatedBuffer` | `Buffer.alloc` | `size, fill(0), encoding('utf8')` | `buffer` |
| `AllocatedUnsafeBuffer` | `Buffer.allocUnsafe` | `size` | `buffer` |
| `AllocatedUnsafeSlowBuffer` | `Buffer.allocUnsafeSlow` | `size`  | `buffer` |
| `AreBuffersEqual` | `buf1.equals(buf2)` | `buf1, buf2` | `boolean` |
| `ArrayBufferOfBuffer` | `buf.buffer` | `buf` | `ArrayBuffer` |
| `ArrayOfBuffers` | [...buffers](https://github.com/Guseyn/cutie-buffer/blob/master/src/ArrayOfBuffers.js) | `...buffers` | `buffer[]` |
| `BufferAsJSON` | `buf.toJSON` | `buf` | `json` |
| `BufferEntries` | `buf.entries` | `buf` | `iterator [index, byte]` |
| `BufferFromArray` | `Buffer.from` | `array` | `buffer` |
| `BufferFromArrayBuffer` | `Buffer.from` | `arrayBuf, byteOffset(0), length(arrayBuf.length - byteOffset)` | `buffer` |
| `BufferFromBuffer` | `Buffer.from` | `buf` | `buffer` |
| `BufferFromObject` | `Buffer.from` | `object, offsetOrEncoding, length` | `buffer` |
| `BufferFromString` | `Buffer.from` | `string, encoding('utf8')` | `buffer` |
| `BufferKeys` | `buf.keys` | `buf` | `iterator [index]` |
| `BufferLength` | `buf.length` | `buf` | `integer` |
| `BufferValues` | `buf.values` | `buf` | `iterator [byte]` |
| `ByteLengthOfBuffer` | `Buffer.byteLength` | `string, encoding('utf8')` | `integer` |
| `ComparedBuffers` | `source.compare` | `source, target, targetStart(0), targetEnd(target.length), sourceStart(0), sourceEnd(source.length)` | `integer` |
| `ConcatenatedBuffers` | `Buffer.concat` | `buffers, totalLength` | `buffer` |
| `CopiedBuffer` | `source.copy` | `source, target, targetStart(0), sourceStart(0), sourceEnd(source.length)` | `target` |
| `FilledBuffer` | `buf.fill` | `buf, value, offset, end, encoding` | `buffer` |
| `IndexOf` | `buf.indexOf` | `buf, value, byteOffset(0), encoding('utf8')` | `integer` |
| `IsBuffer` | `Buffer.isBuffer` | `obj` | `boolean` |
| `IsEncoding` | `Buffer.isEncoding` | `encoding` | `boolean` |
| `IsIncluded` | `buf.includes` | `buf, value, byteOffset(0), encoding('utf8')` | `boolean` |
| `LastIndexOf` | `buf.lastIndexOf` | `buf, value, byteOffset(buf.length - 1), encoding('utf8')` | `boolean` |
| `ReadDoubleBE` | `buf.readDoubleBE` | `buf, offset, noAssert(false)` | `number` |
| `ReadDoubleLE` | `buf.readDoubleLE` | `buf, offset, noAssert(false)` | `number` |
| `ReadFloatBE` | `buf.readFloatBE` | `buf, offset, noAssert(false)` | `number` |
| `ReadFloatLE` | `buf.readFloatLE` | `buf, offset, noAssert(false)` | `number` |
| `ReadInt16BE` | `buf.readInt16BE` | `buf, offset, noAssert(false)` | `number` |
| `ReadInt16LE` | `buf.readInt16LE` | `buf, offset, noAssert(false)` | `number` |
| `ReadInt32BE` | `buf.readInt32BE` | `buf, offset, noAssert(false)` | `number` |
| `ReadInt32LE` | `buf.readInt32LE` | `buf, offset, noAssert(false)` | `number` |
| `ReadInt8` | `buf.readInt8` | `buf, offset, noAssert(false)` | `number` |
| `ReadIntBE` | `buf.readIntBE` | `buf, offset, noAssert(false)` | `number` |
| `ReadIntLE` | `buf.readIntLE` | `buf, offset, noAssert(false)` | `number` |
| `ReadUInt16BE` | `buf.readUInt16BE` | `buf, offset, noAssert(false)` | `number` |
| `ReadUInt16LE` | `buf.readUInt16LE` | `buf, offset, noAssert(false)` | `number` |
| `ReadUInt32BE` | `buf.readUInt32BE` | `buf, offset, noAssert(false)` | `number` |
| `ReadUInt32LE` | `buf.readUInt32LE` | `buf, offset, noAssert(false)` | `number` |
| `ReadUInt8` | `buf.readUInt8` | `buf, offset, noAssert(false)` | `number` |
| `ReadUIntBE` | `buf.readUIntBE` | `buf, offset, noAssert(false)` | `number` |
| `ReadUIntLE` | `buf.readUIntLE` | `buf, offset, noAssert(false)` | `number` |
| `SlicedBuffer` | `buf.slice` | `buf, start(0), end(buf.length)` | `buffer` |
| `StringFromBuffer` | `buf.toString` | `buf, encoding('utf8'), start(0), end(buf.length)` | `string` |
| `Swapped16Buffer` | `buf.swap16` | `buf` | `buffer` |
| `Swapped32Buffer` | `buf.swap32` | `buf` | `buffer` |
| `Swapped64Buffer` | `buf.swap32` | `buf` | `buffer` |
| `TranscodedBuffer` | `buffer.transcode` | `source, fromEnc, toEnc` |
| `WrittenBuffer` | `buf.write` | `buf, string, offset(0), length(buf.length - offset), encoding('utf8')` | `buffer` |
| `WrittenDoubleBE` | `buf.writeDoubleBE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenDoubleLE` | `buf.writeDoubleLE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenFloatBE` | `buf.writeFloatBE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenFloatLE` | `buf.writeFloatLE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenInt16BE` | `buf.writeInt16BE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenInt16LE` | `buf.writeInt16LE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenInt32BE` | `buf.writeInt32BE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenInt32LE` | `buf.writeInt32LE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenInt8` | `buf.writeInt8` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenIntBE` | `buf.writeIntBE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenIntLE` | `buf.writeIntLE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenUInt16BE` | `buf.writeUInt16BE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenUInt16LE` | `buf.writeUInt16LE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenUInt32BE` | `buf.writeUInt32BE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenUInt32LE` | `buf.writeUInt32LE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenUInt8` | `buf.writeUInt8` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenUIntBE` | `buf.writeUIntBE` | `buf, value, offset, noAssert(false)` | `number` |
| `WrittenUIntLE` | `buf.writeUIntLE` | `buf, value, offset, noAssert(false)` | `number` |

[npm-image]: https://img.shields.io/npm/v/@cuties/buffer.svg
[npm-url]: https://npmjs.org/package/@cuties/buffer
