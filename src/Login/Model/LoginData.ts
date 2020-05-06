import React from 'react';
import FieldType from './FieldType';

// ログイン画面で用いる状態
// userName: 画面から受け取るユーザ名
// password: 画面から受け取るパスワード
export interface LoginState {
    userName: FieldType,
    password: FieldType,
};

export enum LoginFields {
    UserName = 'userName',
    Password = 'password'
}

export interface LoginHooks {
    state: LoginState,
    handleBlur: {(event: React.ChangeEvent<HTMLInputElement>): void}
}