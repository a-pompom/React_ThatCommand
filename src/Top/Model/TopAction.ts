import { Category } from './TopData';

// イベントの種類
export enum DispatchType {
    INIT = 'init',
    CHANGE_CATEGORY = 'change'
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

// カテゴリ検索条件変更
export interface ChangeCategoryAction extends BaseAction {
    payload: {
        categoryName: string
    }
}

// Actionの種類を識別
export const isInitAction = (action: BaseAction): action is InitAction => {
    return action.type === DispatchType.INIT;
}
export const isChangeCategoryAction = (action: BaseAction): action is ChangeCategoryAction => {
    return action.type === DispatchType.CHANGE_CATEGORY;
}