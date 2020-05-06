type Primitive = string | number;

export default class FieldType {

    private _name: string;
    private _value: Primitive;
    private _errors: string[];

    constructor(name: string, value: Primitive) {
        this._name = name;
        this._value = value;

        this._errors = [];
    }

    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }

    get value(): Primitive {
        return this._value;
    }
    set value(newValue: Primitive) {
        this._value = newValue;
    }

    get errors(): string[] {
        return this._errors;
    }
    set errors(newErrors: string[]) {
        this.errors = newErrors;
    }
}