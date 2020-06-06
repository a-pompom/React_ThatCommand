import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import { Top } from '../../src/Top/View/Top';
import { APIType, setUp, tearDown} from './Data/testMock';
import * as TestData from './Data/testData';

import { mount } from 'enzyme';

describe('useTop Hook', () => {

    let container: HTMLDivElement;

    // 事前処理・事後処理 Hooksを扱うためのコンポーネントのマウント先を生成・破棄
    beforeEach( async () => {

        setUp(APIType.GET_CATEGORY);

        container = document.createElement('div');
        document.body.appendChild(container);
        
        // コンポーネントの描画・操作
        await act( async() => {
            mount(<Top />, {attachTo: container});
        });
    });
    afterEach(() => {

        tearDown(APIType.GET_CATEGORY);

        document.body.removeChild(container);
        container = null;
    });

    test('カテゴリ一覧が描画されること。', async () => {

        const categoryListDOM = container.querySelectorAll(TestData.DOM_SELECTOR.CATEGORY_LIST_ITEM);

        categoryListDOM.forEach((categoryDOM, index) => {
            expect(categoryDOM.textContent).toBe(TestData.CategoryNameList[index]);
        });
    });

    test('検索語句と部分一致するカテゴリ名を持つカテゴリ要素のみが一覧に描画されること。', async () => {

        await act( async () => {
            
            const searchCategoryName = container.querySelector(TestData.DOM_SELECTOR.CATEGORY_SEARCH_NAME) as HTMLInputElement;
            searchCategoryName.value = 'Gi';

            Simulate.change(searchCategoryName);
        });
        
        const categoryListDOM = container.querySelectorAll(TestData.DOM_SELECTOR.CATEGORY_LIST_ITEM);

        // Gitのみに絞り込まれること
        expect(categoryListDOM.length).toBe(1);
        expect(categoryListDOM[0].textContent).toBe('Git');

    });
    test('検索語句と一致するカテゴリが無い場合、カテゴリリストが空となること。', async () => {

        await act( async () => {
            
            // 一致するものが存在しないような語句で検索
            const searchCategoryName = container.querySelector(TestData.DOM_SELECTOR.CATEGORY_SEARCH_NAME) as HTMLInputElement;
            searchCategoryName.value = 'UNKNOWN';

            Simulate.change(searchCategoryName);
        });
        
        const categoryListDOM = container.querySelectorAll(TestData.DOM_SELECTOR.CATEGORY_LIST_ITEM);

        // リストが空となること。
        expect(categoryListDOM.length).toBe(0);
    });
    test('検索語句が空のときは、カテゴリリストが絞り込まれないこと。', async () => {

        await act( async () => {
            
            // 空文字で検索
            const searchCategoryName = container.querySelector(TestData.DOM_SELECTOR.CATEGORY_SEARCH_NAME) as HTMLInputElement;
            searchCategoryName.value = '';

            Simulate.change(searchCategoryName);
        });
        
        const categoryListDOM = container.querySelectorAll(TestData.DOM_SELECTOR.CATEGORY_LIST_ITEM);

        // リストがフィルタされないこと。
        expect(categoryListDOM.length).toBe(TestData.InitialCategoryLength);
    });
});