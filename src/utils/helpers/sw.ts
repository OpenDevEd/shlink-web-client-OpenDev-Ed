export const forceUpdate = async () => {
  const registrations = await navigator.serviceWorker?.getRegistrations() ?? [];

  for (const registration of registrations) {
    const { waiting } = registration;

    waiting?.addEventListener('statechange', (event) => {
      if ((event.target as any)?.state === 'activated') {
        window.location.reload();
      }
    });

    // The logic that makes skipWaiting to be called when this message is posted is in service-worker.ts
    waiting?.postMessage({ type: 'SKIP_WAITING' });
  }
};
