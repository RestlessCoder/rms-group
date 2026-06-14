'use client';

import { StepsProvider } from '@/context/StepContext';
import Header from '@/components/Header';
import FooterProgressBar from '@/components/FooterProgressBar';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <StepsProvider>
      <div id="root">

        <Header />
        
        <main className="page-body">
          {children}
        </main>
        
        <FooterProgressBar />
      </div>
    </StepsProvider>
  );
}