import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { VinResult } from '../lib/types/vinResult';

interface VinHistoryItem {
  vin: string;
  data: VinResult[];
  timestamp: number;
}

interface HistoryState {
  history: VinHistoryItem[];
  addToHistory: (vin: string, data: VinResult[]) => void;
}

export const useVinHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      history: [],
      addToHistory: (vin, data) => set((state) => {
        const upperVin = vin.toUpperCase();
        
        const filtered = state.history.filter((item) => item.vin !== upperVin);
        
        const newItem: VinHistoryItem = {
          vin: upperVin,
          data,
          timestamp: Date.now(),
        };

        const newHistory = [newItem, ...filtered].slice(0, 3);
        
        return { history: newHistory };
      }),
    }),
    { 
      name: 'vin-history-storage',
      version: 1
    }
  )
);