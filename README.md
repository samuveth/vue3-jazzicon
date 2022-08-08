
[![npm](https://img.shields.io/npm/v/vue-jazzicon.svg)](https://www.npmjs.com/package/vue3-jazzicon)    [![travis](https://img.shields.io/travis/man15h/vue-jazzicon.svg)](https://www.npmjs.com/package/vue3-jazzicon) [![npm](https://img.shields.io/npm/dw/vue-jazzicon.svg)](https://www.npmjs.com/package/vue3-jazzicon) [![npm](https://img.shields.io/npm/l/vue-jazzicon.svg)](https://github.com/man15h/vue3-jazzicon/blob/master/LICENSE)


# vue3-jazzicon

A dead-simple Jazzicon component for Vue 3.

> Say goodbye to boring blocky identicons that look like they came out of the 70s, and replace them with jazzy, colorful collages that more likely came out of the 80's

![Jazzicon](public/identicons.png)


## [Demo](https://pedantic-shannon-c0b649.netlify.app/)


## Install

### NPM

Installing with npm is recommended and it works seamlessly with webpack.

```js
npm install vue3-jazzicon // yarn add vue3-jazzicon
```

## Quick start

### Vite

```js
// vite.config.ts
include: ['color', 'mersenne-twister']
```

### Global

To use in your project, just import jazzicon and install into Vue.

```js
// main.js
import Jazzicon from 'vue3-jazzicon/src/components';

app.component('jazzicon', Jazzicon);
```

```html
<!-- App.vue -->
<template>
    <jazzicon address="0xccf7f134cd45865a5afd5a3a92b969228ce9a3e6" :diameter="100" />
</template>
```

### On demand

```html
<!-- Inside your component -->
<template>
    <jazzicon :seed="10211" :diameter="100" />
</template>

<script>
  import Jazzicon from 'vue3-jazzicon/src/components'

  export default {
    components: {
      [Jazzicon.name]: Jazzicon
    }
  }
</script>
```


## Props

| Name          | Description          | Type         | Default        | Accepted values          |
| ------------- | -------------------- | ------------ | -------------- | ------------------------ |
| `seed`        | Seed for the icon    | `Number`     | Random Number  | Only positive integer    |
| `address`     | Address for the icon | `String`     | -              | Hex string               |
| `diameter`    | Diameter of icon     | `Number`     | 100            | Positive integer         |
| `shape-count` | Number of shapes     | `Number`     | 4              | Positive integer         |
| `colors`      | Colors for icon      | `Array`      | See Below      | Array of Hex color code  |

**Default Colors**

```
[
    '#01888C', // teal
    '#FC7500', // bright orange
    '#034F5D', // dark teal
    '#F73F01', // orangered
    '#FC1960', // magenta
    '#C7144C', // raspberry
    '#F3C100', // goldenrod
    '#1598F2', // lightning blue
    '#2465E1', // sail blue
    '#F19E02' // gold
]
```

## License

[MIT](LICENSE) license.
