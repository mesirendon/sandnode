# SandNode

A Node and Babel preset 3 sandbox starter kit

## Getting started

You need to have either `npm` or `yarn` installed.

### Installing

Install the package globally

#### `npm`

```bash
npm i -g sandnode
```

#### `yarn`

```bash
yarn global add sandnode
```

## Structure

```
.
├── index.js
├── package.json
├── node_modules
└── test
    └── 01-initial-test.spec.js
```

* **index.js**: Project entry point
* **package.json**: Project package file
* **node_modules**: Packages installed for this project (pre-populated)
* **test**: Folder with TDD tests, files inside it must have this format `<test-file-name>.spec.js`

## Using

### Tests

You can add as many tests on the `test` folder. To run them you can either run `yarn test` or `npm test`.

### Running

You need to start via `yarn start` or `npm start` in a console. In other console or on your IDE you can edit the `index.js` file. The original console will reload on changes saved.

## Authors

* **Mesi Rendon** - *Initial work* - [mesirendon](https://twitter.com/mesirendon)

## License

This project is licensed under the MIT License.
