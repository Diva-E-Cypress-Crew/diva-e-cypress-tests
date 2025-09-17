import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
//@ts-ignore
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify'

import { defineConfig } from 'cypress'
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
    viewportHeight: 800,
    viewportWidth: 1400,
    watchForFileChanges: false,
    defaultCommandTimeout: 15000,
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
    video: false,
    screenshotsFolder: './cypress/snapshots/actual',
    e2e: {
        async setupNodeEvents (on, config) {
            await addCucumberPreprocessorPlugin(on, config)
            await allureWriter(on, config)

            on(
                'file:preprocessor',
                browserify(config, {
                    typescript: require.resolve('typescript')
                })
            )

            return config
        },
        baseUrl: 'https://lsf.htw-berlin.de/qisserver/rds?state=user&type=0&topitem=&breadCrumbSource=&topitem=functions',
        specPattern: '**/*.{feature,features}',
    },
    env: {
        allure: true,
        enableScreenshotDiffPlugin: true
    }
})