import { FC } from 'react';
import uniqid from 'uniqid';

import { actionCreators } from '../../store/store';

interface SumColumnProps {
  row: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number | undefined;
  }[];
}

const SumColumn: FC<SumColumnProps> = ({ row }) => {
  return (
    <span
      className="cell cell__sum"
      onMouseOver={(e) => {
        actionCreators.setPercents(
          Number((e.target as HTMLElement).textContent),
        );
      }}
      onMouseLeave={() => {
        actionCreators.clearPercents();
      }}
    >
      {row.reduce((acc: number, cell: { value: number }) => {
        return acc + cell.value;
      }, 0)}
    </span>
  );
};

export default SumColumn;
