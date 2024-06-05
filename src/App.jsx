import ReactFlow, { Background } from "reactflow";
import "./App.css";
import { shallow } from "zustand/shallow";

import { useStore } from "./store";

import Osc from "./nodes/Osc";

const selector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  addEdge: store.addEdge,
});

const nodeTypes = {
  osc: Osc,
};

function App() {
  const store = useStore(selector, shallow);
  return (
    <ReactFlow
      nodes={store.nodes}
      edges={store.edges}
      nodeTypes={nodeTypes}
      onNodesChange={store.onNodesChange}
      onEdgesChange={store.onEdgesChange}
      onConnect={store.addEdge}
    >
      <Background />
    </ReactFlow>
  );
}

export default App;
