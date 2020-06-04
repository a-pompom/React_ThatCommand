import FetchMock from 'fetch-mock';
import { configure } from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

const END_POINT = 'http://localhost:18080/api/v1';
configure({ adapter: new Adapter() });

export enum APIType {
    GET_CATEGORY = 'get_category'

}

// 前処理 FetchAPIをモック化
export const setUp = (apiType: APIType) => {

    if (apiType === APIType.GET_CATEGORY) {

        FetchMock.get(`${END_POINT}/categories/`, [
            {
                category_id: '1',
                category_name: 'Git'
            },
            {
                category_id: '2',
                category_name: 'React'
            },
        ]);
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