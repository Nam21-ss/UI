const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
    //frame : false,
    //backgroundColor: "#ff0000", // mau do 
    //alwaysOnTop : true ,  // luon giu vi tri dau
  });
 /* let child = new BrowserWindow({
    parent : win,
    width: 800,
    height: 600,
  });*/
  win.show();
  win.loadFile('chess.html'); // Tải file HTML
  //child.loadFile('child.html')
  win.webContents.openDevTools();
   console.warn("electron is running"); // In ra khi cửa sổ được tạo
}

app.whenReady().then(createWindow)

  

  