'use strict';

class AfterDeployPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;

    this.hooks = {
      // this is a lifecycle hook from https://github.com/serverless/serverless/blob/1841189b89bb58d359a1357ce865af6506cc8a1e/lib/plugins/deploy/deploy.js#L27
      'after:deploy:deploy': this.afterDeploy.bind(this)
      // ping slack channel or david for more info on available hooks
    };
  }

  afterDeploy() {
    console.log('this runs after deploy')
    console.log(this.serverless)
  }
}

module.exports = AfterDeployPlugin;