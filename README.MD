vite-plugin-favicons-inject
===========
[![npm][npm]][npm-url]
[![license][license]][license-url]
<a href="https://npmcharts.com/compare/vite-plugin-favicons-inject?minimal=true">
  <img src="https://img.shields.io/npm/dm/vite-plugin-favicons-inject.svg">
</a>
<a href="https://img.shields.io/bundlephobia/minzip/vite-plugin-favicons-inject">
  <img src="https://img.shields.io/bundlephobia/minzip/vite-plugin-favicons-inject">
</a>
<br>

A Vite plugin for creating and injecting favicons during the application build!

Install
-------

```bash
$ npm install vite-plugin-favicons-inject
```

Usage
-----

### As ES6 Module ###

```javascript
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject/esm';

export default defineConfig({
  plugins: [
    ...
    viteFaviconsPlugin('./src/assets/logo.svg'),
    ...
  ]
});
```

### As CommonJs ###

```javascript
const vitePluginFaviconsInject = require('vite-plugin-favicons-inject/cjs');

export default defineConfig({
  plugins: [
    ...
    viteFaviconsPlugin('./src/assets/logo.svg'),
    ...
  ]
});
```


Parameter
---------

 - `source` - path of the logo file. Default: ./src/logo.png
 - `config` (optional) - favions config object. (refer [favicons](https://github.com/itgalaxy/favicons#nodejs) for all available options).

  config - defaults:
  ```json
  {
    path: <vite assets dir> // destination path of generated favicons
  }
  ```
  More information about vite assets directory can be found [here](https://vitejs.dev/config/build-options.html#build-assetsdir)


Compatibility
---------

This plugin was created to easily migrate from [vite-plugin-favicon](https://github.com/josh-hemphill/vite-plugin-favicon) which no longer seems to be working.

Just install, change the import and vite and config. You are good to go!

License
-------

MIT



[npm]: https://img.shields.io/npm/v/vite-plugin-favicons-inject.svg
[npm-url]: https://npmjs.com/package/vite-plugin-favicons-inject
[license]: https://img.shields.io/npm/l/vite-plugin-favicons-inject?no-cache
[license-url]: https://github.com/JohnPremKumar/vite-plugin-favicons-inject/blob/main/LICENCE
