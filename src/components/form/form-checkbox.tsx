import { useContext } from 'react';
import { FormContext } from './form-context';
import { FormInputProps } from './form.types';

export function FormCheckBox({ id, name, className, style, ...restProps }: FormInputProps) {
    const { state, handleChange } = useContext(FormContext);
    return (
        <input
            id={`${id}-checkbox`}
            type='checkbox'
            name={name}
            className={`form__checkbox ${className}`}
            style={style}
            checked={(state[name] as boolean) ?? false}
            onChange={handleChange}
            {...restProps}
        />
    );
}
