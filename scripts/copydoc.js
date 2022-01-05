const computerBase = '/Users/yangxiaolu3/Documents/JD/NutUI/';
const vueBaseUrl = `${computerBase}nutui`;
const reactBaseUrl = `${computerBase}nutui-react`;
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
  let configPath = `${fromGit}/src/config.json`;
  let configPkgPath = `${fromGit}/package.json`;
  let nutuiDocsConfigPath = `${computerBase}nutui-docs/src/docs_${type}/config.json`;

  const exists = await fse.pathExists(configPath);
  if (exists) {
    const fromConfig = await fse.readJson(configPath);
    const fromPkgConfig = await fse.readJson(configPkgPath);
    const docsConfig = await fse.readJson(nutuiDocsConfigPath);
    docsConfig.version = fromPkgConfig.version;
    docsConfig.nav = fromConfig.nav;
    docsConfig.docs = fromConfig.docs;
    console.log(fromConfig.docs);
    fse
      .writeJson(nutuiDocsConfigPath, docsConfig, {
        spaces: 2
      })
      .then(() => {
        console.log(`${docsConfig.version} success!`);
      });
    fromConfig.nav.forEach(({ packages }) => {
      packages.forEach((item) => {
        if (item.show) {
          let cmpName = item.name.toLowerCase();
          let docpath = `${fromGit}/src/packages/__VUE/${cmpName}/doc.md`;
          if (type == 'react') {
            docpath = `${fromGit}/src/packages/${cmpName}/doc.md`;
          }
          let doctaropath = `${fromGit}/src/packages/__VUE/${cmpName}/doc.taro.md`;
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
// copy(reactBaseUrl, 'react');
copy(vueBaseUrl, 'vue');
