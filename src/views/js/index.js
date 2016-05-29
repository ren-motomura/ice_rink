const {ipcRenderer} = require('electron') 

let clickCount = 0
document.getElementById("myButton").addEventListener("click", e => {
  ipcRenderer.send("click-my-button", ++clickCount)
})
