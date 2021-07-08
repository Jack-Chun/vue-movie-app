# Vue3 템플릿 with Webpack

## Versions

- [Default](https://github.com/ParkYoungWoong/vue3-webpack-template/tree/master)<br>
- [+ESLint](https://github.com/ParkYoungWoong/vue3-webpack-template/tree/eslint)<br>
- [+ESLint+Vuex](https://github.com/ParkYoungWoong/vue3-webpack-template/tree/vuex)<br>
- [+ESLint+Vuex+VueRouter](https://github.com/ParkYoungWoong/vue3-webpack-template/tree/vue-router)<br>

## Installation

```bash
# Default.
$ npx degit ParkYoungWoong/vue3-webpack-template DIRECTORY_NAME

# With ESLint, Add `#eslint`.
$ npx degit ParkYoungWoong/vue3-webpack-template#eslint DIRECTORY_NAME

# With ESLint + Vuex, Add `#vuex`.
$ npx degit ParkYoungWoong/vue3-webpack-template#vuex DIRECTORY_NAME

# With ESLint + Vuex + VueRouter, Add `#vue-router`.
$ npx degit ParkYoungWoong/vue3-webpack-template#vue-router DIRECTORY_NAME

# Start!
$ cd DIRECTORY_NAME
$ npm i
$ npm run dev
```

## Specs

- Vue3
- Webpack
- SCSS
- Babel
- PostCSS
- Autoprefixer
- ESLint __(+ESLint)__
- Vuex __(+Vuex)__
- Vue Router __(+VueRouter)__

## Packages

__webpack__: 모듈(패키지) 번들러의 핵심 패키지<br>
__webpack-cli__: 터미널에서 Webpack 명령(CLI)을 사용할 수 있음<br>
__webpack-dev-server__: 개발용으로 Live Server를 실행(HMR)<br>

__html-webpack-plugin__: 최초 실행될 HTML 파일(템플릿)을 연결<br>
__copy-webpack-plugin__: 정적 파일(파비콘, 이미지 등)을 제품(`dist`) 폴더로 복사<br>

__sass-loader__: SCSS(Sass) 파일을 로드<br>
__postcss-loader__: PostCSS(Autoprefixer)로 스타일 파일을 처리<br>
__css-loader__: CSS 파일을 로드<br>
__style-loader__: 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
__babel-loader__: JS 파일을 로드<br>
__vue-loader__: Vue 파일을 로드<br>
__vue-style-loader__: Vue 파일의 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
__file-loader__: 지정된 파일(이미지)을 로드<br>

__@babel/core__: ES6 이상의 코드를 ES5 이하 버전으로 변환<br>
__@babel/preset-env__: Babel 지원 스펙을 지정<br>
__@babel/plugin-transform-runtime__: Async/Await 문법 지원<br>

__sass__: SCSS(Sass) 문법을 해석(스타일 전처리기)<br>
__postcss__: Autoprefixer 등의 다양한 스타일 후처리기 패키지<br>
__autoprefixer__: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인<br>

__vue__: Vue.js 프레임워크<br>
__@vue/compiler-sfc__: .vue 파일(SFC, 3버전)을 해석<br>

__eslint__: 정적 코드 분석 도구 __(+ESLint)__<br>
__eslint-plugin-vue__: Vue.js 코드 분석 __(+ESLint)__<br>
__babel-eslint__: ES6 이상의 코드(Babel)를 분석 __(+ESLint)__<br>

__vuex__: 중앙 집중식 저장소 __(+Vuex)__<br>
__vue-router__: 라우터 __(+VueRouter)__<br>

## 주의사항!

- `npm i vue@next`로 설치(3버전)
- `npm i vue-loader@next`로 설치(3버전)
- `npm i -D webpack-dev-server@next`로 설치(webpack-cli 버전(@4^)과 일치)!<br>
- `package.json` 옵션으로 `browserslist` 추가!<br>
- `.postcssrc.js` 생성(PostCSS 구성 옵션)!<br>
- `.babelrc.js` 생성(Babel 구성 옵션)!<br>
- `.eslintrc.js` 생성(ESLint 구성 옵션)! __(+ESLint)__<br>

## ESLint Auto fix on save for VSCode

- 모든 명령 표시(Windows: `Ctrl`+`Shift`+`P` / macOS: `Cmd`+`Shift`+`P`)
- 모든 명령 표시에서 `settings` 검색
- `Preferences: Open Settings (JSON)` 선택
- 오픈된 `settings.json`파일에서 아래 코드 추가 및 저장

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

# Vue3 Movie app

Vue3와 OMDb API를 사용하는 영화 검색 애플리케이션입니다.<br>
[vue3-webpack-template#vue-router](https://github.com/ParkYoungWoong/vue3-webpack-template)에서 프로젝트를 시작합니다.

[Nuxt](https://nuxtjs.org/docs/2.x/get-started/installation) 프로젝트로 이관할 용도의 [Vue2 Movie App](https://github.com/ParkYoungWoong/vue2-movie-app) 프로젝트도 확인하세요!

[DEMO](https://stupefied-hodgkin-d9d350.netlify.app/)

## 🌿 Branches

진행 순서에 맞는 브랜치를 확인하세요.

- [Master](https://github.com/ParkYoungWoong/vue3-movie-app)
- [Default](https://github.com/ParkYoungWoong/vue3-movie-app/tree/default)
- [Netlify CLI](https://github.com/ParkYoungWoong/vue3-movie-app/tree/netlify-cli)
- [Unit Test](https://github.com/ParkYoungWoong/vue3-movie-app/tree/unit-test)
- [E2E Test](https://github.com/ParkYoungWoong/vue3-movie-app/tree/e2e-test)

## 📖 Docs

- [Vue3](https://v3.ko.vuejs.org/guide/introduction.html)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Vuex](https://next.vuex.vuejs.org/)
- [Vue Router](https://next.router.vuejs.org/installation.html)
- [Netlify](https://docs.netlify.com/)
- [Jest](https://jestjs.io/docs/getting-started)
- [Vue test utils](https://next.vue-test-utils.vuejs.org/guide/)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

## 🎯 Goals

- Vuex(Store)로 중앙 집중식 데이터를 처리하고 네임스페이스를 관리할 수 있습니다.
- SPA(Single Page Application)를 위한 Vue Router를 구성해 Hash 기반의 페이지 단위로 개발할 수 있습니다.
- OMDb API를 활용해 실제 영화 정보를 검색하고 출력할 수 있습니다.
- Vue 플러그인을 생성하고 적용할 수 있습니다.
- API Key가 노출되지 않도록 Netlify Functions(서버리스 함수)와 환경 변수(`.env`)를 사용해 백엔드를 구성하고, 로컬에서 테스트할 수 있습니다.
- GitHub 저장소에 Push(업로드)하고 Netlify Hosting으로 CD(지속적인 배포)를 적용할 수 있습니다.
- Jest와 VTU(Vue Test Utils)를 활용해 컴포넌트 단위 테스트를 진행할 수 있습니다.
- Cypress를 활용해 E2E 테스트를 진행할 수 있습니다.

## 💡 Specs

- Vue3
- Vuex
- Vue-Router
- Webpack
- OMDb API
- Netlify
  - Hosting with GitHub(Continuous Deployment)
  - Functions(Serverless)
- Axios
- Lodash
- Tests
  - Jest
  - Vue Test Utils
  - Cypress

## 📦 Packages

> 설치할 각 패키지(모듈)의 설치 버전이 예제와 다른 경우 사용법이 달라질 수 있습니다.<br>
> 모든 패키지를 완성 예제의 [package.json](https://github.com/ParkYoungWoong/vue3-movie-app/blob/master/package.json) 파일에 명시된 버전과 동일하게 설치하는 것을 권장합니다.<br>
> [유뷰트에서 '강의 예제와 모듈(패키지) 버전 일치시키기' 영상 강의 보기](https://www.youtube.com/watch?v=5L9Ugz9eYxI)

- [bootstrap](https://github.com/twbs/bootstrap): 다양하고 강력한 기능을 제공하는 UI 프레임워크입니다.
- [vuex](https://github.com/vuejs/vuex): Vue.js를 위한 중앙 집중식 상태 관리 라이브러리입니다.
- [vue-router](https://github.com/vuejs/vue-router-next): Vue.js SPA를 위한 공식 라우터입니다.
- [axios](https://github.com/axios/axios):  HTTP 클라이언트 라이브러리로, OMDb API를 통해 영화 정보를 요청하기 위해 사용합니다.
- [lodash](https://github.com/lodash/lodash): 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.
- [netlify-cli](https://www.npmjs.com/package/netlify-cli): Netlify 명령을 사용해 로컬에서 프로젝트와 서버리스 함수가 통신하기 위해 사용합니다.
- [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack): Webpack에서 dotenv로 환경 변수를 설정합니다. 
- [jest](https://github.com/facebook/jest): 페이스북에서 만든 테스트 프레임워크로 VTU(Vue Test Utils)에서 권장하는 테스트 러너(실행 환경)입니다.
- [@vue/test-utils](https://github.com/vuejs/vue-test-utils-next): Vue.js 환경에서 단위 테스트를 하기 위한 공식(Official) 라이브러리 입니다.
- [vue-jest](https://github.com/vuejs/vue-test-utils-next): Vue 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일합니다.
- [babel-jest](https://github.com/babel/babel-jest): JS 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일합니다.
- [cypress](https://github.com/cypress-io/cypress): 브라우저 기반으로 쉽고 빠르게 테스트할 수 있는 프론트엔드 전용 테스트 도구입니다.
- [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress): Cypress 테스트 환경을 위한 ESLint 플러그인입니다.

### 패키지 설치 주의사항

Vue 3버전에 대응하는 플러그인들과 최신의 부트스트랩 5버전 패키지를 설치하세요!

- `npm i bootstrap@next`
- `npm i vuex@next`
- `npm i vue-router@4`
- `npm i @vue/test-utils@next`
- `npm i vue-jest@next`

## 🔧 단위 테스트(Unit test)

단위(Unit) 테스트란 데이터(상태), 함수(메소드), 컴포넌트 등의 정의된 프로그램 최소 단위들이 독립적으로 정상 동작하는지 확인하는 것을 말합니다.<br>
이를 통해 프로그램 전체의 신뢰도를 향상하고 코드 리팩터링(Code refactoring)의 부담을 줄일 수 있습니다.

### 구성

`jest.config.js` 파일을 생성하고 다음과 같이 Jest 구성 옵션을 추가합니다.

```js
module.exports = {
  // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목록입니다.
  // 일반적으로 많이 사용되는 모듈의 확장자를 지정합니다.
  moduleFileExtensions: [
    'js',
    'vue'
  ],

  // `~` 같은 경로 별칭을 매핑합니다.
  // E.g. `import HelloWorld from '~/components/HelloWorld.vue';`
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },

  // 일치하는 경로에서는 모듈을 가져오지 않습니다.
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/cypress' // For e2e test
  ],

  // jsdom 환경에 대한 URL을 설정합니다.
  // https://github.com/facebook/jest/issues/6766
  testURL: 'http://localhost/',

  // 정규식과 일치하는 파일의 변환 모듈을 지정합니다.
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  }
}
```

`.eslintrc.js` 파일에 다음과 같이 jest 환경 옵션을 추가합니다.

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  // ...
}
```

## 🔧 E2E 테스트(End to End test)

E2E(End to End) 테스트란 애플리케이션의 처음부터 끝까지의 흐름을 테스트하는 방법입니다.<br>
실제 사용자의 관점에서 테스트를 진행하며, 브라우저, 네트워크, DB 등 실제 환경을 최대한 그대로 활용해 진행합니다.<br>
사용자 환경과 거의 동일하게 테스트를 진행하기 때문에 실제 상황에서 발생할 수 있는 여러 에러를 사전에 발견할 수 있습니다.

### 폴더 구조

- `fixtures`: 테스트에서 활용될 수 있는 정적 데이터 파일들을 보관합니다.
- `integration`: 기본적인 테스트 파일들이 위치합니다.
- `plugins`: 여러 플러그인으로 내부 동작을 활용, 수정 또는 확장할 수 있습니다.
- `support`: 모든 테스트에 직전에 자동으로 포함되는 사전 지원 코드를 작성할 수 있습니다.
- `screenshots`: `cy.screenshot()` 명령으로 생성됩니다.
- `videos`: `cypress run` 스크립트로 생성됩니다.

`cypress.json` 파일에 다음과 같이 구성 옵션을 추가합니다.

```json
{
  "baseUrl": "http://localhost:8080",
  "viewportWidth": 1500,
  "viewportHeight": 800
}
```

`.eslintrc.js` 파일에 다음과 같이 Cypress 환경 옵션을 추가합니다.

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    "cypress/globals": true
  },
  plugins: [
    "cypress"
  ],
  // ...
}
```

## 📚 Refs

### HTML Entities in numeric order

http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/