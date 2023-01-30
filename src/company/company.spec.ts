import { string } from 'yargs';
import company from "./company";
import {v4 as uuid} from "uuid"

describe('testing company class', () => {
	
	let cmp = new company(uuid(),'Test')

	test('company name should be "Test"', () => {
		expect(cmp.name).toBe('Test')
		console.log(cmp)
		console.log("Value:", cmp.name)
	})

	test('company id should be type of "string" or "number"', () => {
		expect(typeof cmp.id === "string" || typeof cmp.id === "number").toBeTruthy()
		console.log(cmp)
		console.log('Value:',typeof cmp.id)
	})
})