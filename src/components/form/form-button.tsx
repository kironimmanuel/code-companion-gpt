import { Button } from '..';
import { FormButtonProps } from './form.types';

export function FormButton({ id, name, className, style, children, ...restProps }: FormButtonProps) {
    return (
        <Button id={`${id}-button`} name={name} className={`form__button ${className}`} style={style} {...restProps}>
            {children}
        </Button>
    );
}
