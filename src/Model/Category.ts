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
