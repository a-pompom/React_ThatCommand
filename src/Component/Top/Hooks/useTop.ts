import React, { useReducer, useEffect } from 'react';

import { TopState } from '../Model/TopData';
import { reducer } from '../Logic/reducer';
import * as Action from '../Model/TopAction';

import { getCategoryList } from 'APIHandler/CategoryAPI';

// 画面描画用フック
export const useTop = () => {

    // 状態管理
    const initialState: TopState = {
        categoryList: [],
        filteredCategoryList: [],
        searchCategoryName: '',
        searchCommandName: ''
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    // 初期描画
    useEffect(() => {

        const fetchData = async () => {
            
            const categoryList = await getCategoryList();
            const action: Action.InitAction = {
                type: Action.DispatchType.INIT,
                payload: {
                    categoryList: categoryList
                }
            };

            dispatch(action);
        };

        fetchData();
    }, []); // 初期描画時のみAPIより取得

    /**
     * カテゴリ検索イベントが発火。
     * カテゴリ一覧を検索語句で絞り込む。
     * 
     * @param event 変更イベント
     */
    const emitChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {

        const action: Action.ChangeCategoryAction = {
            type: Action.DispatchType.CHANGE_CATEGORY,
            payload: {
                categoryName: event.target.value
            }
        };

        dispatch(action);
    };

    return {
        state: state,
        emitChangeCategory: emitChangeCategory
    };
};