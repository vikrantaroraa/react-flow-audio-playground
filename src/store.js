import { applyNodeChanges, applyEdgeChanges } from "reactflow";
import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  nodes: [
    {
      id: "a",
      type: "osc",
      data: { frequency: 220, type: "square" },
      position: { x: 0, y: 0 },
    },
    {
      id: "b",
      type: "amp",
      data: { gain: 0.5 },
      position: { x: 300, y: 10 },
    },
    {
      id: "c",
      type: "out",
      data: { label: "output" },
      position: { x: 50, y: 200 },
    },
  ],
  edges: [],
  isRunning: false,

  toggleAudio() {
    set({ isRunning: !get().isRunning });
  },

  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange(changes) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  addEdge(data) {
    const id = nanoid(6);
    const edge = { id, ...data };

    set({ edges: [edge, ...get().edges] });
  },

  updateNode(id, data) {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      ),
    });
  },
}));
