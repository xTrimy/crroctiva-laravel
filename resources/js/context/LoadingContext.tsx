import React from 'react';

const LoadingContext = React.createContext<{
    isLoading: boolean;
    setLoading?: (loading: boolean) => void;
}>({
    isLoading: false,
});

export default LoadingContext;