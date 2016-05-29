const {app, BrowserWindow, ipcMain} = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/views/html/application.html`)

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.commandLine.appendSwitch("--enable-experimental-web-platform-features");

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
