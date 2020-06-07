import React from 'react';

import { Header } from './Header';
import { List } from './List';
import { Input } from './Input';

const CategoryView = () => {

    return (
        <React.Fragment>

            <article className="command-category">

                <Header />

                <div className="command-category--body">

                    <Input />
                    <List />
                    
                </div>

            </article>

        </React.Fragment>
    )
};

export const Category = () => {

    return (
        <CategoryView />
    );
};