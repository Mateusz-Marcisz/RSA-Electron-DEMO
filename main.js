const { app, BrowserWindow, ipcMain } = require("electron");
const NodeRSA = require('node-rsa');
const fs = require("fs");
const { findSourceMap } = require("module");
const key = new NodeRSA({b: 512});
/*createWindow = () => {
  const window = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
    },
  });
  window.loadURL(`file://${__dirname}/renderer/index.html`);


window.webContents.on('did-finish-load', () => {
  window.webContents.send('ping', 'whoooooooh!');
});



};
*/
app.whenReady().then(() => {



  const window = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
    },
  });
  window.loadURL(`file://${__dirname}/renderer/index.html`);


/*
*/


});


//
  ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg) 



   
    const encrypted = key.encrypt(arg, 'base64');
    console.log('encrypted: ', encrypted);
    const decrypted = key.decrypt(encrypted, 'utf8');
    console.log('decrypted: ', decrypted);

  const publicDer = key.exportKey('public');
  const privateDer = key.exportKey('private');
console.log(privateDer);


    event.reply('asynchronous-reply', decrypted, privateDer, publicDer, encrypted)
    //console.log(key);
  })


  ipcMain.on('ss', (event, arg) => {
    console.log(arg) 

    key.importKey(arg, 'private');

    const privateDer = key.exportKey('private');
    console.log(privateDer);
    
    //console.log(key);
  })

  ipcMain.on('sa', (event, arg) => {
    console.log(arg) 

    key.importKey(arg, 'public');

    const publicDer = key.exportKey('public');
    console.log(publicDer);
    
    //console.log(key);
  })

//
ipcMain.on('de', (event, arg) => {
  console.log(arg) 
var encrypted = arg;
  const decrypted = key.decrypt(encrypted, 'utf8');
    console.log('decrypted: ', decrypted);


  
  //console.log(key);
})





// Quit when all windows are closed.
app.on("window-all-closed", () => {
  ipcMain.removeAllListeners("save-note-to-file");

  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});



function rsa(result){
 const encrypted = key.encrypt(result, 'base64');
 console.log('encrypted: ', encrypted);
 const decrypted = key.decrypt(encrypted, 'utf8');
 console.log('decrypted: ', decrypted);



};



