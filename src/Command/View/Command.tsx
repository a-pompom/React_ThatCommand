import React from 'react';

const CommandView = () => {

    return (
        <div className="command-container">
		
            <article className="command-category">

                <header className="command-category--header">
                    <h2>Category</h2>

                    <h2 id="newCategory" className="icon--simple new-category"></h2>
                </header>

			<div className="command-category--body">

				<form className="command-category--body__input hidden-item" id="categoryInput">
					<label htmlFor="categoryName" className="category-input">
						<input type="text" id="categoryName" placeholder="&nbsp;" />
						<span className="category-input__placeholder">Category</span>
						<span className="category-input__border"></span>
					</label>

					<input type="submit" 
						value="ADD" className="category-button" />

				</form>

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
			</div>
		</article>

		<article className="command-item">

			<header className="command-item--header">
				<h2>Item</h2>
				<h2 id="newCommand" className="icon--simple new-command"></h2>
			</header>

			<main className="command-item--body">

				<form className="command-item--body__input hidden-item" id="commandInput">

					<label htmlFor="title" className="command-input">
						<input type="text" id="title" placeholder="&nbsp;" />
						<span className="command-input__placeholder">Title</span>
						<span className="command-input__border"></span>
					</label>

					<label htmlFor="subCategory" className="command-input">
						<input type="text" id="subCategory" placeholder="&nbsp;" />
						<span className="command-input__placeholder">Sub Category</span>
						<span className="command-input__border"></span>
					</label>


					<label htmlFor="memo" className="command-textarea">
						<textarea id="memo" placeholder="&nbsp;"></textarea>
						<span className="command-textarea__placeholder">Memo</span>
						<span className="command-textarea__border"></span>
					</label>

					<input type="submit" 
						value="ADD" className="command-button" />
				</form>

				<ul id="commandList" className="command-item--body__list">
					<li>
						<ul id="commandSubList-1" title="SubCategory 1" className="command-list" >
							<span><i id="commanSubList-1-Edit-1" className="fas fa-cog command-edit"></i></span>
							<li id="commandSubList-1-Item-1" className="command-list__item">
								Item1
								<span id="memoOpener-1-1" className="angle-down command-list__item--opener"></span>
								<div id="memo-1-1" className="command-list__item--memo hidden-accordion">
<pre className="command-memo">test1
test2</pre>
								</div>
							</li>

							<span><i id="commanSubList-1-Edit-2" className="fas fa-cog command-edit"></i></span>
							<li id="commandSubList-1-Item-2" className="command-list__item">
								Item1
								<span id="memoOpener-1-2" className="angle-down command-list__item--opener"></span>
								<div id="memo-1-2" className="command-list__item--memo hidden-accordion">
									test
								</div>
							</li>
						</ul>
					</li>
					
					
					<li>
						<ul id="commandSubList-2" title="SubCategory 2" className="command-list" >
							<span><i id="commanSubList-2-Edit-1" className="fas fa-cog command-edit"></i></span>
							<li id="commandSubList-2-Item-1" className="command-list__item">
								Item1
								<span id="memoOpener-2-1" className="angle-down command-list__item--opener"></span>
								<div id="memo-2-1" className="command-list__item--memo hidden-accordion">
									<pre className="command-memo">testest1</pre>
								</div>
							</li>

							<span><i id="commanSubList-2-Edit-2" className="fas fa-cog command-edit"></i></span>
							<li id="commandSubList-2-Item-2" className="command-list__item">
								Item1
								<span id="memoOpener-2-2" className="angle-down command-list__item--opener"></span>
								<div id="memo-2-2" className="command-list__item--memo hidden-accordion">
									test
								</div>
							</li>
							
							<span><i id="commanSubList-2-Edit-3" className="fas fa-cog command-edit"></i></span>
							<li id="commandSubList-2-Item-3" className="command-list__item">
								Item1
								<span id="memoOpener-2-3" className="angle-down command-list__item--opener"></span>
								<div id="memo-2-3" className="command-list__item--memo hidden-accordion">
									test
								</div>
							</li>
						</ul>
					</li>
					
					
				</ul>

			</main>

		</article>
	</div>
    )

}

export const Command = () => {
    return (
        <CommandView />
    );
}