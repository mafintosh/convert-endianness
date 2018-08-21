const endianness = require('./')

const arr = new Int32Array(2)

arr[0] = 10
arr[1] = 1000000

console.log('as host:', arr)

// ensures the endianness of arr is big endian
endianness.hostToBE(arr)

// if your machine is LE (prob is) then array has changed
console.log('as BE:', arr)

// convert it back to the host endianness
endianness.BEToHost(arr)

console.log('as host again:', arr)
