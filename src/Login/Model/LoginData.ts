import React from 'react';
import { User } from './User';

// ログイン画面で用いる状態
// userName: 画面から受け取るユーザ名
// password: 画面から受け取るパスワード
export interface LoginState {
    user: User
};


// ログイン画面で利用するフィールド
export enum LoginFields {
    UserName = 'userName',
    Password = 'password'
}

// ログイン画面で利用される状態・イベントハンドラを返すフック
export interface LoginHooks {
    state: LoginState,
    handleBlur: {(event: React.ChangeEvent<HTMLInputElement>): void}
}