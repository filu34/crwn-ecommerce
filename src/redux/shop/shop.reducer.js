import SHOP_DATA from "../directory/shop.data";

const INITIAL_STATE = {
    collections: SHOP_DATA,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.data) {
        default:
            return state;
    }
}

export default shopReducer;