const path = require('path')
const fs = require('fs')
const { spawn } = require('child_process')

function lintMsg(data) {
  return !data.autoInstall &&
    data.lint &&
    lintStyles.indexOf(data.lintConfig) !== -1
    ? 'npm run lint -- --fix (or for yarn: yarn run lint --fix)\n  '
    : ''
}

function installMsg(data) {
  return !data.autoInstall ? 'npm install (or if using yarn: yarn)\n  ' : ''
}

exports.printMessage = function printMessage(data, { green, yellow }) {
  const message = `
# ${green('Project initialization finished!')}
# ========================

To get started:

  ${yellow(
    `${data.inPlace ? '' : `cd ${data.destDirName}\n  `}${installMsg(
      data
    )}${lintMsg(data)}npm run dev`
  )}
  
Documentation can be found at https://github.com/xujiehui/vue-electron-template
`
  console.log(message)
}
