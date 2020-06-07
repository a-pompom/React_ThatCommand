import { Category, CategoryResponse } from 'Model/Category';
import { FetchUtil } from 'Common/FetchUtil';

const END_POINT = 'http://localhost:18080/api/v1';

/**
 * APIよりカテゴリの一覧を取得
 */
export const getCategoryList = async (): Promise<Category[]> => {

    const response = await FetchUtil.get<CategoryResponse[]>(`${END_POINT}/categories/`);

    // レスポンス→View用オブジェクトへ詰め替え
    const categoryList = response.map((category) => {

        return {
            id: category.category_id,
            name: category.category_name
        }
    });

    return categoryList;
};