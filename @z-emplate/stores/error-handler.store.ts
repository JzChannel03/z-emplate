import { ErrorHandlerProps } from "@z-emplate/interfaces/error";
import { create } from "zustand";

interface IErrorListStoreStore {
  errorList: ErrorHandlerProps[];
  addError: (error: ErrorHandlerProps) => void;
  orderByAlertType: () => void;
  getFirstError: () => ErrorHandlerProps | null;
}

const useErrorListStore = create<IErrorListStoreStore>()((set, get) => ({
  errorList: [],

  addError: (error: ErrorHandlerProps) => {
    set((state) => ({
      errorList: [...state.errorList, error],
    }));
    get().orderByAlertType();
  },

  orderByAlertType: () => {
    const priority = {
      fatal: 1,
      error: 2,
      warning: 3,
      info: 4,
    };

    set((state) => ({
      errorList: state.errorList.sort((a, b) => {
        return priority[a.error.alertType] - priority[b.error.alertType];
      }),
    }));
  },

  getFirstError: () => {
    const errorList = get().errorList;
    return errorList.length > 0 ? errorList[0] : ({} as ErrorHandlerProps);
  },
}));

export default useErrorListStore;
