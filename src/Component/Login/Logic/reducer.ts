import { LoginState} from '../Model/LoginData';
import { validate } from './validator';

// イベントの種類
export enum DispatchType {
    CHANGE = 'change',
    SUBMIT = 'submit',

};

// ベースとなるAction
interface Action {
    type: DispatchType
}

// フィールド値の変更 バリデーションを行う
export interface ChangeAction extends Action{
    payload: {
        fieldName: string,
        fieldValue: unknown
    }
}

/**
 * 
 * @param state ログイン画面で利用する状態
 * @param action イベントによる変化を格納したActionオブジェクト
 */
export const reducer = (state: LoginState, action: Action): LoginState => {

    const modState = {...state};

    // 入力値の変更 バリデーションを実行
    if (isChangeAction(action)) {

        type Value = typeof action.payload.fieldValue;
        validate<Value>(modState, action.payload.fieldName, action.payload.fieldValue);

        return modState;
    }

    return modState;
}

/**
 * ActionがChangeによるものか 
 * @param action Action
 */
const isChangeAction = (action: Action): action is ChangeAction => {
    return action.type === DispatchType.CHANGE;
}