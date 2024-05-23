import { IBudgetData } from "../../interface";

export interface ITablePagination {
  length: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface IDeleteModalProps {
  data: IBudgetData;
  handleClose: () => void;
  open: boolean;
}
