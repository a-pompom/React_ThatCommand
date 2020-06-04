import React from 'react';

export const Search = ({
    handleSearch
}) => {

    return (
        <React.Fragment>
                <form action="#" method="post" className="top__body__search-form">
                
                    <label htmlFor="searchCategoryName" className="top-input top__body__search-form__item">
                        <input type="text" onChange={handleSearch} id="searchCategoryName" placeholder="&nbsp;" />
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
        </React.Fragment>
    );
};