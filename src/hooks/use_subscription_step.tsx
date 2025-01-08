import { useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";

interface UseSubscriptionStepReturn {
  next: () => void;
  previous: () => void;
  current: number;
  navigateTo: (number: number) => void;
}

export function useSubscriptionStep(): UseSubscriptionStepReturn {
  const location = useLocation();
  const navigate = useNavigate();

  //current should actualise every time location.pathname change
  const current = useMemo(() => {
    const match = location.pathname.match(/step(\d+)$/);
    return match ? Math.max(1, Number(match[1])) : 1;
  }, [location.pathname]);

  const next = () => {
    navigate(`/subscription/step${current + 1}`);
  };

  const previous = () => {
    if (current > 1) {
      navigate(`/subscription/step${current - 1}`);
    }
  };

  const navigateTo = (stepNumber: number) => {
    navigate(`/subscription/step${stepNumber}`);
  };

  return {
    next,
    previous,
    current,
    navigateTo,
  };
}
