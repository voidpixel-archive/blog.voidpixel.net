import * as React from 'react'
import style from './Button.module.scss';

type Props = {
    onClick: () => void;
}

const Button: React.FunctionComponent<Props> =
({
    onClick,
    children
}) => (
    <button
        className={style.button}
        onClick={onClick}
    >{children}</button>
)

export default Button;