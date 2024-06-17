import { Step } from './instruction-step';

export type AnalyzedInstruction = {
  name: string;
  steps: Step[];
};
