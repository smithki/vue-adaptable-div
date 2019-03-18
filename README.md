# 🗜Vue AdaptableDiv

[![code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> A Vue `<div>` component that transitionally adapts to the size of its children.

## 💁🏼‍♂️ Introduction

`AdaptableDiv` is a straightforward Vue component that wraps child nodes in a `<div>` and watches them for size changes. The containing element is then sized to match with optional transitions! The core idea is to improve UX for use-cases where content dynamically updates or conditionally hides and shows—such as an [accordian](https://en.wikipedia.org/wiki/Accordion_(GUI)) menu.

> Currently this module only detects and reacts to the _height_ of child nodes. The same behavior for _width_ is coming soon once I have time to troubleshoot a few edge cases related to responsiveness.

## 🔗 Installation

Install via `yarn` (recommended):

```sh
yarn add vue-adaptable-div
```

Install via `npm`:

```sh
npm install vue-adaptable-div
```

## 🛠️ Usage

### Importing

In TypeScript or ES6+:

```ts
import { AdaptableDiv } from 'vue-adaptable-div';
```

In UMD (using `AdaptableDiv` via a `<script>` tag):

```js
const AdaptableDiv = VueAdaptableDiv.AdaptableDiv;
Vue.Component('adaptable-div', AdaptableDiv);
```

### Props

| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| `transitionDuration` | `Number` | `200` | Maps to the CSS property `transition-duration`. Units are in milliseconds. |
| `transitionTimingFunction` | `String` | `"ease"` | Maps to the CSS property `transition-timing-function`. |
| `transitionDelay` | `String` | `0` | Maps to the CSS property `transition-delay`. Units are in milliseconds. |
| `noTransition` | `Boolean` | `false` | If `true`, no CSS transition is applied to size changes. |
