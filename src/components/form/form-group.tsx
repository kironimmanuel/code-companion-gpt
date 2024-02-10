import { FormGroupProps } from './form.types';

export function FormGroup({ className, style, children }: FormGroupProps) {
    return (
        <div className={`form__group ${className}`} style={style}>
            {children}
        </div>
    );
}
