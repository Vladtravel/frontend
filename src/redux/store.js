import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers";
import { projectsReducer } from "../redux/projects/projects-reducer";
import { sprintReducer } from "../redux/sprint/reducers";
import { tasksReducer } from "../redux/tasks/reducers";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, reducers.auth),
    projects: projectsReducer,
    sprints: sprintReducer,
    tasks: tasksReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

const persistore = { store, persistor };
export default persistore;
