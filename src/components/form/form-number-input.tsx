import { useContext } from 'react';
import { FormContext } from './form-context';
import { FormInputProps } from './form.types';

export function FormNumberInput({ id, name, className, style, ...restProps }: FormInputProps) {
    const { state, handleChange } = useContext(FormContext);
    return (
        <input
            id={`${id}-input`}
            type='number'
            name={name}
            className={`form__input ${className}`}
            style={style}
            value={(state[name] as string) ?? ''}
            onChange={handleChange}
            {...restProps}
        />
    );
}
