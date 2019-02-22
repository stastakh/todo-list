import * as actionTypes from '../actions/actionTypes';

const initialState = {
    lists: [],
    currentItem: {
        active: false,
        positions: []
    },
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_LIST:
            const listItem = {
                name: action.listName,
                active: false,
                positions: []
            };
            return {
                ...state,
                lists: state.lists.concat(listItem)
            };
        case actionTypes.REMOVE_LIST:
            return {
                ...state,
                lists: state.lists.filter((item, index) => index !== action.itemIndex)
            };
        case actionTypes.LIST_CLICKED:
            const listsArr = state.lists.map((list, index) => {
                return list = {
                    ...list,
                    active:  index === action.itemIndex ? true : false
                }
                // if(index === action.itemIndex) {
                //     return {
                //         ...list,
                //         active: !list.active
                //     } 
                // } 
                // return list = {
                //     ...list,
                //     active: false
                // }
            });
            let curItem = {};
            listsArr.forEach(list => {
                if(list.active) {
                    curItem = {...list}
                }
            })
            return {
                ...state,
                lists: listsArr,
                currentItem: curItem,
            }
        case actionTypes.ADD_POSITION:
            const position = {name: action.positionName, completed: false};
            const currList = {
                ...state.currentItem, 
                positions: [...state.currentItem.positions.concat(position)]
            };
            return {
                ...state,
                currentItem: {...currList, positions: [...currList.positions]},
                lists: state.lists.map(list => {
                    if(list.name === state.currentItem.name) {
                        return {
                            ...state.currentItem,
                            positions: state.currentItem.positions.concat(position)
                        }   
                    }
                    return {
                        ...list
                    }
                })
            }
        // case actionTypes.POSITION_COMPLETE_TOGGLE:
            // return {
            //     ...state,
            //     currentItem: {
            //         ...state.currentItem,
            //         positions: [
            //             ...state.currentItem.positions,
            //             {
            //                 ...state.currentItem.positions[action.itemIndex],
            //                 completed: !state.currentItem.positions[action.itemIndex].completed
            //             }
            //         ]
            //     },
            //     lists: state.lists.map((list, index) => {
            //         return list = {
            //             ...list,
            //             // active: index === action.itemIndex ? true : false
            //             positions: {
            //                 ...state.currentItem.positions,
            //             }
            //         }  
            //     })
            // }
        default:
            return state;
    }
};

export default reducer;