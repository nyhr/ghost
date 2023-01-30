import User from "./index"
describe('pass', () => {
	let usr = new User(1,'test','1234','test@test.com','Test','Mctesterson',1,1)
	
	test('User id: 1',() => {
		expect(usr.id).toBe(1)
		console.log(usr)
		console.log("Value:",usr.id)
	})
	test('User username: test',() => {
		expect(usr.username).toBe("test")
		console.log(usr)
		console.log("Value:",usr.username)
	})
	test('User password: 1234',() => {
		expect(usr.password).toBe('1234')
		console.log(usr)
		console.log("Value:",usr.password)
	})
	test('User email: test@test.com',() => {
		expect(usr.email).toBe('test@test.com')
		console.log(usr)
		console.log("Value:",usr.email)
	})
	test('User first_name: Test',() => {
		expect(usr.first_name).toBe('Test')
		console.log(usr)
		console.log("Value:",usr.first_name)
	})
	test('User last_name: Mctesterson',() => {
		expect(usr.last_name).toBe('Mctesterson')
		console.log(usr)
		console.log("Value:",usr.last_name)
	})
	test('User role_id',() => {
		expect(usr.role_id).toBe(1)
		console.log(usr)
		console.log("Value:",usr.role_id)
	})
	test('User company_id',() => {
		expect(usr.company_id).toBe(1)
		console.log(usr)
		console.log("Value:",usr.company_id)
	})
})