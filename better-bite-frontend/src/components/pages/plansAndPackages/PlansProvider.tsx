"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of our context
interface PlansContextType {
  planType: string;
  setPlanType: (type: string) => void;
  mealPerDay: string[];
  setMealPerDay: (meals: string[]) => void;
  daysOfWeek: string[];
  setDaysOfWeek: (days: string[]) => void;
  totalDays: number;
  setTotalDays: (days: number) => void;
  amount: number;
  setAmount: (price: number) => void;
}

// ✅ Give the context a clear name and explicit generic
const PlansContext = createContext<PlansContextType | undefined>(undefined);

// ✅ Provider component
export function PlansProvider({ children }: { children: ReactNode }) {
  const [planType, setPlanType] = useState("");
  const [mealPerDay, setMealPerDay] = useState<string[]>([]);
  const [daysOfWeek, setDaysOfWeek] = useState<string[]>([
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
  ]);
  const [totalDays, setTotalDays] = useState(30);
  const [amount, setAmount] = useState(4999);

  const value: PlansContextType = {
    planType,
    setPlanType,
    mealPerDay,
    setMealPerDay,
    daysOfWeek,
    setDaysOfWeek,
    totalDays,
    setTotalDays,
    amount,
    setAmount,
  };

  return (
    <PlansContext.Provider value={value}>{children}</PlansContext.Provider>
  );
}

// ✅ Custom hook
export function usePlans() {
  const context = useContext(PlansContext);
  if (!context) {
    throw new Error("usePlans must be used inside a <PlansProvider>");
  }
  return context;
}
