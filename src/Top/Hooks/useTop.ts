import React from 'react';
import { Field } from '../../Common/Field';

import { TopState, Category} from '../Model/TopData';

export const useTop = () => {

    const state: TopState = {
        categoryList: [
            {
                id: '1',
                name: 'first category'
            }
        ],
        searchCategoryName: new Field<string>('', '', ''),
        searchCommandName: new Field<string>('', '', ''),
    };

    return {
        state: state
    };

};