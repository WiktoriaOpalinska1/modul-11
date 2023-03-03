import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
    //for cards
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
  //for columns
export const getAllColumns = state => state.columns;
export const getAllColumnsByList = ({columns}, listId) =>
  columns.filter((column) => column.listId === listId);  
    //for lists
export const getListById = ({ lists }, listId) => lists.find( list => list.id === listId );
export const getAllLists = state => state.lists;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload });

const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, {id: shortid(), ...action.payload, }]};
        case 'ADD_CARD':
            return {...state, cards: [...state.cards, {id: shortid(), ...action.payload}]};
        case 'UPDATE_SEARCHSTRING':
            return {...state, searchString: action.payload.value};
        default:
            return state;
    };
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;