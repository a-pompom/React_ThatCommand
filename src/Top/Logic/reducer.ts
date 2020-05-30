import { TopState, Category } from '../Model/TopData';

// イベントの種類
export enum DispatchType {
    INIT = 'init',
    CHANGE = 'change'
};

// イベント・パラメータを保持するAction
interface Action {
    type: DispatchType
}

// 初期描画
export interface InitAction extends Action{
    payload: {
        categoryList: Category[]
    }
}

// Reducer Actionをもとに更新されたStateを生成
export const reducer = (state: TopState, action: Action): TopState => {

    const modState = {...state};

    // 初期表示 カテゴリの一覧を取得
    if (isInitAction(action)) {

        modState.categoryList = action.payload.categoryList;
        return modState;
    }

    return modState;
}

// Actionの種類を識別
const isInitAction = (action: Action): action is InitAction => {
    return action.type === DispatchType.INIT;
}