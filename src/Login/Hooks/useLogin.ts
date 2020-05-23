import React, { useReducer } from 'react';

import { LoginState } from '../Model/LoginData';
import { DispatchType, ChangeAction, reducer } from '../Logic/reducer';

import { User} from '../Model/User';

/**
 * ログイン画面で利用する状態・イベントハンドラを生成するフック
 */
export const useLogin = () => {

    // 状態を表すデータ構造を定義
    const loginStateInitial: LoginState = {
        user: new User()
    };
    const [state, dispatch] = useReducer(reducer, loginStateInitial);

    // フォーカスが外れたときに発火するイベント(バリデーション)
    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {

        const action: ChangeAction = {
            type: DispatchType.CHANGE,
            payload: {
                fieldName: event.target.name,
                fieldValue: event.target.value
            }
        }

        dispatch(action);
    }

    // Submitイベント(ログイン)

    return {
        state,
        handleBlur
    };
};