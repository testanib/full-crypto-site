import React, { lazy, Suspense } from 'react';

const LazyCryptocurrencies = lazy(() => import('./Cryptocurrencies'));

const Cryptocurrencies = props => (
  <Suspense fallback={null}>
    <LazyCryptocurrencies {...props} />
  </Suspense>
);

export default Cryptocurrencies;
