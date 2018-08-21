const endianness = require('./')
const tape = require('tape')

tape('le -> host', function (t) {
  const buf = new ArrayBuffer(16)
  const view = new DataView(buf)
  const u16 = new Uint16Array(buf)
  const i16 = new Int16Array(buf)
  const u32 = new Uint32Array(buf)
  const i32 = new Int32Array(buf)
  const u64 = new BigUint64Array(buf)
  const i64 = new BigInt64Array(buf)

  view.setUint16(0, 400, true)
  view.setUint16(2, 40, true)

  endianness.LEToHost(u16)
  t.same(u16[0], 400)
  t.same(u16[1], 40)

  view.setInt16(0, -400, true)
  view.setInt16(2, 40, true)

  endianness.LEToHost(i16)
  t.same(i16[0], -400)
  t.same(i16[1], 40)

  view.setUint32(0, 400000, true)
  view.setUint32(4, 400, true)

  endianness.LEToHost(u32)
  t.same(u32[0], 400000)
  t.same(u32[1], 400)

  view.setInt32(0, -400000, true)
  view.setInt32(4, 400, true)

  endianness.LEToHost(i32)
  t.same(i32[0], -400000)
  t.same(i32[1], 400)

  view.setBigUint64(0, 40000000000n, true)
  view.setBigUint64(8, 400n, true)

  endianness.LEToHost(u64)
  t.same(u64[0], 40000000000n)
  t.same(u64[1], 400n)

  view.setBigInt64(0, -40000000000n, true)
  view.setBigInt64(8, 400n, true)

  endianness.LEToHost(i64)
  t.same(i64[0], -40000000000n)
  t.same(i64[1], 400n)

  t.end()
})

tape('be -> host', function (t) {
  const buf = new ArrayBuffer(16)
  const view = new DataView(buf)
  const u16 = new Uint16Array(buf)
  const i16 = new Int16Array(buf)
  const u32 = new Uint32Array(buf)
  const i32 = new Int32Array(buf)
  const u64 = new BigUint64Array(buf)
  const i64 = new BigInt64Array(buf)

  view.setUint16(0, 400, false)
  view.setUint16(2, 40, false)

  endianness.BEToHost(u16)
  t.same(u16[0], 400)
  t.same(u16[1], 40)

  view.setInt16(0, -400, false)
  view.setInt16(2, 40, false)

  endianness.BEToHost(i16)
  t.same(i16[0], -400)
  t.same(i16[1], 40)

  view.setUint32(0, 400000, false)
  view.setUint32(4, 400, false)

  endianness.BEToHost(u32)
  t.same(u32[0], 400000)
  t.same(u32[1], 400)

  view.setInt32(0, -400000, false)
  view.setInt32(4, 400, false)

  endianness.BEToHost(i32)
  t.same(i32[0], -400000)
  t.same(i32[1], 400)

  view.setBigUint64(0, 40000000000n, false)
  view.setBigUint64(8, 400n, false)

  endianness.BEToHost(u64)
  t.same(u64[0], 40000000000n)
  t.same(u64[1], 400n)

  view.setBigInt64(0, -40000000000n, false)
  view.setBigInt64(8, 400n, false)

  endianness.BEToHost(i64)
  t.same(i64[0], -40000000000n)
  t.same(i64[1], 400n)

  t.end()
})
