import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentForm';

const initialState: AddCommentFormSchema = {
    error: undefined,
    text: '',
};

export const AddCommentFormSlice = createSlice({
    name: 'AddCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    //     extraReducers: (builder) => {
    //     builder
    //         .addCase(запрос.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //
    //         .addCase(запрос.fulfilled, (
    //             state,
    //             action: PayloadAction<тип>,
    //         ) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //         })
    //
    //         .addCase(запрос.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: addCommentFormActions } = AddCommentFormSlice;
export const { reducer: addCommentFormReducer } = AddCommentFormSlice;
