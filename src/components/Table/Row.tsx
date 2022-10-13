import { FC } from 'react';
import classNames from 'classnames';

import { getClosest, removeHighLight } from '../../helpers/helpers';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actionCreators } from '../../store/store';

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
  const { numbers } = useTypedSelector((state) => state.changeMatrix);
  const { cells } = useTypedSelector((state) => state.setMatrix);

  const handleClick = (value: number, id: string) => {
    actionCreators.increaseValue(value, id);
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
    actionCreators.highLightCells(getClosest(event, cells, { numbers }));
  };

  const handleLeave = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    numbers: {
      value: number;
      id: string;
      isHighLighted: boolean;
      percents?: number | undefined;
    }[][],
  ) => {
    actionCreators.removeHighLight(removeHighLight({ numbers }));
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
      key={cell.id}
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
        handleLeave(event, numbers);
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
