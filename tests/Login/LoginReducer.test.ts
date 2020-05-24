import { ChangeAction, DispatchType, reducer} from '../../src/Login/Logic/reducer';
import { LoginState } from '../../src/Login/Model/LoginData';
import { User } from '../../src/Login/Model/User';

describe('ChangeActionの動作確認', () => {

    test('ユーザ名フィールドに対してChangeActionが発火すること。', () => {

        // Action
        const action: ChangeAction = {
            type: DispatchType.CHANGE,
            payload: {
                fieldName: 'user.userName',
                fieldValue: 'a-pompom'
            }
        };

        // State
        const state: LoginState = {
            user: new User()
        }

        // reducerでStateを更新
        let result = reducer(state, action);

        expect(result.user.userName.value).toBe('a-pompom');
        expect(result.user.userName.errors.length).toBe(0);
    });
    test('ユーザフィールドへ半角英数記号以外の文字列を渡すと、errorsプロパティへエラーメッセージが格納されること。', () => {

        // Action
        const action: ChangeAction = {
            type: DispatchType.CHANGE,
            payload: {
                fieldName: 'user.userName',
                fieldValue: '山田 太郎'
            }
        };

        // State
        const state: LoginState = {
            user: new User()
        }

        // reducerでStateを更新
        let result = reducer(state, action);

        expect(result.user.userName.value).toBe('山田 太郎');
        expect(result.user.userName.errors.length).toBe(1);
        expect(result.user.userName.errors[0]).toBe('ユーザ名は半角英数と_-のみ利用できます。');
    });

    test('パスワードフィールドに対してChangeActionが発火すること。', () => {

        // Action
        const action: ChangeAction = {
            type: DispatchType.CHANGE,
            payload: {
                fieldName: 'user.password',
                fieldValue: 'strongPassword'
            }
        };

        // State
        const state: LoginState = {
            user: new User()
        }

        // reducerでStateを更新
        let result = reducer(state, action);

        expect(result.user.password.value).toBe('strongPassword');
        expect(result.user.password.errors.length).toBe(0);
    });
    test('パスワードフィールドへ半角英数記号以外の文字列を渡すと、errorsプロパティへエラーメッセージが格納されること。', () => {

        // Action
        const action: ChangeAction = {
            type: DispatchType.CHANGE,
            payload: {
                fieldName: 'user.password',
                fieldValue: 'not!Valid$#passW@rD)'
            }
        };

        // State
        const state: LoginState = {
            user: new User()
        }

        // reducerでStateを更新
        let result = reducer(state, action);

        expect(result.user.password.value).toBe('not!Valid$#passW@rD)');
        expect(result.user.password.errors.length).toBe(1);
        expect(result.user.password.errors[0]).toBe('パスワードは半角英数と_-のみ利用できます。');
    });
});