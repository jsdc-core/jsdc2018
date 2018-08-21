# jsdc2017

### Build Status
[![Build Status](https://travis-ci.org/jsdc-core/jsdc2017.svg?branch=develop)](https://travis-ci.org/jsdc-core/jsdc2017)

### :: step 1

`npm start`

### :: step2

`open http://localhost:3000/`

## Deployment 兩種方式

1. Local 直接更新 gh-pages
 - `npm start ` 沒問題後再下 `npm run deploy`

> 無法 Deploy ，先下 `chmod +x ./deploy.sh` ，若 `git status` 有修改記錄先 commit 到 develop，再下 `npm run deploy`

2. Code 更新到 develop branch ， Travis CI 會幫忙 Deploy 到 gh-pages
