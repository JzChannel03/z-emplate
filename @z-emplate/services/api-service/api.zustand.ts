import { create } from "zustand";

interface ApiStore {
  apiUrl: string;
  setUrl: (apiUrl: string) => void;
  config: {
    token?: string;
  };
  setConfig: (config: { token?: string }) => void;
}

export const useApiStore = create<ApiStore>()((set) => ({
  apiUrl: "",
  config: {
    token: undefined,
  },
  setConfig: (config: { token?: string }) => set({ config }),
  setUrl: (apiUrl: string) => set({ apiUrl }),
}));
