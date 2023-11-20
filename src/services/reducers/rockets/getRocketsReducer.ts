import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import rocketService from "../../actions/rocketAction";

const initialState = {
    rockets: null,
    loading: false,
    error: false,
    success: false,
    message: null,
}



export const getRocketsAction = createAsyncThunk(
    "getRocketsAction",
    async (thunkAPI) => {
        try {
            return await rocketService.getAllRockets()
        } catch (error:any) {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            toast.error(`${message}`);
            return thunkAPI.rejectWithValue(message);
          }
    }
)


export const getRocketsSlice = createSlice({
    name: "getRockets",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
            state.message = null;
            state.rockets = null;
        },
    },


    extraReducers: (builder) => {
        builder
            .addCase(getRocketsAction.pending, (state) => {
                state.loading = true;
            })

            .addCase(getRocketsAction.fulfilled, (state, action) => {
                console.log(action.payload, "THE BACK DATATATATATATAT")
                state.loading = false;
                state.success = true;
                state.rockets = action.payload
            })

            .addCase(getRocketsAction.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.message = null;
                state.rockets = null;
            })
    }
})


export const { reset } = getRocketsSlice.actions;

export default getRocketsSlice.reducer;