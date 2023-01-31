import Location from "./location";
import {v4 as uuid} from "uuid"

describe('Testing Location Class', () => {
	let loc = new Location(uuid(),'1234 Test Lane','Downers Grove','IL','60516',uuid())
	test('Location id test', () => {
		expect(typeof loc.id === "string" || typeof loc.id === "number").toBeTruthy()
		console.log(loc)
		console.log('Value:',loc.id)
	})
	test('Location address test', () => {
		expect(typeof loc.address === "string").toBeTruthy()
		console.log(loc)
		console.log('Value:',loc.address)
	})
	test('Location city test', () => {
		expect(typeof loc.city === "string").toBeTruthy()
		console.log(loc)
		console.log('Value:',loc.city)
	})
	test('Location state test', () => {
		expect(typeof loc.state === "string").toBeTruthy()
		console.log(loc)
		console.log('Value:',loc.state)
	})
	test('Location zipcode test', () => {
		expect(typeof loc.zipcode === "string").toBeTruthy()
		console.log(loc)
		console.log('Value:',loc.zipcode)
	})
	test('Location company_id test', () => {
		expect(typeof loc.company_id === "string" || typeof loc.id === "number").toBeTruthy()
		console.log(loc)
		console.log('Value:',loc.company_id)
	})
})