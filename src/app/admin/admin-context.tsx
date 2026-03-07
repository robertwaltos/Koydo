"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type AdminContextType = {
  activeView: string;
  setActiveView: (view: string) => void;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [activeView, setActiveView] = useState("Platform Overview");

  return (
    <AdminContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
