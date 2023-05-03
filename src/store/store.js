import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleWares = [
  process.env.NODE_ENV === "development" ? logger : false,
].filter(Boolean);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defualtMidlewares) =>
    defualtMidlewares({ serializableCheck: false }).concat(middleWares),
});
