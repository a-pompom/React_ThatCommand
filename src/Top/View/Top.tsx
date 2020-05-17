import React from 'react';

import { Header } from './Header';
import { Search } from './Search';
import { CategoryList } from './CategoryList';

const TopView = () => {

    return (

        <div className="top">

            <Header />

            <Search />

            <CategoryList />

        </div>
    )
}

const Top = () => {

    // Hooksで状態を取得
    return (
        <TopView />
    )
}

export default Top;