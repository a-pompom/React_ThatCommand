import React from 'react';
import { Category } from 'Model/Category';

interface Prop {
    categoryList: Category[]
}

export const List = ({
    categoryList

}: Prop) => {

    return (
        <React.Fragment>
            <aside>
                <ul id="categoryList" className="command-category--body__list category-list">
                    {
                        categoryList.map((category, index) => {

                            return (
                                <React.Fragment
                                    key={category.id}
                                >
                                    <span><i id={`categoryEdit-${index}`} className="fas fa-cog category-edit"></i></span>
                                    <li 
                                        id={`categoryListItem-${index}`}
                                        className="category-list__item"
                                    >
                                        {category.name}
                                    </li>
                                </React.Fragment>
                            )

                        })
                    }
                </ul>
            </aside>
        </React.Fragment>
    );
}