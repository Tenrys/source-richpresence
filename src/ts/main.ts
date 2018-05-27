import { app, BrowserWindow, Menu, Tray } from "electron"
import * as path from "path"
import * as url from "url"

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

let tray: Electron.Tray
let mainWindow: Electron.BrowserWindow

const appIconPath = path.join(__dirname, "./icon.ico")
function showWindow() {
	if (!mainWindow) {
		mainWindow = new BrowserWindow({
			title: "Source Rich Presence",
			icon: appIconPath
		})

		mainWindow.loadURL(path.join("file://", __dirname, "./index.html"))

		mainWindow.webContents.openDevTools({ mode: "bottom" })
	} else {
		mainWindow.focus()
	}
}

app.on("ready", () => {
	// Menu.setApplicationMenu(null)

	tray = new Tray(appIconPath)
	tray.setToolTip("Source Rich Presence - Discord Rich Presence for the Source Engine!")
	tray.setContextMenu(Menu.buildFromTemplate([
		{ label: "Show", click: showWindow },
		{ label: "Quit", role: "quit" } // , click: () => app.quit() }
	]))

	showWindow()
})

app.on("window-all-closed", () => {})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

