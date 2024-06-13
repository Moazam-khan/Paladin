import type {StateCreator} from 'zustand';

type State = {
  isShowMinNftModal: boolean;
};

type Actions = {
  setShowMintNftModal: (e: boolean) => void;
};

export interface ModalsSlice extends State, Actions {}

const initialState: State = {
  isShowMinNftModal: false,
};

export const createModalsSlice: StateCreator<ModalsSlice> = (set) => ({
  ...initialState,
  setShowMintNftModal: (e) => set({isShowMinNftModal: e}),
});
