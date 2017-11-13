// 整个应用中所有reducer的汇总
import home from '../views/Home/HomeRedux.js';
import testReducer from '../views/Test/TestRedux';
export default {
    home,
    test: testReducer,
};
