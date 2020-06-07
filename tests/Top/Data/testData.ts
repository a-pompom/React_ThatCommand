import { TopState } from 'Component/Top/Model/TopData';
import { InitialCategoryList } from '../../APIHandler/Category/testData';

// DOM要素を操作するためのセレクタ
export const DOM_SELECTOR = {
    CATEGORY_LIST_ITEM: '#topAllCategoryList li',
    CATEGORY_SEARCH_NAME: '#searchCategoryName'
}

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