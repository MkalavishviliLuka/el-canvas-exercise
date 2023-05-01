const { app, BrowserWindow } = require('electron')

app.whenReady().then(()=>{
    const { screen } = require('electron')
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize

    const myWindow = new BrowserWindow({
        width,
        height,
        autoHideMenuBar: false,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    myWindow.loadFile('index.html')
    

})