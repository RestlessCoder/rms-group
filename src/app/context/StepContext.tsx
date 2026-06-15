'use client';

import { StepContextData, StepContextType } from '@/types';
import { createContext, useContext, useState, ReactNode } from 'react';

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepsProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1); // 1: Services, 2: Location/Date, etc.
  const [stepData, setStepData] = useState<StepContextData>({
    service: '',
    location: 'Belfast BT6 8DQ', // Default layout value from your image
    date: 'Thurs 10th Oct 2019',
    amount: 30.00,
  });

  const updateStepData = (data: Partial<StepContextData>) => {
    setStepData((prev) => ({ ...prev, ...data }));
  };

  return (
    <StepContext.Provider value={{ step, setStep, stepData, updateStepData }}>
      {children}
      <button onClick={() => setStep(step - 1)}>Previous Step</button>
      <button onClick={() => setStep(step + 1)}>Next Step</button>
    </StepContext.Provider>
  );
}

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) throw new Error('useStep must be used within StepsProvider');
  return context;
};