import { useEffect, useState } from "react";

const CountDown = () => {
  const [countDown, setCountDown] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = new Date("2023-08-20") - new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
      };
    }
    return timeLeft;
  }

  return (
    <div className="flex items-center">
      {Object.keys(countDown).map((interval) => {
        if (!countDown[interval]) {
          return null;
        }
        return (
          <div
            key={interval}
            className="text-[25px] text-[#475ad2] flex flex-col items-center"
          >
            <span className="text-4xl">{countDown[interval]}</span>
            <span className="text-xs p-2">{interval}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CountDown;
