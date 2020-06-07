import React from 'react';

import { Header } from './Header';
import { List } from './List';
import { Input } from './Input';
import { CategoryHook } from 'Component/Command/Model/CategoryData';

export const Category: React.FC<CategoryHook> = ({
    categoryState
}) => {

    return (
        <React.Fragment>

            <article className="command-category">

                <Header />

                <div className="command-category--body">

                    <Input />
                    <List categoryList={categoryState.categoryList} />
                    
                </div>

            </article>

        </React.Fragment>
    )
};