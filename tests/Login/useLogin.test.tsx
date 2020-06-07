import React from 'react';
import { render } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { Form } from 'Component/Login/View/Form';

describe('useLogin Hook', () => {

    let container;

    // 事前処理・事後処理 Hooksを扱うためのコンポーネントのマウント先を生成・破棄
    beforeEach(() => {

        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {

        document.body.removeChild(container);

        container = null;
    });

    test('半角英数記号を満たすユーザ名を入力すると、バリデーションエラーが空となること。', () => {

        // コンポーネントの描画・操作
        act(() => {
            render(<Form />, container);

            const userName = document.getElementById('userName') as HTMLInputElement;
            // 変更イベント
            userName.value = 'a-pompom';
            Simulate.blur(userName);
        })

        // エラーが空
        const result = container.querySelector('.error');
        expect(result).toBeNull();
    })
    test('半角英数記号を満たすパスワードを入力すると、バリデーションエラーが空となること。', () => {

        act(() => {
            render(<Form />, container);

            const password = document.getElementById('password') as HTMLInputElement;
            password.value = 'strongPassword';
            Simulate.blur(password);
        })

        const result = container.querySelector('.error');
        expect(result).toBeNull();
    });
    test('半角英数記号を満たさないユーザ名を入力すると、エラーメッセージが表示されること。', () => {

        act(() => {
            render(<Form />, container);

            const userName = document.getElementById('userName') as HTMLInputElement;
            userName.value = '山田太郎1234';
            Simulate.blur(userName);
        })

        const result = container.querySelector('.error').textContent;
        expect(result).toBe('ユーザ名は半角英数と_-のみ利用できます。');
    });
    test('半角英数記号を満たさないパスワードを入力すると、エラーメッセージが表示されること。', () => {

        act(() => {
            render(<Form />, container);

            const password = document.getElementById('password') as HTMLInputElement;
            password.value = '山田太郎1234';
            Simulate.blur(password);
        })

        const result = container.querySelector('.error').textContent;
        expect(result).toBe('パスワードは半角英数と_-のみ利用できます。');
    })

    test('半角英数記号を満たさないユーザ名・パスワードを入力すると、それぞれに対してエラーメッセージが表示されること。', () => {

        act(() => {
            render(<Form />, container);

            const userName = document.getElementById('userName') as HTMLInputElement;
            userName.value = 'a!pompom1234';
            const password = document.getElementById('password') as HTMLInputElement;
            password.value = 'strongパスワード';

            Simulate.blur(userName);
            Simulate.blur(password);
        });

        const result = container.querySelectorAll('.error') as NodeList;
        expect(result.length).toBe(2);
    });
});