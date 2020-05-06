import React, { useState } from 'react';

import { LoginState } from '../Model/LoginData';
import FieldType from '../Model/FieldType';

export const useLogin = () => {

    // 状態を表すデータ構造を定義
    const loginStateInitial: LoginState = {
        userName: new FieldType('', ''),
        password: new FieldType('', ''),
        hasError: false
    };

    const [loginState, setLoginState] = useState(loginStateInitial);


    // フォーカスが外れたときに発火するイベント(バリデーション)
    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
    }


    // Submitイベント(ログイン)

    return {
        loginState,
        handleBlur
    };
};