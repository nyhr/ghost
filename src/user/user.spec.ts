import User from "./index"
describe('pass', () => {
	let usr = new User(2,'test','1234','test@test.com','Test','Mctesterson',1,1)
	
	test('User id test ',() => {
		expect(typeof usr.id === "string" || typeof usr.id === "number").toBeTruthy()
		console.log(usr)
		console.log("Value:",usr.id)
	})
	test('User username test',() => {
		expect(typeof usr.username === "string").toBeTruthy()
		console.log(usr)
		console.log("Value:",usr.username)
	})
	test('User password test',() => {
		expect(typeof usr.password === "string").toBeTruthy()
		console.log(usr)
		console.log("Value:",usr.password)
	})
	test('User email test',() => {
		expect(usr.email).toMatch(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi)
		console.log(usr)
		console.log("Value:",usr.email)
	})
	test('User first_name test',() => {
		expect(typeof usr.first_name === "string").toBeTruthy()
		console.log(usr)
		console.log("Value:",usr.first_name)
	})
	test('User last_name test',() => {
		expect(typeof usr.last_name === "string").toBeTruthy()
		console.log(usr)
		console.log("Value:",usr.last_name)
	})
	test('User role_id test',() => {
		expect(typeof usr.role_id === "number").toBeTruthy()
		console.log(usr)
		console.log("Value:",usr.role_id)
	})
	test('User company_id test',() => {
		expect(typeof usr.company_id === "number").toBeTruthy()
		console.log(usr)
		console.log("Value:",usr.company_id)
	})
})