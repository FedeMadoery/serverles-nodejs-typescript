import type {AWS} from '@serverless/typescript';

import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
    service: 'aws-nodejs-typescript',
    frameworkVersion: '2',
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true,
        },
    },
    package: {
        individually: true,
        excludeDevDependencies: true,
    },
    plugins: [
        'serverless-webpack',
        'serverless-offline'
    ],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
        lambdaHashingVersion: '20201221',
    },
    // import the function via paths
    functions: {hello},

    /*layers: {
        nodeModulesLayers: {
            path: './libs/', Create -> libs/nodejs/node14/package.json
            package: {
                patterns: ['**'],
            },
        },
    },*/
};

module.exports = serverlessConfiguration;
