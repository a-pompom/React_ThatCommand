import { getCategoryList } from '../../src/Top/Logic/APIHandler';
import { APIType, setUp, tearDown} from './testMock';

describe('APIのモックから受け取ったレスポンスを加工', () => {

    describe('カテゴリ一覧を取得', () => {

        beforeEach(() => {
            setUp(APIType.GET_CATEGORY);
        });
        afterEach(() => {
            tearDown(APIType.GET_CATEGORY);
        });

        test('モック化したFetchAPIからレスポンスを受け取れること', async () => {

            const response = await getCategoryList();

            console.log(response);
            expect(response.length).toBe(2);
        });
        test('カテゴリ一覧取得APIの結果が表示用にプロパティ名が設定されていること。', async() => {

            const response = await getCategoryList();
            const expected = [
                {
                    id: '1',
                    name: 'Git'
                },
                {
                    id: '2',
                    name: 'React'
                },
            ];

            expect(response).toStrictEqual(expected);
        });
    });
});