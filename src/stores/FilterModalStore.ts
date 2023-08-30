import { atom } from 'nanostores';

export const $isFilterModalOpen = atom<boolean>(false);

export const setIsFilterModalOpen = (isOpen: boolean) => {
  $isFilterModalOpen.set(isOpen);
};
