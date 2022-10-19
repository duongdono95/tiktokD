Creating the total new project basement for React Projects.

1.  npm create-react-app ProjectName
2.  git init
3.  git remote add origin https://...
4.  Instal customise Cra for rewrite the webpack:

    -   npm i customize-cra react-app-rewired -D
    -   Creating config-overrides.js in root folder
    -   add :
        const {
        override , useBabelRc
        } = require("customize-cra");

              module.exports = override(
              useBabelRc()
              );

5.  Install Babel plug-in module resolver to shorten the import link & automnatically suggest import code when u start with ~:
    -   npm install --save-dev babel-plugin-module-resolver
    -   creating .babelrc in root folder
    -   add:
        {
        "plugins": [
        ["module-resolver", {
        "alias": {
        "~": "./src"
        }
        }]
        ]
        }
    -   Creating jsconfig.json in root folder
    -   add :
        {
        "compilerOptions": {
        "baseUrl": ".",
        "paths": {
        "~/_": ["src/_"]
        }
        }
        }
6.  Installing Prettier on Vscode
    -   Create .prettierrc in root folder
    -   Add :
        {
        "arrowParens": "always",
        "bracketSameLine": false,
        "bracketSpacing": true,
        "embeddedLanguageFormatting": "auto",
        "htmlWhitespaceSensitivity": "css",
        "insertPragma": false,
        "jsxSingleQuote": false,
        "printWidth": 120,
        "proseWrap": "preserve",
        "quoteProps": "as-needed",
        "requirePragma": false,
        "semi": true,
        "singleQuote": true,
        "tabWidth": 4,
        "trailingComma": "all",
        "useTabs": false,
        "vueIndentScriptAndStyle": false
        }
    -   Create .vscode/settings.json in root folder ( assign vscode to automatically use Prettier to format the code wheneven u save the code)
    -   Add :
        {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
        }
7.  Installing CSS/SASS (SCSS) to create CSS module.

    -   Creating components/GlobalStyles/index.js and GlobalStyles.scss
    -   In index.js :
        import './GlobalStyles.scss';

        function GlobalStyles({ children }) {
        return children;
        }

        export default GlobalStyles;

    -   In src/index.js:
        import GlobalStyles from '~/components/GlobalStyles';
        -> <GlobalStyles> <App /> </GlobalStyles>

-   install sass: npm i -D sass
-   reset css: npm install --save normalize.css
