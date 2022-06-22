# Developer Contribution Guide

Welcome the community friends to contribute NutUI. Before commit, please read the bellow, make sure your contributions are compliant and able to help the community.


## Issue Report Guide

Make sure follow [Bug report](https://github.com/jdf2e/nutui/blob/next/.github/ISSUE_TEMPLATE/bug_report.md) model if you commit bug report.


## Development Configuration

Make sure your Node.js version is above 12, then clone the repositorie and run the bellow bash scripts:


```bash
$ npm install # or yarn
$ npm run dev
```

## Commit Contributions

NutUI follow [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153), make sure follow this convention strictly when input commit message.

Title Format
type(ComponentName?)：commit message

For example：

docs: fix type in quickstart
build: optimize build speed
fix(Button): incorrect style
feat(Button): add color prop

Allowed Types:

upd
chore
docs
feat
fix
test
refactor
revert
style
releas

## Pull Request Guide

1. Make sure `npm run build`  `npm run build:site` `npm run build:taro:vue` run correctly;
2. Make sure all test cases successfull when relative package `package.json` contains `npm test`;
3. If relative package has test case, please add test case for your commit code also;
4. Commited message must follow [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153);
5. More PR can be commited when you need commit more. We can squash when merge code.
 
 ## Credits

Thanks to the following friends for their contributions to NutUI.

https://github.com/jdf2e/nutui/graphs/contributors