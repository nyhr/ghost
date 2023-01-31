export default class Application {
	private _id: string | number;
	private _name: string;
	private _instance_id: string | number;


	constructor(id: string | number , name: string, instance_id: string | number ) {
		this._id = id;
		this._name = name;
		this._instance_id = instance_id;
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
     * Getter instance_id
     * @return {string | number }
     */
	public get instance_id(): string | number  {
		return this._instance_id;
	}

    /**
     * Setter instance_id
     * @param {string | number } value
     */
	public set instance_id(value: string | number ) {
		this._instance_id = value;
	}
	
}