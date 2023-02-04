import NodeGraph from "components/Charts/NodeGraph";
import React from "react";
import { Node, Edge } from "@/types/Graph";
import Article from "components/report/Article";

type Props = {};

const Report = (props: Props) => {
  const nodes: Node[] = [
    { id: 1, label: "Omkar", group: "group1" },
    { id: 2, label: "Mokshit", group: "group1", font: { size: 25 } },
    { id: 3, label: "Archit", group: "group1" },
    { id: 4, label: "Nahush", group: "group1" },
    { id: 5, label: "Siddhesh", group: "group1" },
    { id: 6, label: "a", group: "group2", font: { size: 25 } },
    { id: 7, label: "b", group: "group2" },
    { id: 8, label: "c", group: "group2" },
    { id: 9, label: "x", group: "group3", font: { size: 25 } },
    { id: 10, label: "y", group: "group3" },
    { id: 11, label: "z", group: "group3" },
  ];
  const edges: Edge[] = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 6, to: 8 },
    { from: 9, to: 10 },
  ];

  return (
    <div className="flex flex-col min-h-screen  mx-8 pt-20 gap-2">
      {/* <Article /> */}
      <div className="my-card h-screen">
        <NodeGraph nodes={nodes} edges={edges} />
      </div>
    </div>
  );
};

export default Report;
