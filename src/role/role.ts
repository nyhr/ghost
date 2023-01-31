export default class Role {
	private _id: string | number;
	private _name: string;
	private _company_id: string | number;


	constructor(id: string , name: string, company_id: string | number) {
		this._id = id;
		this._name = name;
		this._company_id = company_id;
	}

    /**
     * Getter id
     * @return {string | number}
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

    /**
     * Getter company_id
     * @return {string | number }
     */
	public get company_id(): string | number  {
		return this._company_id;
	}

    /**
     * Setter company_id
     * @param {string | number} value
     */
	public set company_id(value: string | number ) {
		this._company_id = value;
	}

}