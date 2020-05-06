import FieldType from '../Login/Model/FieldType';

export const validateMinLength = (field: FieldType, minLength: number): void => {
    
    const target = String(field.value).length;
    console.log(field.value);
    console.log(target);

    const ERROR_MESSAGE = `${field.label}は${minLength}文字以上で入力してください。`;

    if (target < minLength) {
        field.errors.push(ERROR_MESSAGE);
    }

    return;
};