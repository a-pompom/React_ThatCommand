import React from 'react';

export const Search = () => {

    return (
        <React.Fragment>
            <section className="top__body">
                
                <main className="top__body__title">
                    
                    <h1 className="top__body__title--picture">TOP絵</h1>
                    
                    <h1 className="top__body__title--text--primary">What was</h1>
                    <h1 className="top__body__title--text--secondary">That Command?</h1>
                    
                </main>
                
                <form action="#" method="post" className="top__body__search-form">
                
                    <label htmlFor="searchCategoryName" className="top-input top__body__search-form__item">
                        <input type="text" id="searchCategoryName" placeholder="&nbsp;" />
                        <span className="top-input__placeholder">Category</span>
                        <span className="top-input__border"></span>
                    </label>
                    
                    <label htmlFor="searchCommandName" className="top-input top__body__search-form__item">
                        <input type="text" id="searchCommandName" placeholder="&nbsp;" />
                        <span className="top-input__placeholder">Command</span>
                        <span className="top-input__border"></span>
                    </label>
                    
                    <br />
                    
                    <button type="submit" className="top__body__search-form__button search-button">SEARCH</button>
                        
                </form>
                
            </section>

        </React.Fragment>

    )

}