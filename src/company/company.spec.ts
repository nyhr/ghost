import company from "./company";

describe('testing company class', () => {
	test('company name should be test', () => {
		expect(new company(1,'Test').name).toBe('Test')
	})
})