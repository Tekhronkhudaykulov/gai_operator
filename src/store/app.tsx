import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../helpers/requests";

interface StateAction {
  getList: () => Promise<any>;
  getListById: () => Promise<any>;
  operatorSendData: () => Promise<any>;
  list: [];
  listLoading: boolean;
  listById: {
    id: number;
    category_id: number;
    number: string;
  };
}

const initialState: StateAction = {
  getList: async () => {},
  getListById: async () => {},
  operatorSendData: async () => {},

  list: [],
  listById: {
    id: 0,
    category_id: 0,
    number: "",
  },
  listLoading: false,
};

const categoryStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    getList: async () => {
      set({ listLoading: true });
      try {
        const { data } = await requests.fetchOperator();
        set({ list: data.data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ listLoading: false });
      }
    },
    getListById: async (id: any) => {
      set({ listLoading: true });
      try {
        const { data } = await requests.fetchOperatorById(id);
        set({ listById: data.data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ listLoading: false });
      }
    },
    operatorSendData: async (id: any) => {
      set({ listLoading: true });
      try {
        const { data } = await requests.sendDataOperator(id);
        set({ listById: data.data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ listLoading: false });
      }
    },
  }))
);

export default categoryStore;
