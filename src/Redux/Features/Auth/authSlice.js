import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

const consumer = JSON.parse(localStorage.getItem('consumer'))

const initialState = {
    consumer: consumer ? consumer : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const consumerRegister = createAsyncThunk(
    'auth/consumerRegister',
    async (consumer, thunkAPI) => {
        try {
            return await authService.consumerRegister(consumer)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const consumerLogin = createAsyncThunk(
    'auth/consumerLogin',
    async (consumer, thunkAPI) => {
        try {
            return await authService.consumerLogin(consumer)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await authService.logout()
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(consumerRegister.pending, (state) => {
                state.isLoading = true
            })
            .addCase(consumerRegister.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.consumer = action.payload
            })
            .addCase(consumerRegister.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.consumer = null
            })
            
            .addCase(consumerLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(consumerLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.consumer = action.payload
            })
            .addCase(consumerLogin.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.isError = true
                state.consumer = null
            })

            .addCase(logout.fulfilled, (state) => {
                state.consumer = null
            })
    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;