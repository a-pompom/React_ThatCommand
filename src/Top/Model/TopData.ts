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
    // APIから取得した全カテゴリ
    categoryList: Category[],
    // 検索語句で絞り込んだ結果
    filteredCategoryList: Category[],
    // 検索語句
    searchCategoryName: string,
    searchCommandName: string,
}

// 状態・イベントハンドラを管理
export interface Hook {
    state: TopState,
    emitChangeCategory: {(event: React.ChangeEvent<HTMLInputElement>): void}
};