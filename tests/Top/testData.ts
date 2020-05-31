import { Field } from '../../src/Common/Field';
import { TopState, Category } from '../../src/Top/Model/TopData';

export const DOM_SELECTOR = {
    CATEGORY_LIST_ITEM: '#topAllCategoryList li'
}

export const InitialCategoryList: Category[] = [
    {
        id: '1',
        name: 'Git'
    },
    {
        id: '2',
        name: 'React'
    }
];
export const InitialTopState: TopState = {
    categoryList: [],
    searchCategoryName: new Field<string>('', '', ''),
    searchCommandName: new Field<string>('', '', '')
}