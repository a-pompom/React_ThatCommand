import { Field } from '../../Common/Field';

// APIから受け取るカテゴリ要素
export interface CategoryResponse {
    category_id: string,
    category_name: string
}

// Viewに表示するためのカテゴリ要素
export interface Category {
    id: string,
    name: string
}

// 画面で管理する状態
export interface TopState {
    categoryList: Category[],
    searchCategoryName: Field<string>,
    searchCommandName: Field<string>,
}

// 状態・イベントハンドラを管理
export interface Hook {
    state: TopState
};