import Store from "./store";
import {v4 as uuid} from "uuid"

describe('Testing Store Class', () => {
	let store =  new Store(uuid(), ["test","items"])
	test('Store id test', () => {
		expect(typeof store.id === "string" || typeof store.id === "number").toBeTruthy()
		console.log(store)
		console.log("Value:",store.id)
	})
	test('Store value test', () => {
		expect(typeof store.value !== undefined).toBeTruthy()
		console.log(store)
		console.log("Value:",store.value)
	})
})