export default class Store {
	private _id: string | number;
	private _value: any;


	constructor(id: string | number , value: any) {
		this._id = id;
		this._value = value;
	}

    /**
     * Getter id
     * @return {string | number }
     */
	public get id(): string | number  {
		return this._id;
	}

    /**
     * Setter id
     * @param {string | number } value
     */
	public set id(value: string | number ) {
		this._id = value;
	}

    /**
     * Getter value
     * @return {any}
     */
	public get value(): any {
		return this._value;
	}

    /**
     * Setter value
     * @param {any} value
     */
	public set value(value: any) {
		this._value = value;
	}

}