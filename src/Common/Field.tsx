
/**
 * HTMLの入力エリアを表現する型
 */
export class Field<T> {

    // 名称 name属性ではなく、種類を区別するために利用
    private _name: string;
    // 表示名
    private _label: string;
    // 値
    private _value: T;
    // バリデーションエラー
    private _errors: string[];

    constructor(name: string, value: T, label: string) {
        this._name = name;
        this._value = value;
        this._label = label;

        this._errors = [];
    }

    // getter/setter---------------------------------------------------------------------------
    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
    get label(): string {
        return this._label;
    }

    get value(): T {
        return this._value;
    }
    set value(newValue: T) {
        this._value = newValue;
    }

    get errors(): string[] {
        return this._errors;
    }
    set errors(newErrors: string[]) {
        this._errors = newErrors;
    }
}