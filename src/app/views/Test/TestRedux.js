import { combineReducers } from 'redux';
const initialState = {
    test: '',
}
export function testAction() {
    return {
        type: 'Test',
    }
}
export default function previewList(state = initialState, action) {
    switch (action.type) {
        case 'Test': {
            return {
                test: 'test',
            };
        }
        default:
            return state;
    }
}
