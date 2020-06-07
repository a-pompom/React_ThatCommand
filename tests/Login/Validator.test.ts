import { LoginState } from 'Component/Login/Model/LoginData';
import { User } from 'Component/Login/Model/User';
import { validate } from 'Component/Login/Logic/validator';

describe('Validatorのバリデーション処理動作確認', () => {

    describe('ユーザ名のバリデーション', () => {

        test.each([
            [
                {
                    user: new User()
                },
                
                'user.userName',
                'a-pompom'
            ],
            [
                {
                    user: new User()
                },
                
                'user.userName',
                'john_Doe-123'
            ]
        ])('半角英数と「-_」で構成されるユーザ名はバリデーションエラーとならないこと。', (state: LoginState, fieldName: string, fieldValue: string) => {

            validate(state, fieldName, fieldValue);

            expect(state.user.userName.value).toBe(fieldValue);
            expect(state.user.userName.errors.length).toBe(0);
        });
        test.each([
            [
                {
                    user: new User()
                },
                
                'user.userName',
                '山田太郎'
            ],
            [
                {
                    user: new User()
                },
                
                'user.userName',
                'John Doe !#'
            ]
        ])('半角英数と「-_」以外で構成されるユーザ名はバリデーションエラーとなること。', (state: LoginState, fieldName: string, fieldValue: string) => {

            validate(state, fieldName, fieldValue);

            expect(state.user.userName.value).toBe(fieldValue);
            expect(state.user.userName.errors.length).toBe(1);
            expect(state.user.userName.errors[0]).toBe('ユーザ名は半角英数と_-のみ利用できます。');
        });

    });

    describe('パスワードのバリデーション', () => {

        test.each([
            [
                {
                    user: new User()
                },
                
                'user.password',
                'strong-Password_string'
            ],
            [
                {
                    user: new User()
                },
                
                'user.password',
                'commonPassword2000'
            ]
        ])('半角英数と「-_」で構成されるパスワードはバリデーションエラーとならないこと。', (state: LoginState, fieldName: string, fieldValue: string) => {

            validate(state, fieldName, fieldValue);

            expect(state.user.password.value).toBe(fieldValue);
            expect(state.user.password.errors.length).toBe(0);
        });
        test.each([
            [
                {
                    user: new User()
                },
                
                'user.password',
                '山田太郎'
            ],
            [
                {
                    user: new User()
                },
                
                'user.password',
                'John Doe !#'
            ]
        ])('半角英数と「-_」以外で構成されるユーザ名はバリデーションエラーとなること。', (state: LoginState, fieldName: string, fieldValue: string) => {

            validate(state, fieldName, fieldValue);

            expect(state.user.password.value).toBe(fieldValue);
            expect(state.user.password.errors.length).toBe(1);
            expect(state.user.password.errors[0]).toBe('パスワードは半角英数と_-のみ利用できます。');
        });

    });
});