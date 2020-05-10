import Field from './Field';

/**
 * 入力に対して桁数チェックを行う。
 * 
 * @param field バリデーション対象のフィールド
 * @param minLength 必要となる最小の桁数
 */
export const validateMinLength = <Value>(field: Field<Value>, minLength: number): void => {
    
    const target = String(field.value).length;

    const ERROR_MESSAGE = `${field.label}は${minLength}文字以上で入力してください。`;

    if (target < minLength) {
        field.errors.push(ERROR_MESSAGE);
    }

    return;
};

/**
 * 入力値が半角英数と-_のみで構成されているか検証
 * 
 * @param field バリデーション対象
 */
export const validateAlphaNumericText = <Value>(field: Field<Value>): void => {

    const target = String(field.value);

    const ERROR_MESSAGE = `${field.label}は半角英数と_-のみ利用できます。`;

    if (!/[0-9A-Za-z\-\_]+/.test(target)) {
        field.errors.push(ERROR_MESSAGE);
    }

    return;
}