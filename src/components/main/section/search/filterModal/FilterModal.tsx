import { useStore } from '@nanostores/react';

import {
  $isFilterModalOpen,
  setIsFilterModalOpen,
} from '../../../../../stores/FilterModalStore';
import {
  FilterModalStyled,
  Modal,
  ModalHeader,
} from './FilterModalStyled.styled';

const FilterModal = () => {
  const isOpen = useStore($isFilterModalOpen);

  return isOpen ? (
    <FilterModalStyled>
      <Modal>
        <ModalHeader>
          <button onClick={() => setIsFilterModalOpen(false)}>X</button>
        </ModalHeader>
        <h2>Filter</h2>
      </Modal>
    </FilterModalStyled>
  ) : (
    <></>
  );
};

export default FilterModal;
