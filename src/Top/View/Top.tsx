import React from 'react';

import { Header } from './Header';
import { Body } from './Body';
import { Search } from './Search';
import { CategoryList } from './CategoryList';

import { Hook } from '../Model/TopData';
import { useTop } from '../Hooks/useTop';

const TopView: React.FC<Hook> = ({
    state,
    emitChangeCategory
}) => {

    return (

        <div className="top">

            <Header />

            <section className="top__body">

                <Body />
                
                <Search handleSearch={emitChangeCategory} />
                
            </section>

            <CategoryList categoryList={state.filteredCategoryList} />

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