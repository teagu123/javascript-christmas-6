import OutputView from './views/OutputView.js'
class App {
  async run() {}
	constructor() {
		this.controller = new Controller()
	}

	async run() {
		OutputView.printStartHello()
		let visitDate = await this.controller.visitDateInputProcess()
		const menu = await this.controller.menuInputProcess()
		OutputView.printResultHello(visitDate)
	}
}
const app = new App()
app.run()

export default App;
export default App
