# uv-vis-nir-spectrum

[![NPM version][npm-image]][npm-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

## Installation

`$ npm install --save uv-vis-nir-spectrum`

## Usage

```js
import SPD from 'uv-vis-nir-spectrum';

let analysis = SPD.fromJcamp(jcamp);
```

When loading an UV/VIS/NIR Spectrum from Jcamp we will systamatically add 2 new variables:

- a: containing the absorbance
- t: containing the percent transmittance

In order to calculate those 2 variables we will check the Y label. If it contains
transmittance we calculate absorbance, if it contains absorbance we calculate transmittance.
For transmittance we also check for the presence of a '%' sign.:w

## [API Documentation](https://cheminfo.github.io/uv-vis-nir-spectrum/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/uv-vis-nir-spectrum.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/uv-vis-nir-spectrum
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/uv-vis-nir-spectrum.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cheminfo/uv-vis-nir-spectrum
[download-image]: https://img.shields.io/npm/dm/uv-vis-nir-spectrum.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/uv-vis-nir-spectrum
