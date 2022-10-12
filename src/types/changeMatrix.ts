export type IChangeMatrixState = {
  numbers: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number;
  }[][];
};
