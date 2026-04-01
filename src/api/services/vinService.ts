import { api } from '../axios';

const NHTSA_BASE_URL = 'https://vpic.nhtsa.dot.gov/api';

export const vinService = {
  decodeVin: async (vin: string) => {
    const response = await api.get(`${NHTSA_BASE_URL}/vehicles/decodevin/${vin}`, {
      params: { format: 'json' }
    });
    return response.data;
  },

  getVariablesList: async () => {
    const response = await api.get(`${NHTSA_BASE_URL}/vehicles/getvehiclevariablelist`, {
      params: { format: 'json' }
    });
    return response.data;
  }
};