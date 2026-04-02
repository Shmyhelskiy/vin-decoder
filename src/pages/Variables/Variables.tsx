import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useVehicleVariables } from '../../hooks/useVehicleVariables';
import PageHeader from '../../components/ui/PageHeader/PageHeader';
import styles from './Variables.module.css';
import VariableItem from '../../components/VariableItem/VariableItem';

const Variables: React.FC = () => {
  const { data: variables, isLoading, isError } = useVehicleVariables();
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = React.useDeferredValue(searchTerm);

  const filteredVariables = React.useMemo(() => 
    variables?.filter((variable) => {
      const lowerSearch = deferredSearchTerm.toLowerCase();
      return (
        variable.Name.toLowerCase().includes(lowerSearch) ||
        variable.GroupName?.toLowerCase().includes(lowerSearch) ||
        variable.Description?.toLowerCase().includes(lowerSearch)
      );
    }),
    [variables, deferredSearchTerm]
  );

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader} />
        <p>Loading variables database...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.errorState}>
        <h2>An error occurred</h2>
        <p>Failed to load the variables list. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <PageHeader
        title="Variables Directory"
        description="Explore all available specifications decoded by our system."
        titleTag="h1"
        size="large"
      />

      <div className={styles.searchWrapper}>
        <Search className={styles.searchIcon} size={20} />
        <input
          type="text"
          placeholder="Search by name, group, or description..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.list}>
        {filteredVariables?.map((variable) => (
          <VariableItem key={variable.ID} variable={variable} />
        ))}
      </div>

      {filteredVariables?.length === 0 && (
        <div className={styles.errorState}>
          <p>No results found for your search.</p>
        </div>
      )}
    </div>
  );
};

export default Variables;
