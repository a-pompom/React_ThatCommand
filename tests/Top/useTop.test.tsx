import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import { Top } from '../../src/Top/View/Top';
import { APIType, setUp, tearDown} from './testMock';
import { DOM_SELECTOR } from './testData';

import { mount } from 'enzyme';

describe('useTop Hook', () => {

    let container: HTMLDivElement;

    // 事前処理・事後処理 Hooksを扱うためのコンポーネントのマウント先を生成・破棄
    beforeEach(() => {

        setUp(APIType.GET_CATEGORY);

        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {

        tearDown(APIType.GET_CATEGORY);

        document.body.removeChild(container);

        container = null;
    });

    test('カテゴリ一覧が描画されること。', async () => {

        // コンポーネントの描画・操作
        await act(async () => {
            mount(<Top />, { attachTo: container });
        });

        const categoryListDOM = container.querySelectorAll(DOM_SELECTOR.CATEGORY_LIST_ITEM);
        const expectCategoryNames = ['Git', 'React'];

        categoryListDOM.forEach((categoryDOM, index) => {
            expect(categoryDOM.textContent).toBe(expectCategoryNames[index]);
        });
    });
});