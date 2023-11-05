import React from 'react';
import { CharAmountProps } from '../interfaces/chars-amount-props';

function CharsPerPage({ setCharAmount }: CharAmountProps) {
  const makeCharsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCharAmount(event.target.value);
  };

  return (
    <select className="chars-amount" onChange={makeCharsPerPageChange}>
      <option value="20">20</option>
      <option value="15">15</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  );
}

export default CharsPerPage;
