import { reducer } from '../../src/Top/Logic/reducer';
import * as Action from '../../src/Top/Model/TopAction';

import * as TestData from './Data/testData';

describe('Top画面のreducerのUT', () => {

    describe('初期描画処理', () => {

        test('初期描画アクションでカテゴリ一覧が取得できること。', () => {

            const action: Action.InitAction = {
                type: Action.DispatchType.INIT,
                payload: {
                    categoryList: TestData.InitialCategoryList
                }
            }

            const state = TestData.InitialTopState;

            const actual = reducer(state, action);

            expect(actual.categoryList.length).toBe(2);
            expect(actual.categoryList[0].id).toBe('1');
            expect(actual.categoryList[0].name).toBe('Git');
        });
    });
});