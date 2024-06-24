import React, { createContext, useContext, useMemo } from 'react';

const ConfigContext = createContext({});

export function ConfigProvider({ children, cls }) {
  const value = useMemo(() => {
    return {
      cls,
    };
  }, [cls]);

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}

export function useConfig() {
  return useContext(ConfigContext);
}
