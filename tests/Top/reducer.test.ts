import { reducer } from 'Component/Top/Logic/reducer';
import * as Action from 'Component/Top/Model/TopAction';

import * as TestData from './Data/testData';
import * as TestCategory from '../APIHandler/Category/testData';

describe('Top画面のreducerのUT', () => {

    describe('初期描画処理', () => {

        test('初期描画アクションでカテゴリ一覧が取得できること。', () => {

            const action: Action.InitAction = {
                type: Action.DispatchType.INIT,
                payload: {
                    categoryList: TestCategory.InitialCategoryList
                }
            }

            const state = TestData.InitialTopState;

            const actual = reducer(state, action);

            expect(actual.categoryList.length).toBe(TestCategory.InitialCategoryLength);
            expect(actual.categoryList[0].id).toBe('b8715b9c-ce79-4010-be32-9624177318ac');
            expect(actual.categoryList[0].name).toBe('Git');
        });
    });

    describe('カテゴリ検索', () => {

        test('検索語句が空のときは、全てのカテゴリが取得できること。', () => {

            const action: Action.ChangeCategoryAction = {
                type: Action.DispatchType.CHANGE_CATEGORY,
                payload: {
                    categoryName: ''
                }
            };
            const state = TestData.TopStateForSearchCategory;

            const actual = reducer(state, action);

            expect(actual.filteredCategoryList.length).toBe(TestCategory.InitialCategoryLength);
            expect(actual.filteredCategoryList[0].id).toBe('b8715b9c-ce79-4010-be32-9624177318ac');
            expect(actual.filteredCategoryList[0].name).toBe('Git');
        });

        test('検索語句と部分一致するカテゴリ名が存在するとき、対象が取得できること。', () => {

            const action: Action.ChangeCategoryAction = {
                type: Action.DispatchType.CHANGE_CATEGORY,
                payload: {
                    categoryName: 'Docker'
                }
            };
            const state = TestData.TopStateForSearchCategory;

            const actual = reducer(state, action);

            expect(actual.filteredCategoryList.length).toBe(2);
            expect(actual.filteredCategoryList[0].name).toContain('Docker');
            expect(actual.filteredCategoryList[1].name).toContain('Docker');

        });

        test('検索語句と部分一致するカテゴリ名が存在しないとき、カテゴリ一覧が空となること。', () => {

            const action: Action.ChangeCategoryAction = {
                type: Action.DispatchType.CHANGE_CATEGORY,
                payload: {
                    categoryName: 'UNKNOWN Category'
                }
            };
            const state = TestData.TopStateForSearchCategory;

            const actual = reducer(state, action);

            expect(actual.filteredCategoryList.length).toBe(0);
        });
    });
});