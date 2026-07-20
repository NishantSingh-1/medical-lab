import { useCallback, useEffect, useState } from "react";

export const useOtpTimer = (initialTime = 30) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timerId = window.setInterval(() => {
      setTimeLeft((currentTime) => currentTime - 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [timeLeft]);

  const resetTimer = useCallback(() => {
    setTimeLeft(initialTime);
    setIsExpired(false);
  }, [initialTime]);

  return { timeLeft, isExpired, resetTimer };
};