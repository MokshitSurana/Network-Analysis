"use client";
import { Edge, Node } from "@/types/Graph";
import React, { useState } from "react";
// @ts-ignore
import Graph from "react-graph-vis";

type Props = {
  nodes: Node[];
  edges: Edge[];
};
const options = {
  autoResize: true,
  layout: {
    hierarchical: false,
  },
  edges: {
    color: "#000000",
  },
};

function randomColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  return `#${red}${green}${blue}`;
}

const NodeGraph = (props: Props) => {
  const [state, setState] = useState({
    counter: 5,
    graph: {
      nodes: props.nodes,
      edges: props.edges,
    },
    events: {
      // @ts-ignore
      select: ({ nodes, edges }) => {},
      // @ts-ignore
      doubleClick: ({ pointer: { canvas } }) => {},
    },
  });
  const { graph, events } = state;
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default NodeGraph;