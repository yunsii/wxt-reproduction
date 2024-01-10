import React from "react";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { enableMapSet } from "immer";

enableMapSet();

type State = {
  count: number;
  map: Map<string, any>;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
  setMap: () => void;
};

const initialState: State = {
  count: 0,
  map: new Map(),
};

export const useCountStore = create<State & Actions>()(
  immer((set, get) => ({
    ...initialState,
    increment: (qty: number) =>
      set((state) => {
        state.count += qty;
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count -= qty;
      }),
    setMap: () => {
      set((state) => {
        state.map.set("helle", "world");
      });
    },
  }))
);

const App: React.FC = () => {
  const store = useCountStore();

  return (
    <>
      <h2>Zustand</h2>
      <p>Count: {store.count}</p>
      <div>
        <button
          onClick={() => {
            store.increment(1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            store.decrement(1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            console.log(store.map);
          }}
        >
          getMap
        </button>
        <button
          onClick={() => {
            store.setMap();
          }}
        >
          setMap
        </button>
      </div>
    </>
  );
};

export default App;
