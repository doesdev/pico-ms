# pico-ms [![NPM version](https://badge.fury.io/js/pico-ms.svg)](https://npmjs.org/package/pico-ms)   [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)   [![Dependency Status](https://dependencyci.com/github/doesdev/pico-ms/badge)](https://dependencyci.com/github/doesdev/pico-ms)

> Incy wincy millisecond converter for days, hours, minutes, or seconds

## Install

```sh
$ npm install --save pico-ms
```

## Usage

```js
const picoMs = require('pico-ms')
picoMs('3600s') // 3600000
picoMs('3600 sec') // 3600000
picoMs('3600 seconds') // 3600000
picoMs('60m') // 3600000
picoMs('60 mins') // 3600000
picoMs('60 minutes') // 3600000
picoMs('1h') // 3600000
picoMs('1hr') // 3600000
picoMs('1 hour') // 3600000
picoMs(`${1 / 24} days`) // 3600000
picoMs(3600000) // 3600000
picoMs('3600000') // 3600000
```

## API

#### Takes human readable days, hour, minute, or second string and returns milliseconds

#### `const picoMs = require('pico-ms')(*hms|ms)`

- **hms|ms** *[string|integer - required]* (ex. `'3600s'`, `'60 minutes'`, `'1 hr'`, `3600000`)

## License

MIT © [Andrew Carpenter](https://github.com/doesdev)
