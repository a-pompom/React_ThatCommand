import { useReducer, useEffect } from 'react';

import { CategoryState, CategoryHook } from '../Model/CategoryData';
import { reducer } from '../Logic/categoryReducer';
import * as Action from '../Model/CategoryAction';

import { getCategoryList } from 'APIHandler/CategoryAPI';

// 画面描画用フック
export const useTop = (): CategoryHook => {

    // 状態管理
    const initialState: CategoryState = {
        categoryList: [],
        newCategoryName: ''
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

    return {
        categoryState: state,
    };
};