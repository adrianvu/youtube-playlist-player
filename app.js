var electron = require('electron') // http://electron.atom.io/docs/api

var window = null
electron.app.once('ready', function () {
  window = new electron.BrowserWindow({
    width: 800,
    height: 400,
    show: false,
    frame: false,
    resizable:true,
    transparent:false,
  });
  window.loadURL('https://youtube-player.surge.sh/')
  window.once('ready-to-show', function () {
    window.show()
    window.setAlwaysOnTop(true);
  })
})
