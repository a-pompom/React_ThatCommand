import React from 'react';

import { Header } from './Header';
import { Search } from './Search';
import { CategoryList } from './CategoryList';

import { Hook } from '../Model/TopData';
import { useTop } from '../Hooks/useTop';

const TopView: React.FC<Hook> = ({
    state
}) => {

    return (

        <div className="top">

            <Header />

            <Search />

            <CategoryList categoryList={state.categoryList} />

        </div>
    )
}

export const Top = () => {

    // Hooksで状態を取得
    const hook = useTop();
    return (
        <TopView {...hook} />
    )
}