import { Category } from 'Model/Category';

// イベントの種類
export enum DispatchType {
    INIT = 'init',
}

// イベント・パラメータを保持するAction
export interface BaseAction {
    type: DispatchType
}

// 初期描画
export interface InitAction extends BaseAction{
    payload: {
        categoryList: Category[]
    }
}

// Actionの種類を識別
export const isInitAction = (action: BaseAction): action is InitAction => {
    return action.type === DispatchType.INIT;
}