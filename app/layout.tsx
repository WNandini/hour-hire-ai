import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

export const metadata: Metadata = {
  title: 'HourHire - AI-Powered Career Matching',
  description: 'Upload your resume and let AI match you with relevant tech jobs.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="app-wrapper">
          <Header />
          <main className="main-layout-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}