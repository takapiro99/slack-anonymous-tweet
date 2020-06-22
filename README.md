This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 動かす方法

- slack の `incoming webhook` の URL を取得します
- `.env` をルート直下に作り、以下を入れます
  `REACT_APP_SLACK_WEBHOOK='<incoming webhook の URL>'`

* `$ yarn` でパッケージ類を揃えます
* `yarn start` でローカルで試せます
* `yarn run build` で `/build` に出力されます
* firebase hosting などにデプロイしましょう
