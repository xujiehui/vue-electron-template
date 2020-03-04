const { printMessage } = require('./utils')

module.exports = {
  helpers: {
    if_eq(v1, v2, options) {
      if (v1 === v2) {
        return options.fn(this)
      }
      return options.inverse(this)
    },
    if_or(v, v1, v2, options) {
      if (v === v1 || v === v2) {
        return options.fn(this)
      }
      return options.inverse(this)
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: true,
      message: 'Project description',
      default:
        'An Electron & Vue.js quick start boilerplate with vue-cli support'
    },
    plugins: {
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Router',
          value: 'router'
        },
        {
          name: 'Vuex',
          value: 'vuex'
        },
        {
          name: 'CSS Pre-processors',
          value: 'cssProcessors'
        },
        {
          name: 'Embedded DB',
          value: 'DB'
        }
      ]
    },
    cssProcessors: {
      when: 'plugins.cssProcessors',
      type: 'list',
      message:
        'Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):',
      choices: [
        {
          name: 'Sass/SCSS (with dart-sass)',
          value: 'dartSass'
        },
        {
          name: 'Sass/SCSS (with node-sass)',
          value: 'nodeSass'
        },
        {
          name: 'Less',
          value: 'less'
        },
        {
          name: 'Stylus',
          value: 'stylus'
        }
      ]
    },
    DB: {
      when: 'plugins.DB',
      type: 'list',
      message: 'Pick a Embedded DB:',
      choices: [
        {
          name: 'nedb',
          value: 'nedb'
        },
        {
          name: 'sqlite3',
          value: 'sqlite3'
        }
      ]
    }
  },
  filters: {
    'src/renderer/router/**/*': 'plugins.router',
    'src/rederer/store/**/*': 'plugins.vuex'
  },
  complete(data, { chalk }) {
    printMessage(data, chalk)
  }
}
