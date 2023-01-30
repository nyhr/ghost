export default class Company {
	
	private _id : string | number;
	private _name: string;


	constructor(id: string | number , name: string) {
		this._id = id;
		this._name = name;
	}


    /**
     * Getter id
     * @return {string }
     */
	public get id(): string | number  {
		return this._id;
	}

    /**
     * Setter id
     * @param {string } value
     */
	public set id(value: string | number ) {
		this._id = value;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

	
}