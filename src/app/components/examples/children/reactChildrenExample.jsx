import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";

const FormCommponent = ({ children }) => {
    const [data, setData] = useState({});
    useEffect(() => {
    }, [data]);
    const handleChange = (target) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ""
        };
        return React.cloneElement(child, config);
    });
};

FormCommponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormCommponent>
                <TextField name="email" label="email" />
                <TextField name="password" label="пароль" type="password"/>
            </FormCommponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
