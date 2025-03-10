import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allClasses: [],
  ongoingClasses: [],
  upcommingClasses: [],
  pastClasses: [],
  allCourses: [],
};
export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setAllTeachers: (state, { payload }) => {
      state.allTeachers = payload;
    },
    setAllClasses: (state, { payload }) => {
      state.allClasses = payload;
    },
    setOngoingClasses: (state, { payload }) => {
      state.ongoingClasses = payload;
    },
    setUpcommingClasses: (state, { payload }) => {
      state.upcommingClasses = payload;
    },
    setPastClasses: (state, { payload }) => {
      state.pastClasses = payload;
    },
    setAllCourses: (state, { payload }) => {
      state.allCourses = payload;
    },
  },
});
export const {
  setAllTeachers,
  setAllClasses,
  setOngoingClasses,
  setUpcommingClasses,
  setPastClasses,
  setAllCourses,
} = detailSlice.actions;
export default detailSlice.reducer;
