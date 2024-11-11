import { useState, useEffect, useRef } from "react";

export const useElementWidth = () => {
  const ref: any = useRef();

  const [width, setWidth] = useState<null | number>(null);

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setWidth(width);
    })
  );

  useEffect(() => {
    const observerCurrent = observer.current;
    const observable = ref.current;

    observerCurrent.observe(observable);
    return () => observerCurrent.unobserve(observable);
  }, [ref, observer]);

  return [ref, width];
};
