import { useEffect, useState } from "react"

const useCurrentDate = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        // const time = new Date().toUTCString().replace(" GMT", "");
        setTime(`${date} [${time}]`);
    }, 1000);
    return () => {
        clearInterval(intervalId)
    }
  }, [time]);

  return time;
}

export default useCurrentDate