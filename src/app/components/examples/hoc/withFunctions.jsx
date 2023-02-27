import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const onLogin = () => {
        localStorage.setItem("login", "token");
    };

    const onLogOut = () => {
        localStorage.removeItem("login");
    };

    const isAuth = !!localStorage.getItem("login");

    return <>
        <CardWrapper>
            <Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} {...props} />
        </CardWrapper>
    </>;
};

export default withFunctions;
