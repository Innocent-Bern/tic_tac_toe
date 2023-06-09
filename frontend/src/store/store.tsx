import { configureStore } from '@reduxjs/toolkit'
import { api } from '../features/api/apiSlice'

import clockReducer from '../features/clock/clockSlice'
import socketReducer from '../features/socketConnection/socketSlice'
import boardTileReducer from '../features/BoardTile/boardTileSlice'
const store = configureStore({
  reducer: {
    clock: clockReducer,
    socket: socketReducer,
    boardTile: boardTileReducer,
    [api.reducerPath]: api.reducer,
  },
  // Add the RTK Query API middleware
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store
