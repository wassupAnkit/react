import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IDeleteModalProps } from "./interface";
import { BudgetHelper } from "../../helper";
import { useBudgetStore } from "../../store";
import { useStatisticsStore } from "../../../../components/stats/store";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<
      JSX.Element,
      React.JSXElementConstructor<unknown>
    >;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteModal = ({ open, data, handleClose }: IDeleteModalProps) => {
  // classes
  const budgetClass = React.useMemo(() => new BudgetHelper(), []);

  // stores
  const { setBudgets } = useBudgetStore(); // Destructure values from useBudgetStore store
  const { setSummary } = useStatisticsStore(); // Destructure values from useStatisticsStore store

  // handlers
  const handleDelete = (id: string) => {
    budgetClass.deleteBudget(id, setBudgets, setSummary); // Call the deleteBudget method of BudgetHelper class with id and setBudgets as arguments
    handleClose(); // Close the modal
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
      >
        <DialogTitle>Delete {data?.name}</DialogTitle>
        <DialogContent>
          <div className="">
            <h4 className="mb-1 text-lg">
              Are you sure you want to delete {data?.name}?
            </h4>
            <p>This will delete {data?.name} permanently.</p>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="px-4 py-2 text-lg font-semibold text-white rounded bg-[#2e2e2e] hover:shadow-lg"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-lg font-semibold text-white bg-red-500 rounded hover:shadow-lg"
            onClick={() => handleDelete(data?.id)}
          >
            Delete
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteModal;
