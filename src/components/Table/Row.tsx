import { FC } from 'react';
import classNames from 'classnames';
import uniqid from 'uniqid';

import { getClosest } from '../../helpers/helpers';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { changeMatrixSlice } from '../../store/reducers/changeMatrixSlice';

type RowProps = {
  row: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number;
  }[];

  cell: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number;
  };
};

const Row: FC<RowProps> = ({ row, cell }) => {
  const dispatch = useAppDispatch();
  const numbers = useAppSelector((state) => state.changeMatrixReducer.numbers);
  const cells = useAppSelector((state) => state.setMatrixReducer.cells);

  const { increaseValue, highLightCells, removeHighLight } =
    changeMatrixSlice.actions;

  const handleClick = (value: number, id: string) => {
    dispatch(increaseValue(id));
  };

  const handleEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cells: number,
    numbers: {
      value: number;
      id: string;
      isHighLighted: boolean;
      percents?: number | undefined;
    }[][],
  ) => {
    dispatch(highLightCells(getClosest(event, cells, { numbers })));
  };

  const handleLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(removeHighLight());
    (event.target as HTMLElement).removeAttribute('style');
  };

  const condition =
    (cell.value /
      row.reduce((acc: number, cell: { value: number }) => {
        return acc + cell.value;
      }, 0)) *
      100 ===
    cell.percents;

  return (
    <div
      className={classNames('cell', {
        'cell cell__highlighted': cell.isHighLighted,
      })}
      onClick={() => {
        handleClick(cell.value, cell.id);
      }}
      onMouseEnter={(event) => {
        handleEnter(event, cells, numbers);
      }}
      onMouseLeave={(event) => {
        handleLeave(event);
      }}
      style={
        condition
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
