import React from 'react';
import FieldType from './FieldType';

// ログイン画面で用いる状態
// userName: 画面から受け取るユーザ名
// password: 画面から受け取るパスワード
export interface LoginState {
    userName: FieldType,
    password: FieldType,
    hasError: boolean
};

export interface LoginHooks {
    loginState: LoginState,
    handleBlur: {(event: React.ChangeEvent<HTMLInputElement>): void}
}