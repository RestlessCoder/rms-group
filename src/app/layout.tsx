import "@/styles/style.css";

import Script from 'next/script' 
import type { Metadata } from 'next';
import ClientLayoutWrapper from '@/context/ClientLayoutWrapper';

export const metadata: Metadata = {
  title: "RMS Group",
  description: "Whether you are a multi-national retailer or a single site owner we will be able to install, replenish and maintain an ATM. Our unique position in the market, in addition to cash and card we at RMS Group can provide a direct debit management service for your business. Find out how we can help today.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>

        <Script 
          src="./assets/js/jquery.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="./assets/js/app.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
};

export default RootLayout;