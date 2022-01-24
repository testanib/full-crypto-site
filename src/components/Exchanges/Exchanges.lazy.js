import React, { lazy, Suspense } from 'react';

const LazyExchanges = lazy(() => import('./Exchanges'));

const Exchanges = props => (
  <Suspense fallback={null}>
    <LazyExchanges {...props} />
  </Suspense>
);

export default Exchanges;
