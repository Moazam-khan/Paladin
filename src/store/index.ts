import {mountStoreDevtool} from 'simple-zustand-devtools';
import {create} from 'zustand';
// import {persist} from 'zustand/middleware';
import {createSelectors} from './createSelectors';
import {createModalsSlice, type ModalsSlice} from './slices/modals';
import {createUserSlice, type UserSlice} from './slices/user';

interface IStore extends UserSlice, ModalsSlice {}

export const useStore = create<IStore>((...a) => ({
  ...createUserSlice(...a),
  ...createModalsSlice(...a),
}));

//to persist the store you need to add the persist middleware
// export const useStore = create<IStore>(
//   persist(
//     (set, get) => ({
//       ...createUserSlice(set, get),
//       ...createModalsSlice(set, get),
//     }),
//     {
//       name: 'zustand-store',
//     }
//   )
// );

mountStoreDevtool('ZuStandStore', useStore);

export const useSelector = createSelectors(useStore);
