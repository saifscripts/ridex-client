import { IBike } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';

export interface IAuthState {
  isComparing: boolean;
  selectedBikes: IBike[];
}

const initialState: IAuthState = {
  isComparing: false,
  selectedBikes: [],
};

const comparisonSlice = createSlice({
  name: 'comparison',
  initialState,
  reducers: {
    toggleSelectedBike: (state, action) => {
      const bike = action.payload;
      const isSelected = state.selectedBikes.some((b) => b._id === bike._id);

      if (!isSelected && state.selectedBikes.length >= 4) {
        toast.error('You can only compare up to 4 bikes');
        return;
      }

      if (isSelected) {
        state.selectedBikes = state.selectedBikes.filter(
          (b) => b._id !== bike._id
        );
      } else {
        state.selectedBikes.push(bike);
      }
    },

    clearSelectedBikes: (state) => {
      state.selectedBikes = [];
    },

    setIsComparing: (state, action) => {
      state.isComparing = action.payload;
    },
  },
});

export const { toggleSelectedBike, clearSelectedBikes, setIsComparing } =
  comparisonSlice.actions;
export default comparisonSlice.reducer;
