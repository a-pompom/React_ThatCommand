import React from 'react';

export const CategoryList = () => {
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
				
				<ul className="top__category--all__list">
					<li className="top__category--all__list__item">
						Git
					</li>
					<li className="top__category--all__list__item">
						Linux
					</li>
					<li className="top__category--all__list__item">
						Vim
					</li>
					<li className="top__category--all__list__item">
						Sass
					</li>
					<li className="top__category--all__list__item">
						Docker
					</li>
					<li className="top__category--all__list__item">
						Excel
					</li>
					<li className="top__category--all__list__item">
						Vue
					</li>
					<li className="top__category--all__list__item">
						JavaScript
					</li>
					<li className="top__category--all__list__item">
						Java
					</li>
				</ul>

			</section>
			
		</article>

    )

}