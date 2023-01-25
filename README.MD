vite-plugin-favicons-inject
===========
[![npm][npm]][npm-url]
[![license][license]][license-url]
<a href="https://npmcharts.com/compare/vite-plugin-favicons-inject?minimal=true">
  <img src="https://img.shields.io/npm/dm/vite-plugin-favicons-inject.svg">
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
// In vite.config.js file

import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

export default defineConfig({
  plugins: [
    ...
    vitePluginFaviconsInject('./src/assets/logo.svg'),
    ...
  ]
});
```

### As CommonJs ###

```javascript
// In vite.config.js file

const vitePluginFaviconsInject = require('vite-plugin-favicons-inject');

export default defineConfig({
  plugins: [
    ...
    vitePluginFaviconsInject('./src/assets/logo.svg'),
    ...
  ]
});
```


Parameter
---------

 - `source` - path of the logo file. Default: ./src/logo.png
 - `config` (optional) - favions config object. (refer [favicons](https://github.com/itgalaxy/favicons#nodejs) for all available options).
 - `pluginConfig` (optional) - Some internal plugin configurations - Default:
    ```javascript
    {
      failGraciously: false, // set it to `true`for failing without errors(only applicable on exceptional cases)
    }
    ```
  Note 'path' option in the config cannot be overriden as it is assigned to vite assetsDir:
  ```javascript
  {
    path: "<vite assets dir>" // destination path of generated favicons based on vite asset dir
  }
  ```
  More information about vite assets directory and how to change it can be found [here](https://vitejs.dev/config/build-options.html#build-assetsdir)

Development Mode
---------
By default this plugin will not generate any files in the development mode since it will affect the HMR performance and overall development experience.

But, the markup will be injected into the HTML files. If you would like to avoid it you can optionally enable this plugin only on production mode like below:

```javascript
process.env.NODE_ENV == "production" ? vitePluginFaviconsInject() : false
```

Note: the above suggestion assume you have a envionment variable called `NODE_ENV` properly configured in your application on the both production and development environments accordingly.

Compatibility
---------

This plugin was created to easily migrate from [vite-plugin-favicon](https://github.com/josh-hemphill/vite-plugin-favicon) which no longer seems to be working.

Just install, change the import and plugin config in vite config file. You are good to go!

License
-------

MIT



[npm]: https://img.shields.io/npm/v/vite-plugin-favicons-inject.svg
[npm-url]: https://npmjs.com/package/vite-plugin-favicons-inject
[license]: https://img.shields.io/npm/l/vite-plugin-favicons-inject?no-cache
[license-url]: https://github.com/JohnPremKumar/vite-plugin-favicons-inject/blob/main/LICENCE
