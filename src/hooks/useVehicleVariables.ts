import { useQuery } from '@tanstack/react-query';
import { vinService } from '../api/services/vinService';
import type { VehicleVariable } from '../lib/types/vehicleVariable';

export const useVehicleVariables = () => {
  return useQuery({
    queryKey: ['vehicle-variables'],
    queryFn: async () => {
      const data = await vinService.getVariablesList();
      return data.Results as VehicleVariable[];
    },
    staleTime: 24 * 60 * 60 * 1000,   
  });
};
