import * as actionTypes from '../actions/actionTypes';

const initialState = {
    list: {
        name: "",
    },
    lists: [],
    currentItem: {
        active: false
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_LIST:
            const listItem = {...state.list};
            listItem.name = action.listName;
            return {
                ...state,
                lists: state.lists.concat(listItem),
                currentItem: {...state.currentItem}
            };
        case actionTypes.REMOVE_LIST:
            return {
                ...state,
                list: {...state.list},
                lists: state.lists.filter((item, index) => index !== action.itemIndex),
                currentItem: {...state.currentItem}
            };
        case actionTypes.LIST_CLICKED:
            let curItem = {};
            if(state.currentItem !== state.lists[action.itemIndex] && !state.currentItem.active) {
                curItem = {...state.lists[action.itemIndex]};
                curItem.active = true;
            } else {
                curItem.active = false;
            }
            return {
                ...state,
                list: {...state.list},
                lists: [...state.lists],
                currentItem: curItem
            }
        default:
            return state;
    }
};

export default reducer;