import { FormButtonContainerProps } from './form.types';

export function FormButtonContainer({ className, style, children }: FormButtonContainerProps) {
    return (
        <div className={`form__button-container ${className}`} style={style}>
            {children}
        </div>
    );
}
