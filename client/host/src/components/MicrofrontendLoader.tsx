import React, { Suspense, lazy } from "react";

// Создайте отдельный компонент для ленивой загрузки
export default function MicrofrontendLoader({
  remoteName,
  moduleName,
  fallback = null,
}: {
  remoteName: string;
  moduleName: string;
  fallback?: React.ReactNode;
}) {
  const Component = lazy(() => import(`${remoteName}/${moduleName}`));

  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
}
// Использование в App.tsx
{
  /* <MicrofrontendLoader remoteName="home" moduleName="App" />; */
}
