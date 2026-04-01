import { useQuery } from '@tanstack/react-query';
import { vinService } from '../api/services/vinService';
import type { VinResult } from '../lib/types/vinResult';

export const useDecodeVin = (vin: string) => {
  return useQuery({
    queryKey: ['decode-vin', vin],
    queryFn: async () => {
      if (!vin) return null;
      
      const data = await vinService.decodeVin(vin);
      
     const filteredResults = data.Results.filter((item: VinResult) => {
      const val = item.Value?.trim();
      const variable = item.Variable;

      if (!val || val === '' || val.toLowerCase() === 'null' || val === 'Not Applicable') {
        return false;
      }

      const hasErrorInValue = val.toLowerCase().includes('error');
      const hasErrorInVariable = variable.toLowerCase().includes('error');

      if (hasErrorInValue || hasErrorInVariable) {
        return false;
      }

  return true;
});
      return filteredResults as VinResult[];
    },
    enabled: vin.length === 17,
    staleTime: Infinity, 
  });
};