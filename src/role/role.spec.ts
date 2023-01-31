import Role from "./role"
import {v4 as uuid} from "uuid"

describe('Testing Role Class', () => {
	let role = new Role(uuid(),'Administrator',1)

	test('Role id test', () => {
		expect(typeof role.id === "string" || typeof role.id === "number").toBeTruthy()
		console.log(role)
		console.log('Value:',role.id)
	})
	test('Role name test', () => {
		expect(typeof role.name === "string").toBeTruthy()
		console.log(role)
		console.log('Value:',role.name)
	})
	test('Role company_id test', () => {
		expect(typeof role.company_id === "string" || typeof role.company_id === "number").toBeTruthy()
		console.log(role)
		console.log('Value:',role.company_id)
	})
})