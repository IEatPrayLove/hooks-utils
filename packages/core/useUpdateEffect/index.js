const { useRef, useEffect } = require("react");

/**
 * 忽略初始化监听
 */
const useUpdateEffect = (fn, dep) => {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      fn();
    } else {
      mounted.current = true;
    }
  }, [dep]);
};

export default useUpdateEffect;
