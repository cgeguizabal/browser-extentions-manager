import { create } from "zustand";
import data from "../src/data.json";

const useButtonStore = create((set) => ({
  all: true,
  active: false,
  inactive: false,
  extensionsNew: data.map((item, index) => ({ ...item, id: index })),

  toggleExtension: (id) =>
    set((state) => ({
      extensionsNew: state.extensionsNew.map((ext) =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      ),
    })),

  removeExtension: (id) =>
    set((state) => ({
      extensionsNew: state.extensionsNew.filter((ext) => ext.id !== id),
    })),

  changeAll: () =>
    set((state) => ({ all: true, active: false, inactive: false })),
  changeActive: () =>
    set((state) => ({ all: false, active: true, inactive: false })),
  changeInactive: () =>
    set((state) => ({ all: false, active: false, inactive: true })),
}));

export default useButtonStore;
