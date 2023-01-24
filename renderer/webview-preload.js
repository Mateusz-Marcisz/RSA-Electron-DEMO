const { ipcRenderer } = require('electron');

ipcRenderer.on('get-translation', () => {
  const source = "ggwp";
  const meaning = "zaraza"
  ipcRenderer.sendToHost('return-translation', {source, meaning});
});
