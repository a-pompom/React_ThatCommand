type Primitive = string | number;

export default class FieldType {

    private _name: string;
    private _label: string;
    private _value: Primitive;
    private _errors: string[];

    constructor(name: string, value: Primitive, label: string) {
        this._name = name;
        this._value = value;
        this._label = label;

        this._errors = [];
    }

    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
    get label(): string {
        return this._label;
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
        this._errors = newErrors;
    }
}