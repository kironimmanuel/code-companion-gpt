import { useContext } from 'react';
import { FormContext } from './form-context';
import { FromTextAreaProps } from './form.types';

export function FormTextArea({ id, name, className, style, ...restProps }: FromTextAreaProps) {
    const { state, handleChange } = useContext(FormContext);
    return (
        <textarea
            id={`${id}-textarea`}
            name={name}
            className={`form__textarea ${className}`}
            style={style}
            value={(state[name] as string) ?? ''}
            onChange={handleChange}
            {...restProps}
        />
    );
}
