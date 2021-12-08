const computerBase = '/Users/zhuzhida/Documents/github/';
const vueBaseUrl = `${computerBase}nutui-next/src`;
const reactBaseUrl = `${computerBase}nutui-react/src`;
const fse = require('fs-extra');
const copyFile = (from, to) => {
  fse
    .copy(from, to)
    .then(() => {
      console.log('success!>', to);
    })
    .catch((err) => {
      console.error(err);
    });
};
const copy = async (fromGit, type) => {
  let configPath = `${fromGit}/config.json`;
  const exists = await fse.pathExists(configPath);
  if (exists) {
    const configObj = await fse.readJson(configPath);
    configObj.nav.forEach(({ packages }) => {
      packages.forEach((item) => {
        if (item.show) {
          let cmpName = item.name.toLowerCase();
          let docpath = `${fromGit}/packages/__VUE/${cmpName}/doc.md`;
          if (type == 'react') {
            docpath = `${fromGit}/packages/${cmpName}/doc.md`;
          }
          let doctaropath = `${fromGit}/packages/__VUE/${cmpName}/doc.taro.md`;
          fse.readFile(docpath, (err, data) => {
            if (err) {
            } else {
              copyFile(docpath, `${computerBase}nutui-docs/src/docs_${type}/docs/${cmpName}/doc.md`);
            }
          });
          fse.readFile(doctaropath, (err, data) => {
            if (err) {
            } else {
              copyFile(doctaropath, `${computerBase}nutui-docs/src/docs_${type}/docs/${cmpName}/doc.taro.md`);
            }
          });
        }
      });
    });
  }
};
copy(reactBaseUrl, 'react');
copy(vueBaseUrl, 'vue');
