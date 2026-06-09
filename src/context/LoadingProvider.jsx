import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  loading: 0,
  setLoading: (_value) => {},
});

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(0);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

export default LoadingProvider;
