# convert-endianness

Easily convert Little/Big endian typed arrays to the host endianness or back.

```
npm install convert-endianness
```

The endianness of typed arrays is host specific. This might be an issue
if you want to send them over the wire or persist them to disk. This
module makes it easily to guarantee an endianness.

## Usage

``` js
const endianness = require('convert-endianness')

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
```

## API

#### `endianness.hostToLE(typedArray)`

Converts the endianness of the typed array to little endian.
If your machine is little endian, this is a noop.

#### `endianness.LEToHost(typedArray)`

Converts the endianness of the typed array from little endian to your host endian.
If your machine is little endian, this is a noop.

#### `endianness.hostToBE(typedArray)`

Converts the endianness of the typed array to big endian.
If your machine is big endian, this is a noop.

#### `endianness.BEToHost(typedArray)`

Converts the endianness of the typed array from big endian to your host endian.
If your machine is big endian, this is a noop.

#### `endianness.LE`

True if your machine is little endian.

#### `endianness.BE`

True if your machine is big endian.

## License

MIT
