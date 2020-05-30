import React from 'react';

import { Category } from '../Model/TopData';

export const CategoryList: React.FC<{categoryList: Category[]}> = ({
	categoryList
}) => {
    return (
		<article className="top__category">
			
			<section className="top__category--recent">
			
				<header className="top__category--recent__header">

					<h2 className="top__category--recent__header__text">
						Recent
					</h2>

				</header>
				
				<ul className="top__category--recent__list">
					<li className="top__category--recent__list__item">
						Git
					</li>
					<li className="top__category--recent__list__item">
						Linux
					</li>
					<li className="top__category--recent__list__item">
						Vim
					</li>
					<li className="top__category--recent__list__item">
						Docker
					</li>
					<li className="top__category--recent__list__item">
						Excel
					</li>
				</ul>

			</section>

			<section className="top__category--all">

				<header className="top__category--all__header">

					<h2 className="top__category--all__header__text">
						All
					</h2>

				</header>
				
				<ul id="topAllCategoryList" className="top__category--all__list">
					
					{categoryList.map((category, index) => {
						console.log(category);

						return (
							<li
								key={category.id}
								id={`topAllCategory${index}`}
								className="top__category--all__list__item"
							>
								{category.name}
							</li>
						);
					})}
				</ul>

			</section>
			
		</article>

    )
}