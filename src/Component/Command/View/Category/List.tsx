import React from 'react';

export const List = () => {

    return (
        <React.Fragment>
            <aside>
                <ul id="categoryList" className="command-category--body__list category-list">
                    <span><i id="categoryEdit-1" className="fas fa-cog category-edit"></i></span>
                    <li id="categoryListItem-1" className="category-list__item">
                        Category1

                    </li>
                    <span><i id="categoryEdit-2" className="fas fa-cog category-edit"></i></span>
                    <li id="categoryListItem-2" className="category-list__item">
                        Category2

                    </li>
                </ul>
            </aside>
        </React.Fragment>
    );
}