import React from 'react';

export const List = () => {

    return (

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

    );

}