export default class Instance {
	private _id: string | number;
	private _company_id: string | number;
	private _store_id: string | number;

	constructor(id: string | number , company_id: string | number , store_id: string | number ) {
		this._id = id;
		this._company_id = company_id;
		this._store_id = store_id;
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
     * Getter company_id
     * @return {string | number }
     */
	public get company_id(): string | number {
		return this._company_id;
	}

    /**
     * Setter company_id
     * @param {string | number } value
     */
	public set company_id(value: string | number ) {
		this._company_id = value;
	}

    /**
     * Getter store_id
     * @return {string | number }
     */
	public get store_id(): string | number  {
		return this._store_id;
	}

    /**
     * Setter store_id
     * @param {string | number } value
     */
	public set store_id(value: string | number ) {
		this._store_id = value;
	}

}