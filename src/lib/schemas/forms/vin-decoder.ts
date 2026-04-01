import { z } from 'zod';

export const vinDecoderSchema = z.object({
    vin: z
        .string()
        .min(1, "Поле не може бути порожнім")
        .length(17, "VIN-код має містити рівно 17 символів")
        .regex(/^[A-HJ-NPR-Z0-9]+$/i, "Введено заборонені символи (I, O, Q або спецсимволи)")
});

export type VinDecoderFormData = z.infer<typeof vinDecoderSchema>;