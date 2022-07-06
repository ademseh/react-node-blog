import { configureStore } from "@reduxjs/toolkit";
import blog from "./blog";
export const store = configureStore({
  reducer: { blog },
});
