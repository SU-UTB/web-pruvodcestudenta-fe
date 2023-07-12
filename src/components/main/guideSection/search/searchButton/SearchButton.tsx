import { SearchSubmitButton } from './SearchButton.styled';

const SearchButton = () => {
  return (
    <SearchSubmitButton title="hledat" type="submit">
      <svg
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 17L22 23"
          stroke="#C1C1C1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 9.5C19 14.1467 15.0195 18 10 18C4.98048 18 1 14.1467 1 9.5C1 4.85329 4.98048 1 10 1C15.0195 1 19 4.85329 19 9.5Z"
          stroke="#C1C1C1"
          strokeWidth="2"
        />
      </svg>
    </SearchSubmitButton>
  );
};

export default SearchButton;
