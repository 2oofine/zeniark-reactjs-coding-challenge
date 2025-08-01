import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from "./features/resultsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      results: resultsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
