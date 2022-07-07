import { ChangeEvent, ChangeEventHandler } from 'react';
import './search-box.styles.css';

// const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {}

// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string;
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void;
// }

// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string;
// }

// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void;
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // func: ChangeEventHandler;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ 
  className, 
  placeholder, 
  onChangeHandler 
  }: SearchBoxProps) => (
  <input 
    className={`search-box ${className}`}
    type="search" 
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;