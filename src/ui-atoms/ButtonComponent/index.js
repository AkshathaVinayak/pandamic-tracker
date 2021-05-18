import React from 'react';


class ButtonComponent extends React.Component {
    render() {
        const { rootCss,
            color,
            value,
            variant,
            handleonclick,
            type,
            Icon,
            iconposition,
            ...rest
        }

            = this.props;
        return (
            <button
                className={rootCss}
                onClick={handleonclick}
                variant={variant}
                color={color}
                type={type}
                defaultValue={value}
                iconPosition={iconposition}
            >{value} {Icon}</button>
        );
    }
}

export default ButtonComponent;