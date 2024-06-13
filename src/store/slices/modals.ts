import type {StateCreator} from 'zustand';

type State = {
  buyNftModalData: {
    isOpen?: boolean;
    address?: string;
    amount?: number;
  };
};

type Actions = {
  setBuyNftModal: (e: State['buyNftModalData']) => void;
};

export interface ModalsSlice extends State, Actions {}

const initialState: State = {
  buyNftModalData: {
    isOpen: false,
  },
};

export const createModalsSlice: StateCreator<ModalsSlice> = (set, get) => ({
  ...initialState,
  setBuyNftModal: (e) =>
    set({
      buyNftModalData: {
        ...get().buyNftModalData,
        ...e,
      },
    }),
});
