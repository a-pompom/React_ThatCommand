import { getCategoryList } from '../../src/Top/Logic/APIHandler';
import * as TestMock from './Data/testMock';
import * as TestData from './Data/testData';

describe('APIのモックから受け取ったレスポンスを加工', () => {

    describe('カテゴリ一覧を取得', () => {

        beforeEach(() => {
            TestMock.setUp(TestMock.APIType.GET_CATEGORY);
        });
        afterEach(() => {
            TestMock.tearDown(TestMock.APIType.GET_CATEGORY);
        });

        test('モック化したFetchAPIからレスポンスを受け取れること', async () => {

            const response = await getCategoryList();

            expect(response.length).toBe(TestMock.MockCategoryListLength);
        });
        test('カテゴリ一覧取得APIの結果が表示用にプロパティ名が設定されていること。', async() => {

            const response = await getCategoryList();

            expect(response).toStrictEqual(TestData.InitialCategoryList);
        });
    });
});