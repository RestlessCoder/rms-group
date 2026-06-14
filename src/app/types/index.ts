export type StepContextData = {
  service: string;
  location: string;
  date: string;
  amount: number;
};

export type StepContextType = {
  step: number;
  setStep: (step: number) => void;
  stepData: StepContextData;
  updateStepData: (data: Partial<StepContextData>) => void;
};
