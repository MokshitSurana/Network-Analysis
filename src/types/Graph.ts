export type Node = {
  id: number;
  label: string;
  group?: string;
  font?: {
    size?: number;
  };
};

export type Edge = {
  from: number;
  to: number;
  arrows?: string;
};
