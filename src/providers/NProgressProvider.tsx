'use client';

import { useEffect, useRef } from 'react';
import NProgress from 'nprogress';
import { usePathname } from 'next/navigation';

export default function NProgressProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const nProgressStarted = useRef(false);

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      speed: 200,
      easing: 'ease',
      template: '<div class="bar" role="bar"><div class="peg"></div></div>',
    });

    const handleStart = () => {
      NProgress.start();
      nProgressStarted.current = true;
    };

    const handleStop = () => {
      if (nProgressStarted.current) {
        NProgress.done();
        nProgressStarted.current = false;
      }
    };

    if (previousPathname.current !== pathname) {
      handleStart();
      previousPathname.current = pathname;
    }

    handleStop();

    return () => {
      NProgress.done();
      nProgressStarted.current = false;
    };
  }, [pathname]);

  return <>{children}</>;
}
