import { string } from 'yargs';
import company from "./company";
import {v4 as uuid} from "uuid"

describe('testing company class', () => {

	let cmp = new company(uuid(),'Test')

	test('Company id test', () => {
		expect(typeof cmp.id === "number" || typeof cmp.id === "string").toBeTruthy()
		console.log(cmp)
		console.log("Value:", cmp.id)
	})

	test('Company name test', () => {
		expect(typeof cmp.name === "string").toBeTruthy()
		console.log(cmp)
		console.log('Value:', cmp.name)
	})
})