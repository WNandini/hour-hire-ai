"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type JobContextType = {
  candidate: any;
  setCandidate: (data: any) => void;
  jobs: any[];
  setJobs: (jobs: any[]) => void;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [candidate, setCandidate] = useState<any>(null);
  const [jobs, setJobs] = useState<any[]>([]);

  return (
    <JobContext.Provider
      value={{
        candidate,
        setCandidate,
        jobs,
        setJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error("useJobContext must be used inside JobProvider");
  }

  return context;
};