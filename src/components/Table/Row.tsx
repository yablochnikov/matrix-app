import React, { FC } from 'react';

import { getClosest, removeHighLight } from '../../helpers/helpers';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actionCreators } from '../../store/store';
interface RowProps {
  row: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number | undefined;
  }[];

  cell: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number | undefined;
  };
}
const Row: FC<RowProps> = ({ row, cell }) => {
  const { numbers } = useTypedSelector((state) => state.changeMatrix);
  const { cells } = useTypedSelector((state) => state.setMatrix);

  return (
    <div
      key={cell.id}
      className={
        cell.isHighLighted === true ? 'table-cell highlighted' : 'table-cell'
      }
      onClick={() => {
        actionCreators.increaseValue(cell.value, cell.id);
      }}
      onMouseEnter={(element) => {
        actionCreators.highLightCells(getClosest(element, cells, { numbers }));
      }}
      onMouseLeave={(e) => {
        actionCreators.removeHighLight(removeHighLight({ numbers }));
        (e.target as HTMLElement).removeAttribute('style');
      }}
      style={
        (cell.value /
          row.reduce((acc: number, cell: { value: number }) => {
            return acc + cell.value;
          }, 0)) *
          100 ===
        cell.percents
          ? {
              background: `linear-gradient(0deg, rgba(255,0,0,1) ${cell.percents}%, rgba(255,255,255,1)${cell.percents}%)`,
            }
          : {}
      }
    >
      {(cell.value /
        row.reduce((acc: number, cell: { value: number }) => {
          return acc + cell.value;
        }, 0)) *
        100 ===
      cell.percents
        ? Math.floor(cell.percents) + '%'
        : cell.value}{' '}
    </div>
  );
};

export default Row;
