import { createReducer } from "@reduxjs/toolkit";

// export const deleteContactAction = filterId => {
//   return {
//     type: SETCONTACTS,
//     payload: [...filterId],
//   };
// };

export const deleteReducer = createReducer(_, {
    [deleteContactAction]: (_, {payload }) => { 
console.log(payload);
    }
})