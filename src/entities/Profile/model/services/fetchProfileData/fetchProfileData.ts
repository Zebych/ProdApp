import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileCardData } from '../../types/profileCardData';

export const fetchProfileData = createAsyncThunk<
    ProfileCardData,
    void,
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<ProfileCardData>('/profile');

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
