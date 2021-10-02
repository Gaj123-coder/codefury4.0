import { useEffect, useState } from "react";
import Div from "../UI/Div/Div";
import H1 from "../UI/H1/H1";
import Prog from "./pro.module.css";
import useCounter from "../customhooks/useCounter";
import Cd from "../UI/Cd/Cd";
import React from "react";
import Tt from "../UI/title/title";
import Button from "../UI/Button/Button";
const Pro = () => {
  const [cses, setCses] = useState(null);
  const [err, setErr] = useState("");
  const { hr, min, sec } = useCounter({ hr: 2, min: 45, sec: 12 });
  useEffect(() => {
    const exe = async () => {
      try {
        const res = await fetch(
          "https://vlearning-f3f05-default-rtdb.firebaseio.com/Courses/Programming.json"
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
    for (const key in cses["java"]) {
      l1.push(cses["java"][key]);
    }
    for (const key in cses["python"]) {
      l1.push(cses["python"][key]);
    }
  }
  return (
    <React.Fragment>
        <Tt>Speical Offers For Programming Courses Ends In</Tt>
      <Div>
        {cses &&
          l1.map((data) => {
            return (
              <div key={data}>
                <img src={data.img} alt="err" />
                <div></div>
                <H1 className={Prog["pos"]} fontSize="20px">
                  {data.title}
                </H1>
                <H1 col="grey" fontSize="15px" className={Prog["pos"]}>
                  price: ₹{data.price}
                </H1>
                <H1 col="grey" fontSize="15px" className={Prog["pos"]}>
                  rating: {data.rating}
                </H1>
                <Cd
                  className={Prog["pi"]}
                  hr={hr + Math.floor(Math.random() * (8 - 1 + 1)) + 1}
                  min={min}
                  sec={sec}
                />
                <Button width="100px" font="12px" br="12px" className={Prog["posi"]} type="submit" title="Add to Cart"></Button>
              </div>
            );
          })}
      </Div>
    </React.Fragment>
  );
};

export default React.memo(Pro);
