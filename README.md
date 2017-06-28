# Super simple plugin example


## Install
```bash
npm i super-simple-serverless-plugin --save-dev
```

## Usage

Then add to `serverless.yml`

```yml
service: customerio-service

plugins:
  - super-simple-serverless-plugin

provider:
  name: aws
  runtime: nodejs6.10

functions:
  helloFunction:
    handler: handler.hello
    events:
      - http:
          path: hello
          method: get
```