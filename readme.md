# React Calculator

This is my calculator for Free Code Camp's [first advanced front end projects](https://www.freecodecamp.com/challenges/build-a-javascript-calculator).

[![React calculator](https://github.com/zsoltime/react-calculator/raw/master/img/preview.jpg)](https://zsolti.co/react/calculator)

Demo is available on my site: [React calculator](https://zsolti.co/react/calculator)

## User Stories

- [x] I can add, subtract, multiply and divide two numbers.
- [x] I can clear the input field with a clear button.
- [x] I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

## Tools Used

- [React.js library](https://facebook.github.io/react/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Webpack module bundler](https://webpack.js.org/)
- [Babel.js compiler](https://babeljs.io/)
- [ESLint linter](http://eslint.org/) with [Airbnb's JS config](https://github.com/airbnb/javascript)
- [Sass](http://sass-lang.com/) preprocessor with [PostCSS' Autoprefixer](https://github.com/postcss/autoprefixer)
- [Karma](https://karma-runner.github.io) test runner
- [Mocha](https://mochajs.org/) test framework
- [Expect](https://github.com/mjackson/expect) assertion library

## Install and Build

You need to have `yarn` [installed](https://yarnpkg.com/lang/en/docs/install/) on your computer, or you can use `npm`.

#### Clone this repo

``` bash
git clone https://github.com/zsoltime/react-calculator.git
cd react-calculator
```

#### Install dependencies

``` bash
yarn
# OR
npm install
```

#### Start dev server with hot reload

It builds HTML, CSS, and JavaScript bundle, starts a dev server and inject new versions of the files that you edited at runtime. Open [http://localhost:3000](http://localhost:3000) to view it in browser.

``` bash
yarn start
# OR
npm start
```

#### Build production bundle

It builds to the `dist` folder. It creates the JavaScript bundle, uglifies JS, minifies CSS - ready to deploy.

``` bash
yarn build
# OR
npm run build
```

#### Run unit tests

Run unit tests with Karma and Mocha

``` bash
yarn test
# OR
npm run test
```
