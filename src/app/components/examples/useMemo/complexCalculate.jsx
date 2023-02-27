import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const buttonColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render buttonColor");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>fact {fact}</p>
                <p>value {value}</p>
                <button className="btn btn-primary" onClick={() => setValue(prevState => prevState + 100)}>Increment</button>
                <button className="btn btn-primary" onClick={() => setValue(prevState => prevState - 100)}>decrement</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button className={"btn btn-" + buttonColor} onClick={() => setOtherState(prevState => !prevState)}>Color</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
