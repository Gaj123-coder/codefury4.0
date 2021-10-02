import { useEffect, useState } from "react";
import Div from "../UI/Div/Div";
import H1 from "../UI/H1/H1";
import Progi from "../Programming/pro.module.css";
import useCounter from "../customhooks/useCounter";
import Cd from "../UI/Cd/Cd";
import React from "react";
import Tt from "../UI/title/title";
import Button from "../UI/Button/Button";
const Stat = () => {
  const [cses, setCses] = useState(null);
  const [err, setErr] = useState("");
  const { hr, min, sec } = useCounter({ hr: 4, min: 5, sec: 52 });
  useEffect(() => {
    const exe = async () => {
      try {
        const res = await fetch(
          "https://vlearning-f3f05-default-rtdb.firebaseio.com/Courses/Statistics.json"
        );
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        setCses(data);
      } catch (error) {
        setErr("Something went wrong!");
      }
    };
    exe();
  }, []);
  let l1 = [];
  if (cses) {
    for (const key in cses["Complete stat"]) {
      l1.push(cses["Complete stat"][key]);
    }
    for (const key in cses["Stat for ML"]) {
      l1.push(cses["Stat for ML"][key]);
    }
  }
  return (
    <React.Fragment>
        <Tt>Speical Offers For Statistics Courses Ends In</Tt>
      <Div>
        {cses &&
          l1.map((data) => {
            return (
              <div key={data}>
                <img src={data.img} alt="err" />
                <div></div>
                <H1 className={Progi["pos"]} fontSize="20px">
                  {data.title}
                </H1>
                <H1 col="grey" fontSize="15px" className={Progi["pos"]}>
                  price: ₹{data.price}
                </H1>
                <H1 col="grey" fontSize="15px" className={Progi["pos"]}>
                  rating: {data.rating}
                </H1>
                <Cd
                  className={Progi["pi"]}
                  hr={hr + Math.floor(Math.random() * (8 - 1 + 1)) + 1}
                  min={min}
                  sec={sec}
                />
                <Button width="100px" font="12px" br="12px" className={Progi["posi"]} type="submit" title="Add to Cart"></Button>
              </div>
            );
          })}
      </Div>
    </React.Fragment>
  );
};

export default React.memo(Stat);
