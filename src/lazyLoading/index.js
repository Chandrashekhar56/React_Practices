import React, { lazy, Suspense } from 'react';

const Component1 = lazy(() => delayForDemo(import('./Component1')));
const Component2 = lazy(() => delayForDemo(import('./Component2')));

function delayForDemo(importPromise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(importPromise);
    }, 2000);
  });
}

function LazyLoading() {
  return (
    <>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Component1 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Component2 />
      </Suspense>
    </>
  );
}

export default LazyLoading;

