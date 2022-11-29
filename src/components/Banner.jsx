import { useEffect } from "react";

export const Banner = () => {
  const arr = [1, 2, 3, 4];

  useEffect(() => {
    arr.map((e, i) => {
    //   setInterval(() => {
    //     console.log("e:", arr[i]);
    //   }, 3000);
    });
  }, []);

  return <div>Banner</div>;
};
