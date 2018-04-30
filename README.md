# Dialogflow in Ionic3
Example of a bot connected to Dialogflow (API.ai) through official client https://github.com/dialogflow/dialogflow-javascript-client

## Demo
<img src="https://media.giphy.com/media/QmKNsPkPiaItNdUtni/giphy.gif">

## Retrieve Access Token
From your Dialogflow workplace, go to `settings` -> `general`

Then copy this value

<img src="https://image.ibb.co/mtoF8c/Dialogflow_1.png">

in `accessToken: string = '[YOUR_ACCESS_TOKEN]';` (`home.ts`)

## Issues
### index.js.map
The `Missing index.js.map` error can be solved by adding an empty file `index.js.map` in `/home/yuri/GitHub/ionic3-dialogflow-client-example/node_modules/api-ai-javascript`
