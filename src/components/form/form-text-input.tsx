import { useContext } from 'react';
import { Input } from '..';
import { FormContext } from './form-context';
import { FormInputProps } from './form.types';

export function FormTextInput({ id, name, className, style, ...restProps }: FormInputProps) {
    const { state, handleChange } = useContext(FormContext);
    return (
        <Input
            id={`${id}-input`}
            name={name}
            style={style}
            type='text'
            className={`form__input ${className}`}
            value={(state[name] as string) ?? ''}
            onChange={handleChange}
            {...restProps}
        />
    );
}
