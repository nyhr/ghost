import Application from "./application";
import {v4 as uuid} from "uuid";

describe('Testing Application Class', () => {
	let app = new Application(uuid(),"Test",uuid())

	test('Application id test', () => {
		expect(typeof app.id === "string" || typeof app.id === "number").toBeTruthy()
		console.log(app)
		console.log('Value:',app.id)
	})
	test('Application name test', () => {
		expect(typeof app.name === "string").toBeTruthy()
		console.log(app)
		console.log('Value:',app.name)
	})
	test('Application instance_id test', () => {
		expect(typeof app.instance_id === "string" || typeof app.instance_id === "number").toBeTruthy()
		console.log(app)
		console.log('Value:',app.instance_id)
	})
})