import { FC } from 'react';

import { useAppDispatch } from '../../hooks/useTypedSelector';
import { changeMatrixSlice } from '../../store/reducers/changeMatrixSlice';

interface SumColumnProps {
  row: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number | undefined;
  }[];
}

const SumColumn: FC<SumColumnProps> = ({ row }) => {
  const dispatch = useAppDispatch();

  const { setPercents, clearPercents } = changeMatrixSlice.actions;

  return (
    <span
      className="cell cell__sum"
      onMouseOver={(e) => {
        dispatch(setPercents(Number((e.target as HTMLElement).textContent)));
      }}
      onMouseLeave={() => {
        dispatch(clearPercents(null));
      }}
    >
      {row.reduce((acc: number, cell: { value: number }) => {
        return acc + cell.value;
      }, 0)}
    </span>
  );
};

export default SumColumn;
