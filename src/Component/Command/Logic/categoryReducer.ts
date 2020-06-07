import * as Action from '../Model/CategoryAction';
import { CategoryState } from '../Model/CategoryData';

// Reducer Actionをもとに更新されたStateを生成
export const reducer = (state: CategoryState, action: Action.BaseAction): CategoryState => {

    const modState = {...state};

    // 初期表示 カテゴリの一覧を取得
    if (Action.isInitAction(action)) {

        modState.categoryList = action.payload.categoryList;

        return modState;
    }

    return modState;
}