import { LoginState, LoginFields } from '../Model/LoginData';
import Field from '../../Common/Field';

import { getPropertyByKeyString } from '../../Common/objectHandler';
import * as validator from '../../Common/TextValidator';

/**
 * バリデーション処理
 * 固有のバリデーション処理を汎用的に呼び出せるよう前処理として型を整形
 * 
 * @param state 更新対象の状態
 * @param fieldName バリデーション対象の種類
 * @param fieldValue バリデーション対象値
 */
export const validate = <Value>(state: LoginState, fieldName: string, fieldValue: Value) => {

    // 参照を更新して状態を変更
    const field = getPropertyByKeyString<LoginState>(state, fieldName) as Field<Value>;
    field.value = fieldValue;

    // 入力前に誤クリックでフィールドからフォーカスが外れた際にもメッセージを表示すると
    // 使いにくく感じてしまうので、入力が空のときはエラーメッセージを更新しない
    if (String(field.value) === '') {
        return;
    }

    executeValidate(state, field);
}

/**
 * 各フィールド値の妥当性を検証
 * 
 * @param loginState 更新対象の状態
 * @param field バリデーション対象のフィールド
 */
const executeValidate = <Value>(loginState: LoginState, field: Field<Value>) => {

    // ユーザ名 [桁数チェック, 文字種別チェック]
    if (field.name === LoginFields.UserName) {

        field.errors = [];
        validator.validateMinLength(field, 10);
        validator.validateAlphaNumericText(field);
    }
    if (field.name === LoginFields.Password) {

    }
};