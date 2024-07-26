import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collection: [],
};

export const collectionSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    addCollections: (state, action) => {
      const covers = action.payload;
      covers.forEach((cover) => {
        const exists = state.collection.some(
          (existingCover) => existingCover.coverId === cover.coverId
        );
        if (!exists) {
          state.collection.push({
            name: cover.name,
            cover: cover.cover,
            coverId: cover.coverId,
          });
        }
      });
    },
  },
});

export const { addCollections } = collectionSlice.actions;
export default collectionSlice.reducer;
