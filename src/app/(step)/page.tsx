"use client";
  
import { StepsProvider, useStep } from '@/context/StepContext';
import StepService from '@/components/steps/StepServices';
import StepCash from '@/components/steps/StepCash';
import StepConfirmation from '@/components/steps/StepConfirmation';
import StepLocationAndDate from '@/components/steps/StepLocationAndDate';

const StepFlowContent = () => {
    const { step } = useStep();

    return (        
        <>
            {step === 1 && <StepService />}
            {step === 2 && <StepLocationAndDate />}
            {step === 3 && <StepCash />}
            {step === 4 && <StepConfirmation />}
        </>
    );
}   

export default StepFlowContent;