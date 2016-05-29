const {ipcMain} = require('electron')

ipcMain.on('click-my-button', (event, arg) => {
  console.log(arg)
})
