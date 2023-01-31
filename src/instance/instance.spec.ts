import Instance from "./instance";
import {v4 as uuid} from "uuid"

describe('Testing Instance class', () => {
	let instance = new Instance(uuid(),uuid(),uuid())
	
	test('Instance id test', () => {
		expect(typeof instance.id === "string" || typeof instance.id === "number").toBeTruthy()
		console.log(instance)
		console.log('Value:',instance.id)
	})
	test('Instance company_id test', () => {
		expect(typeof instance.company_id === "string" || typeof instance.company_id === "number").toBeTruthy()
		console.log(instance)
		console.log('Value:',instance.company_id)
	})
	test('Instance store_id test', () => {
		expect(typeof instance.store_id === "string" || typeof instance.store_id === "number").toBeTruthy()
		console.log(instance)
		console.log('Value:',instance.store_id)
	})
})