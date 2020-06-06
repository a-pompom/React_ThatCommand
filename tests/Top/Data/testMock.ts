import FetchMock from 'fetch-mock';
import { configure } from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

const END_POINT = 'http://localhost:18080/api/v1';
configure({ adapter: new Adapter() });

export enum APIType {
    GET_CATEGORY = 'get_category'

}

// Mockのレスポンスとなるカテゴリリスト
const MockCategoryList = [
    {
        category_id: 'b8715b9c-ce79-4010-be32-9624177318ac',
        category_name: 'Git'
    },
    {
        category_id: '168bd827-db1c-4d02-833c-46bc7dc9548c',
        category_name: 'React'
    },
    {
        category_id: 'a8c5bb6a-d99c-4e41-ad12-13220a07822e',
        category_name: 'Dockerのコマンド'
    },
    {
        category_id: '6794172c-8ebd-4a34-bb8b-82fd2b51dc69',
        category_name: 'Docker Compose'
    },
    {
        category_id: 'ff983d81-4b8f-42a7-8478-db379228b2de',
        category_name: '便利なコマンド'
    }
];
export const MockCategoryListLength = MockCategoryList.length;

// 前処理 FetchAPIをモック化
export const setUp = (apiType: APIType) => {

    if (apiType === APIType.GET_CATEGORY) {

        FetchMock.get(`${END_POINT}/categories/`, MockCategoryList);
        return;
    }
};

// 後処理 モック化したFetchを解除
export const tearDown = (apiType: APIType) => {

    if (apiType === APIType.GET_CATEGORY) {
        FetchMock.reset();

        return;
    }
};