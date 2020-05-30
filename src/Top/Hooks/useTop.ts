import React, { useReducer, useEffect } from 'react';
import { Field } from '../../Common/Field';

import { TopState, Category} from '../Model/TopData';
import { getCategoryList } from '../Logic/APIHandler';
import { reducer, DispatchType, InitAction} from '../Logic/reducer';

// 画面描画用フック
export const useTop = () => {

    // 状態管理
    const initialState: TopState = {
        categoryList: [
        ],
        searchCategoryName: new Field<string>('', '', ''),
        searchCommandName: new Field<string>('', '', ''),
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    // 初期描画
    useEffect(() => {

        const fetchData = async () => {
            
            const categoryList = await getCategoryList();
            const action: InitAction = {
                type: DispatchType.INIT,
                payload: {
                    categoryList: categoryList
                }
            };

            dispatch(action);
        };

        fetchData();
    }, []);

    return {
        state: state
    };
};