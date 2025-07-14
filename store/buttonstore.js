import { create } from "zustand";

const useButtonStore = create((set) => ({
  all: true,
  active: false,
  inactive: false,
  changeAll: () =>
    set((state) => ({ all: true, active: false, inactive: false })),
  changeActive: () =>
    set((state) => ({ all: false, active: true, inactive: false })),
  changeInactive: () =>
    set((state) => ({ all: false, active: false, inactive: true })),
}));

export default useButtonStore;
