import { useRef, useEffect } from 'react';



type Callback = () => void;
type Dependencies = any[];

const useLegacyEffect = (callback: Callback, dependencies: Dependencies)=> {
  const isMountedRef = useRef(false);
  useEffect(() => {
    if (isMountedRef.current) {
      return callback();
    }
    isMountedRef.current = true;
    return () => { };
  }, dependencies);
}

export default useLegacyEffect