import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { vinDecoderSchema, type VinDecoderFormData } from '../lib/schemas/forms/vin-decoder';
import { useVinHistoryStore } from '../store/vin-history-store';
import { useDecodeVin } from './useDecodeVin';

export const useVinDecoderForm = () => {
  const addToHistory = useVinHistoryStore((state) => state.addToHistory);
  const [submittedVin, setSubmittedVin] = useState('');

  const { data, isFetching, isSuccess, isError } = useDecodeVin(submittedVin);

  const form = useForm<VinDecoderFormData>({
    resolver: zodResolver(vinDecoderSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const { reset } = form;

  useEffect(() => {
    if (isSuccess && data) {
      addToHistory(submittedVin, data);
      reset();
      setSubmittedVin('');
    }
  }, [isSuccess, data, reset]);


  const onSubmit = (formData: VinDecoderFormData) => {
    const uppercaseVin = formData.vin.toUpperCase();
    setSubmittedVin(uppercaseVin);
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isFetching,
    data,
    isError
  };
};