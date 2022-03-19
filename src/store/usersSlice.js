import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const usersAction = createAsyncThunk(
  "users/usersAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Error");
      }

      const users = await response.json();
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    error: null,
    users: null,
  },
  reducers: {
    sortUsers: (state, action) => {
      switch (action.payload) {
        case "name": {
          state.users.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          break;
        }
        case "city": {
          state.users.sort((a, b) => {
            if (a.address.city < b.address.city) {
              return -1;
            }
            if (a.address.city > b.address.city) {
              return 1;
            }
            return 0;
          });
          break;
        }
        default:
          break;
      }
    },
  },
  extraReducers: {
    [usersAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [usersAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [usersAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { sortUsers } = usersSlice.actions;

export default usersSlice.reducer;
