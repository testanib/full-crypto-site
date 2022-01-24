import React, { lazy, Suspense } from 'react';

const LazyCryptoDetails = lazy(() => import('./CryptoDetails'));

const CryptoDetails = props => (
  <Suspense fallback={null}>
    <LazyCryptoDetails {...props} />
  </Suspense>
);

export default CryptoDetails;
