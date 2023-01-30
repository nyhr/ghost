export default class User {
	private _id: string | number;
	private _username: string;
	private _password: string;
	private _email: string;
	private _first_name: string | null;
	private _last_name: string | null;
	private _role_id: number;
	private _company_id: number;


	constructor(id: string | number , username: string, password: string, email: string, first_name: string | null , last_name: string | null , role_id: number, company_id: number) {
		this._id = id;
		this._username = username;
		this._password = password;
		this._email = email;
		this._first_name = first_name;
		this._last_name = last_name;
		this._role_id = role_id;
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
     * Getter username
     * @return {string}
     */
	public get username(): string {
		return this._username;
	}

    /**
     * Setter username
     * @param {string} value
     */
	public set username(value: string) {
		this._username = value;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Getter first_name
     * @return {string | null }
     */
	public get first_name(): string | null {
		return this._first_name;
	}

    /**
     * Setter first_name
     * @param {string | null } value
     */
	public set first_name(value: string | null ) {
		this._first_name = value;
	}

    /**
     * Getter last_name
     * @return {string | null }
     */
	public get last_name(): string | null  {
		return this._last_name;
	}

    /**
     * Setter last_name
     * @param {string | null } value
     */
	public set last_name(value: string | null ) {
		this._last_name = value;
	}

    /**
     * Getter role_id
     * @return {number}
     */
	public get role_id(): number {
		return this._role_id;
	}

    /**
     * Setter role_id
     * @param {number} value
     */
	public set role_id(value: number) {
		this._role_id = value;
	}

    /**
     * Getter company_id
     * @return {number}
     */
	public get company_id(): number {
		return this._company_id;
	}

    /**
     * Setter company_id
     * @param {number} value
     */
	public set company_id(value: number) {
		this._company_id = value;
	}

}