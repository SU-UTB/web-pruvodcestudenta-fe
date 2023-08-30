import { FilterButtonWrapper } from './FilterButtonWrapper.styled';

interface FilterButtonProps {
  onClick: () => void;
}

const FilterButton = ({ onClick }: FilterButtonProps) => {
  return (
    <FilterButtonWrapper title="filtrovat" onClick={onClick}>
      Filtrovat
      <svg
        width="22"
        height="17"
        viewBox="0 0 22 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1431 1H1.00021"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 8.14288H9.57143"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11 15.2858H8.14286"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </FilterButtonWrapper>
  );
};

export default FilterButton;
