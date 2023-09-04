import React, { useState, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react';
import { easeInOut } from 'framer-motion';

const LoadingIndicator = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading process (for demonstration purposes)
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div>
      {true && (
        <Spinner thickness={4} size="xl" color="violet" />
      )}
    </div>
  );
};

export default LoadingIndicator;
