import React from 'react';
import { Search } from 'lucide-react';
import styles from './VinForm.module.css';
import { Input } from '../../../components/ui/Input/Input';
import Button from '../../../components/ui/Button/Button';
import PageHeader from '../../../components/ui/PageHeader/PageHeader';
import { useVinDecoderForm } from '../../../hooks/useVinDecoderForm';
import { Alert } from '../../../components/ui/Alert/Alert';

const VinForm: React.FC = () => {
  const { form, onSubmit, isFetching, isAlreadyInHistory } = useVinDecoderForm();
  const { register, formState: { errors } } = form;
  
  return (
    <div className={styles.formContainer}>
      <PageHeader
        title="VIN Decoder"
        description="Get a complete vehicle report using its identification number (VIN)."
        titleTag="h2"
        size="small"
      />

      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <Input
            {...register('vin')}
            type="text"
            placeholder="ENTER VIN"
            autoComplete="off"
            maxLength={17}
            error={errors.vin?.message}
            disabled={isFetching}
          />
          
          {errors.vin && (
            <Alert type="error">
              {errors.vin.message}
            </Alert>
          )}

          {isAlreadyInHistory && !errors.vin && (
            <Alert type="info">
              This VIN is already in history.
            </Alert>
          )}
        </div>

        <Button type="submit" isLoading={isFetching}>
            <>
              <Search size={18} />
              <span>DECODE</span>
            </>
        </Button>
      </form>
    </div>
  );
};

export default VinForm;
