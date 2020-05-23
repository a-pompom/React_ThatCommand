import { Field } from '../../Common/Field';

export class User {

    private _userName: Field<string>;
    private _password: Field<string>;

    constructor() {

        this._userName = new Field('userName', '', 'ユーザ名');
        this._password = new Field('password', '', 'パスワード');
    }

    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}