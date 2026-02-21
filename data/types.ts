export interface Community {
  name: string;
  description: string;
  url: string;
  badge?: string;
}

export interface Superconnector {
  name: string;
  role: string;
  url?: string;
}

export interface EventAggregator {
  name: string;
  description: string;
  url: string;
}

export interface AnnualEvent {
  name: string;
  month: string;
  monthNum: number;
  description: string;
  url: string;
}

export interface Program {
  name: string;
  description: string;
  url: string;
  type: "Accelerator" | "Incubator" | "Fellowship" | "Lab" | "Fund";
  focus?: string;
}

export interface VCFirm {
  name: string;
  description: string;
  url: string;
  stage?: string;
  focus?: string;
}

export interface Angel {
  name: string;
  background: string;
  url?: string;
}

export interface Workspace {
  name: string;
  description: string;
  url: string;
  neighborhood: string;
  type: "Coworking" | "Incubator" | "Lab" | "Office" | "Hub";
}
