import { app, BrowserWindow, Menu,  Tray } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  const tray = new Tray(path.join(__dirname, "../avatar.jpg"));
  const contextMenu = Menu.buildFromTemplate([
    { "label": "Show App", "click": () => {
      mainWindow.show();
    }},
    { "label": "Quit", "click": () => {
      app.quit();
    }}
]);
  tray.setToolTip("This is my application.");
  tray.setContextMenu(contextMenu);

  mainWindow = new BrowserWindow({
    "height": 600,
    "width": 800,
  });
  mainWindow.webContents.openDevTools();

  mainWindow.loadFile(path.join(__dirname, "../index.html"));

  mainWindow.on("close", (event) => {
    event.preventDefault();
    mainWindow.hide();
    return false;
  });
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
