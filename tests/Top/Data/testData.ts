import { TopState, Category } from '../../../src/Top/Model/TopData';

// DOM要素を操作するためのセレクタ
export const DOM_SELECTOR = {
    CATEGORY_LIST_ITEM: '#topAllCategoryList li'
}

// 初期描画段階でのカテゴリ一覧
export const InitialCategoryList: Category[] = [
    {
        id: '1',
        name: 'Git'
    },
    {
        id: '2',
        name: 'React'
    }
];

// 初期状態
export const InitialTopState: TopState = {
    categoryList: [],
    filteredCategoryList: [],
    searchCategoryName: '',
    searchCommandName: ''
}