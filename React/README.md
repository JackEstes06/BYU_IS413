# Steps for creating React/Typescript app w/ Vite

- npm create vite@latest frontend
- cd frontend
- npm install
- npm install prettier --save-dev
- create .prettierrc.json
- npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier
- add the following imports to the eslint.config.js file

```
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
```

- update the following sections of the esling.config.js file
  - extends
  ```
  extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier],
  ```
  - plugins
  ```
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    'prettier': prettier,
  },
  ```
  - rules
  ```
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error'
  },
  ```
- Add routing package
  ```
  npm install react-router-dom
  ```
- Add font awesome icons (not necessary)
  ```
  npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
  ```

# .prettierrc.json content

```
{
    "semi": true,
    "singleQuote": true,
    "jsxSingleQuote": false,
    "trailingComma": "es5",
    "printWidth": 80,
    "tabWidth": 2,
    "endOfLine": "auto"
}
```

# Options to auto-update .NET backend on updates

```
dotnet watch run
```

# Publishing

## Backend

```
dotnet publish -c Release -o ./publish
```

## Frontend

```

```
