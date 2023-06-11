import { createReducer } from '@reduxjs/toolkit';
import { initStateFilter } from './initStateFilter';

import { changeFilterAction } from './actions';

// export const filterReducer = (state = initStateFilter, action) => {
//   if (action.type === SETFILTER) {
//     return { ...state, filter: action.payload };
//   }
//   return state;
// };

export const filterReducer = createReducer(initStateFilter, {
  [changeFilterAction]: (state, action) => {
    return { ...state, filter: action.payload };
  },
});