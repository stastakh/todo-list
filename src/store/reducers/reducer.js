import * as actionTypes from '../actions/actionTypes';

const initialState = {
    lists: [],
    currentItem: {
        active: false,
        index: null,
        positions: []
    },
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_LIST: // ADDS NEW LIST
            const listItem = {
                name: action.listName,
                active: false,
                positions: []
            };
            return {
                ...state,
                lists: state.lists.concat(listItem)
            };
        case actionTypes.REMOVE_LIST: // REMOVES LIST
            return {
                ...state,
                lists: state.lists.filter((item, index) => index !== action.itemIndex)
            };
        case actionTypes.LIST_CLICKED: // ACTIVATES CLICKED LIST
            const listsArr = state.lists.map((list, index) => {
                return list = {
                    ...list,
                    active:  index === action.itemIndex ? true : false
                }
            });
            let curItem = {};
            listsArr.forEach(list => {
                if(list.active) {
                    curItem = {
                        ...list,
                        index: action.itemIndex
                    }
                }
            })
            return {
                ...state,
                lists: listsArr,
                currentItem: curItem,
            };
        case actionTypes.LIST_UPDATE: // UPDATES LIST NAME
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    name: action.newValue
                },
                lists: state.lists.map((list, index)=> {
                    if(index === state.currentItem.index) {
                        return {
                            ...list,
                            name: action.newValue,
                            positions: [...list.positions]
                        }
                    }
                    return {
                        ...list
                    }
                })
            };
            
        //----------------------|POSITIONS|---------------------------//
        
        case actionTypes.ADD_POSITION: // ADDS NEW POSITION
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
            };
        case actionTypes.POSITION_COMPLETE_TOGGLE: // TOGGLES POSITION'S CHECKBOX AND COMPLETE PROP
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    positions: state.currentItem.positions.map((position, index) => {
                        if(index === action.itemIndex) {
                            return {
                                ...position,
                                completed: !position.completed
                            }   
                        }
                        return {
                            ...position
                        }
                    }),
                },
                lists: state.lists.map((list) => {
                    if(list.name === state.currentItem.name) {
                        return {
                            ...list,
                            active: state.currentItem.active,
                            positions: state.currentItem.positions.map((position, index) => {
                                if(index === action.itemIndex) {
                                    return {
                                        ...position,
                                        completed: !position.completed
                                    }
                                }
                                return {
                                    ...position
                                }
                            })
                        }
                    }
                    return {
                        ...list
                    } 
                })               
            };
        case actionTypes.REMOVE_POSITION: // REMOVE POSITION FROM LIST AND CURRENT POSITION
            return {
                ...state,
                currentItem: {
                    ...state.currentItem,
                    positions: state.currentItem.positions.filter((item, index) => index !== action.itemIndex)
                },
                lists: state.lists.map((list) => {
                    if(list.name === state.currentItem.name) {
                        return {
                            ...state.currentItem,
                            positions: state.currentItem.positions.filter((item, index) => index !== action.itemIndex)
                        }
                    }
                    return {
                        ...list
                    }
                })
            };
        default:
            return state;
    }
};

export default reducer;