import * as validator from '../../src/Common/TextValidator';

import { Field } from '../../src/Common/Field';

describe('テキストのバリデーションロジック', () => {

    test.each([
        [new Field('', '10length..', ''), '10文字丁度'],
        [new Field('', '10lengthstr', ''), '11文字'],
        [new Field('', '10文字の日本語文字', ''), '10文字の日本語文字']

    ])('最小桁数を満たしていれば、エラーとならないこと。', (field: Field<any>, _) => {

        const minLength = 10;
        validator.validateMinLength(field, minLength);

        expect(field.errors.length).toBe(0);
    });
    test.each([
        [new Field('', '', '文字'), '0文字'],
        [new Field('', '7length', '文字'), '7文字'],
        [new Field('', '9lengthst', '文字'), '9文字']

    ])('文字数が指定桁数に満たない場合エラーとなること。', (field: Field<any>, _) => {

        const minLength = 10;
        validator.validateMinLength(field, minLength);

        expect(field.errors.length).toBe(1);
        expect(field.errors[0]).toBe(`${field.label}は${minLength}文字以上で入力してください。`);
    });

});