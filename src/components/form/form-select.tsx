import { useContext } from 'react';
import { FormContext } from './form-context';
import { FormSelectProps } from './form.types';

export function FormSelect({
    id,
    name,
    placeholder,
    className,
    style,
    options,
    children,
    ...restProps
}: FormSelectProps) {
    const { state, handleChange } = useContext(FormContext);
    return (
        <select
            id={`${id}-select`}
            name={name}
            className={`form__select ${className}`}
            style={style}
            value={(state[name] as string) ?? ''}
            onChange={handleChange}
            {...restProps}>
            <option value='' disabled>
                {placeholder}
            </option>
            {options?.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
            {children}
        </select>
    );
}
