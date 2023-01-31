export default class Plugin {
	private _id: string | number;
	private _name: string;
	private _application_id: string | number;


	constructor(id: string | number , name: string, application_id: string | number ) {
		this._id = id;
		this._name = name;
		this._application_id = application_id;
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
     * Getter application_id
     * @return {string | number }
     */
	public get application_id(): string | number  {
		return this._application_id;
	}

    /**
     * Setter application_id
     * @param {string | number } value
     */
	public set application_id(value: string | number ) {
		this._application_id = value;
	}

}