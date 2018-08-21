# endianess

Easily convert Little/Big endian typed arrays to the host endianess

```
npm install endianess
```

The endianess of typed arrays is host specific. This might be an issue
if you want to send them over the wire or persist them to disk. This
module makes it easily to guarantee an endianess.

## Usage

``` js
const endianess = require('endianess')

const arr = new Int32Array(2)

arr[0] = 10
arr[1] = 1000000

console.log('as host:', arr)

// ensures the endianess of arr is big endian
endianess.hostToBE(arr)

// if your machine is LE (prob is) then array has changed
console.log('as BE:', arr)

// convert it back to the host endianess
endianess.BEToHost(arr)

console.log('as host again:', arr)
```

## API

#### `endianess.hostToLE(typedArray)`

Converts the endianess of the typed array to little endian.
If your machine is little endian, this is a noop.

#### `endianess.LEToHost(typedArray)`

Converts the endianess of the typed array from little endian to your host endian.
If your machine is little endian, this is a noop.

#### `endianess.hostToBE(typedArray)`

Converts the endianess of the typed array to big endian.
If your machine is big endian, this is a noop.

#### `endianess.BEToHost(typedArray)`

Converts the endianess of the typed array from big endian to your host endian.
If your machine is big endian, this is a noop.

#### `endianess.LE`

True if your machine is little endian.

#### `endianess.BE`

True if your machine is big endian.

## License

MIT
