import React, { useState, useReducer } from 'react';

import { LoginState, LoginFields } from '../Model/LoginData';
import FieldType from '../Model/FieldType';

import { Validator, ValidatorFields} from '../../Common/ValidationTypes';
import { validateMinLength } from '../../Common/TextValidator';
import { validate } from '@babel/types';

// TODO doValidateは別のロジック用ファイルに切り出すべき
const doValidate = (loginState: LoginState, fieldNameList: string[]) => {

    const validators: ValidatorFields = {};

    fieldNameList.forEach((fieldName) => {
        if (fieldName === LoginFields.UserName) {

            loginState.userName.errors = [];
            validateMinLength(loginState.userName, 10);

        }
        if (fieldName === LoginFields.Password) {

        }
    })

    return validators;
};

const reducer = (state: LoginState, action): LoginState => {
    const modState = {...state};
    doValidate(modState, ['userName']);

    return modState;
}

export const useLogin = () => {

    // 状態を表すデータ構造を定義
    const loginStateInitial: LoginState = {
        userName: new FieldType('userName', '', 'ユーザ名'),
        password: new FieldType('password', '', 'パスワード'),
    };
    const [state, dispatch] = useReducer(reducer, loginStateInitial);

    // フォーカスが外れたときに発火するイベント(バリデーション)
    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {

        const fieldName = event.target.name;
        dispatch({type: 'test'});
    }

    // Submitイベント(ログイン)

    return {
        state,
        handleBlur
    };

};