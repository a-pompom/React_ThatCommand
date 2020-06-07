import { TopState } from 'Component/Top/Model/TopData';
import { Category } from 'Model/Category';

// DOM要素を操作するためのセレクタ
export const DOM_SELECTOR = {
    CATEGORY_LIST_ITEM: '#topAllCategoryList li',
    CATEGORY_SEARCH_NAME: '#searchCategoryName'
}

// 初期描画段階でのカテゴリ一覧
export const InitialCategoryList: Category[] = [
    {
        id: 'b8715b9c-ce79-4010-be32-9624177318ac',
        name: 'Git'
    },
    {
        id: '168bd827-db1c-4d02-833c-46bc7dc9548c',
        name: 'React'
    },
    {
        id: 'a8c5bb6a-d99c-4e41-ad12-13220a07822e',
        name: 'Dockerのコマンド'
    },
    {
        id: '6794172c-8ebd-4a34-bb8b-82fd2b51dc69',
        name: 'Docker Compose'
    },
    {
        id: 'ff983d81-4b8f-42a7-8478-db379228b2de',
        name: '便利なコマンド'
    }
];
export const InitialCategoryLength: number = InitialCategoryList.length;

export const CategoryNameList = InitialCategoryList.map((category) => category.name);

// 初期状態
export const InitialTopState: TopState = {
    categoryList: [],
    filteredCategoryList: [],
    searchCategoryName: '',
    searchCommandName: ''
}

// カテゴリ検索用
export const TopStateForSearchCategory: TopState = {
    categoryList: InitialCategoryList,
    filteredCategoryList: [],
    searchCategoryName: '',
    searchCommandName: ''
};