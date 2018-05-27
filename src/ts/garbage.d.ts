// This is necessary so TypeScript finds and can import your .vue files

declare module "*.vue" {
	import Vue from "vue"
	export default Vue
}

declare module "electron-connect"
