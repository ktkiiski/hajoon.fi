import { app } from 'broilerkit';

/**
 * Configuration for the web app.
 */
export default app({
    /**
     * The name of the web app. Should include only
     * letters, number, and dashes.
     */
    name: 'hajoon',
    /**
     * The AWS region to which the web app will be deployed.
     */
    region: 'us-east-1',
    /**
     * The folder containing all the source files for your app.
     * Other paths in this configuration are relative to this.
     */
    sourceDir: 'src',
    /**
     * Icon file for your app that is used to generate favicons and mobile-compatible
     * icons. The path is relative to the source directory.
     */
    iconFile: 'images/hajoon.png',
    // Available stages and their configuration
    stages: {
        /**
         * The primary public production version of the app.
         */
        prod: {
            // Root URL where the HTML pages are hosted
            siteRoot: 'https://www.hajoon.fi',
            // Root URL where all the indefinitely-cached static assets are hosted
            assetsRoot: 'https://www.hajoon.fi/static',
        },
        /**
         * The locally run development server.
         * NOTE: If you change them, you also must ensure, that your /etc/hosts
         * file defines the corresponding aliases for 127.0.0.1
         */
        local: {
            // Root URL where the HTML pages are hosted
            siteRoot: 'http://localhost:1113',
            // Root URL where all the indefinitely-cached static assets are hosted
            assetsRoot: 'http://localhost:1113/static',
        },
    },
    // Web page configuration
    pages: [{
        file: 'index.pug',
        scripts: ['index.ts'],
    }],
});
