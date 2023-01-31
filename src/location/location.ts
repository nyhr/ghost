export default class Location {
	private _id: string | number;
	private _address: string;
	private _city: string;
	private _state: string;
	private _zipcode: string;
	private _company_id: string | number;


	constructor(id: string | number , address: string, city: string, state: string, zipcode: string, company_id: string | number ) {
		this._id = id;
		this._address = address;
		this._city = city;
		this._state = state;
		this._zipcode = zipcode;
		this._company_id = company_id;
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
     * Getter address
     * @return {string}
     */
	public get address(): string {
		return this._address;
	}

    /**
     * Setter address
     * @param {string} value
     */
	public set address(value: string) {
		this._address = value;
	}

    /**
     * Getter city
     * @return {string}
     */
	public get city(): string {
		return this._city;
	}

    /**
     * Setter city
     * @param {string} value
     */
	public set city(value: string) {
		this._city = value;
	}

    /**
     * Getter state
     * @return {string}
     */
	public get state(): string {
		return this._state;
	}

    /**
     * Setter state
     * @param {string} value
     */
	public set state(value: string) {
		this._state = value;
	}

    /**
     * Getter zipcode
     * @return {string}
     */
	public get zipcode(): string {
		return this._zipcode;
	}

    /**
     * Setter zipcode
     * @param {string} value
     */
	public set zipcode(value: string) {
		this._zipcode = value;
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
     * @param {string | number } value
     */
	public set company_id(value: string | number ) {
		this._company_id = value;
	}

}