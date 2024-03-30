import { CSSProperties, ReactNode } from 'react';

/**
 * Base properties shared by different form components.
 */
interface BaseProps {
    className?: string;
    style?: CSSProperties;
}

/**
 * Props for the form component.
 */
type FormBasicProps = React.ComponentPropsWithRef<'form'>;
export interface FormProps extends FormBasicProps, BaseProps {
    children: ReactNode;
    onSubmitCallback: (event: React.FormEvent) => void;
    disabled?: boolean;
}

/**
 * Props for the input component within a form.
 */
type InputProps = React.ComponentPropsWithRef<'input'>;
export interface FormInputProps extends InputProps, BaseProps {
    name: string;
}

type TextAreaProps = React.ComponentPropsWithRef<'textarea'>;
export interface FromTextAreaProps extends TextAreaProps, BaseProps {
    name: string;
}

type SelectProps = React.ComponentPropsWithRef<'select'>;
export interface FormSelectProps extends SelectProps, BaseProps {
    name: string;
    placeholder?: string;
    options: readonly { readonly value: string; readonly label: string }[];
}

/**
 * Props for form buttons and other utilities.
 */
type ButtonProps = React.ComponentProps<'button'>;
export interface FormButtonProps extends ButtonProps, BaseProps {
    children: ReactNode;
    ref?: React.RefObject<HTMLButtonElement>;
}

type ButtonContainerProps = React.ComponentProps<'div'>;

export interface FormButtonContainerProps extends ButtonContainerProps, BaseProps {
    children: ReactNode;
}

type GroupProps = React.ComponentProps<'div'>;

export interface FormGroupProps extends GroupProps, BaseProps {
    children: ReactNode;
}
