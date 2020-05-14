# openh

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue.config.js
Don't forget to update public path in vue.config.js file while building for production/deployment

```
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/openhouse/2020/" : "/"
};
