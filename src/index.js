const favicons = require('favicons');
const fs = require('fs');
const path = require('path');

const callback = (error, response) => new Promise((resolve, reject) => {
  if (error) {
    reject(error);
  }
  resolve(response);
});

const writeFile = (filePath, fileContent) => new Promise((resolve, reject) => {
  fs.writeFile(filePath, fileContent, (writeFileError) => {
    if (writeFileError) {
      reject(writeFileError);
    }
    resolve(filePath);
  });
});

const vitePluginFaviconsInject = (inputSource, inputConfig = {}) => {
  let response = false;
  let isProcessed = false;
  let viteConfig = false;
  let source = inputSource;
  let config = inputConfig;
  return {
    name: 'vite-plugin-favicon-inject',
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
      // override default source if none set
      if (!source || source === '') {
        source = path.join(viteConfig.root, 'src', 'logo.png');
      }
      // making sure that config is a object
      if (!config || (config && config.constructor.name !== 'Object')) {
        config = {};
      }

      // override default path is none set
      const opPath = path.join(
        viteConfig.base,
        viteConfig.build.assetsDir,
      );
      config.path = opPath;
    },
    transformIndexHtml(html) {
      const flowPromise = !isProcessed
        ? favicons.favicons(source, config, callback)
        : new Promise((resolve) => (resolve(response)));
      return flowPromise.then((res) => {
        response = res;
        isProcessed = true;
        return html.replace('</head>', `${res.html.join('')}</head>`);
      }).catch((err) => {
        throw err;
      });
    },
    closeBundle() {
      const fileCreationPromise = [];
      const { files } = response;
      const { images } = response;
      const originalPath = path.join(
        viteConfig.root,
        viteConfig.build.outDir,
        viteConfig.build.assetsDir,
      );
      files.forEach((eachFile) => {
        fileCreationPromise.push(writeFile(`${originalPath}/${eachFile.name}`, eachFile.contents));
      });
      images.forEach((eachImage) => {
        fileCreationPromise.push(writeFile(`${originalPath}/${eachImage.name}`, eachImage.contents));
      });
      return Promise.all(fileCreationPromise);
    },
  };
};

export default vitePluginFaviconsInject;
