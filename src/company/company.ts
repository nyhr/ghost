export default class company {
	
	private _id : number | any;
	public get id() : number | any {
		return this._id;
	}
	public set id(v : number | any) {
		this._id = v;
	}
	
	private _name : string;
	public get name() : string {
		return this._name;
	}
	public set name(v : string) {
		this._name = v;
	}
	
	constructor(id: number | any, name: string) {
		this._id = id
		this._name = name
	}
	
}