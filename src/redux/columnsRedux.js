import shortid from 'shortid';

// action
const ADD_COLUMN = 'app/columns/ADD_COLUMN';

//selectors
export const getAllColumns = state => state.columns;
export const getAllColumnsByList = ({columns}, listId) =>
  columns.filter((column) => column.listId === listId);  

// action creator
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
}

export default columnsReducer;