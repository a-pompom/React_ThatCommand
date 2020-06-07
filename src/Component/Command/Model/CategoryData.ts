import { Category } from 'Model/Category';

// 画面で管理する状態
export interface CategoryState {
    // APIから取得した全カテゴリ
    categoryList: Category[],
    // 新規登録用カテゴリ名
    newCategoryName: string
}

// 状態・イベントハンドラを管理
export interface CategoryHook {
    categoryState: CategoryState,
};