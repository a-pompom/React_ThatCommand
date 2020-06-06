import * as Action from '../Model/TopAction';
import { TopState } from '../Model/TopData';

// Reducer Actionをもとに更新されたStateを生成
export const reducer = (state: TopState, action: Action.BaseAction): TopState => {

    const modState = {...state};

    // 初期表示 カテゴリの一覧を取得
    if (Action.isInitAction(action)) {

        modState.categoryList = action.payload.categoryList;
        modState.filteredCategoryList = action.payload.categoryList;

        return modState;
    }

    // カテゴリ検索語句変更
    if (Action.isChangeCategoryAction(action)) {

        const searchQuery = action.payload.categoryName;

        // 何も入力されない場合は、全件表示
        if (searchQuery === '') {
            modState.filteredCategoryList = modState.categoryList;
            return modState;
        }

        modState.filteredCategoryList = modState.categoryList.filter((category) => {
            return category.name.includes(searchQuery);
        });

        return modState;
    }

    return modState;
}