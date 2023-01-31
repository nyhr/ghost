import Plugin from "./plugin";
import {v4 as uuid} from 'uuid'

describe('Testing Plugin Class', () => {
	let plugin = new Plugin(uuid(),'Test Plugin',uuid())

	test('Plugin id test',() => {
		expect(typeof plugin.id === "string" || typeof plugin.id === "number").toBeTruthy()
		console.log(plugin)
		console.log('Value:',plugin.id)
	})
	test('Plugin name test',() => {
		expect(typeof plugin.name === "string").toBeTruthy()
		console.log(plugin)
		console.log('Value:',plugin.name)
	})
	test('Plugin application_id test',() => {
		expect(typeof plugin.application_id === "string" || typeof plugin.application_id === "number").toBeTruthy()
		console.log(plugin)
		console.log('Value:',plugin.application_id)
	})
})