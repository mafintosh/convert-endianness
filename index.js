const LE = (new Uint8Array(new Uint16Array([255]).buffer))[0] === 0xff
const BE = !LE

exports.LE = LE
exports.BE = BE

exports.LEToHost = LE ? noop : otherToHost
exports.hostToLE = LE ? noop : hostToOther

exports.LEToHost16 = LE ? noop : otherToHost16
exports.hostToLE16 = LE ? noop : hostToOther16

exports.LEToHost32 = LE ? noop : otherToHost32
exports.hostToLE32 = LE ? noop : hostToOther32

exports.LEToHost64 = LE ? noop : otherToHost64
exports.hostToLE64 = LE ? noop : hostToOther64

exports.BEToHost = BE ? noop : otherToHost
exports.hostToBE = BE ? noop : hostToOther

exports.BEToHost16 = BE ? noop : otherToHost16
exports.hostToBE16 = BE ? noop : hostToOther16

exports.BEToHost32 = BE ? noop : otherToHost32
exports.hostToBE32 = BE ? noop : hostToOther32

exports.BEToHost64 = BE ? noop : otherToHost64
exports.hostToBE64 = BE ? noop : hostToOther64

function otherToHost (arr, n) {
  if (!n) n = 8 * arr.BYTES_PER_ELEMENT

  switch (n) {
    case 16: return otherToHost16(arr)
    case 32: return otherToHost32(arr)
    case 64: return otherToHost64(arr)
  }

  throw new Error('Number of bits must be 16, 32 or 64')
}

function hostToOther (arr, n) {
  if (!n) n = 8 * arr.BYTES_PER_ELEMENT

  switch (n) {
    case 16: return hostToOther16(arr)
    case 32: return hostToOther32(arr)
    case 64: return hostToOther64(arr)
  }

  throw new Error('Number of bits must be 16, 32 or 64')
}

function otherToHost16 (arr) {
  const view = new DataView(arr.buffer, arr.byteOffset)
  const host = new Uint16Array(arr.buffer, arr.byteOffset, arr.byteLength / 2)

  for (var i = 0; i < host.length; i++) {
    host[i] = view.getUint16(2 * i, BE)
  }
}

function hostToOther16 (arr) {
  const view = new DataView(arr.buffer, arr.byteOffset)
  const host = new Uint16Array(arr.buffer, arr.byteOffset, arr.byteLength / 2)

  for (var i = 0; i < host.length; i++) {
    view.setUint16(2 * i, host[i], BE)
  }
}

function otherToHost32 (arr) {
  const view = new DataView(arr.buffer, arr.byteOffset)
  const host = new Uint32Array(arr.buffer, arr.byteOffset, arr.byteLength / 4)

  for (var i = 0; i < host.length; i++) {
    host[i] = view.getUint32(4 * i, BE)
  }
}

function hostToOther32 (arr) {
  const view = new DataView(arr.buffer, arr.byteOffset)
  const host = new Uint32Array(arr.buffer, arr.byteOffset, arr.byteLength / 4)

  for (var i = 0; i < host.length; i++) {
    view.setUint32(4 * i, host[i], BE)
  }
}

function otherToHost64 (arr) {
  const view = new DataView(arr.buffer, arr.byteOffset)
  const host = new BigUint64Array(arr.buffer, arr.byteOffset, arr.byteLength / 8)

  for (var i = 0; i < host.length; i++) {
    host[i] = view.getBigUint64(8 * i, BE)
  }
}

function hostToOther64 (arr) {
  const view = new DataView(arr.buffer, arr.byteOffset)
  const host = new BigUint64Array(arr.buffer, arr.byteOffset, arr.byteLength / 8)

  for (var i = 0; i < host.length; i++) {
    view.setBigUint64(8 * i, host[i], BE)
  }
}

function noop (arr) {}
