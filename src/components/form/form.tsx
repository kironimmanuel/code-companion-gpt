'use client';
import { ChangeEvent, useState } from 'react';
import { FormButton } from './form-button';
import { FormButtonContainer } from './form-button-container';
import { FormCheckBox } from './form-checkbox';
import { FormContext } from './form-context';
import { FormDateInput } from './form-date-input';
import { FormGroup } from './form-group';
import { FormNumberInput } from './form-number-input';
import { FormSelect } from './form-select';
import { FormTextInput } from './form-text-input';
import { FormTextArea } from './form-textarea';
import { FormProps } from './form.types';

type FormWithStoreProps = FormProps & {
    store: {
        state: Record<string, unknown>;
        change: (value: string, name: string) => void;
        clearForm: () => void;
    };
};

export default function Form({ children, id, className, style, store, onSubmitCallback }: FormWithStoreProps) {
    const { state, change: handleStoreChange, clearForm } = store;

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        if (event.target instanceof HTMLInputElement && event.target.type === 'checkbox') {
            const { name, checked } = event.target;
            handleStoreChange(checked ? 'checked' : '', name);
        } else {
            const { name, value } = event.target;
            handleStoreChange(value, name);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmitCallback(event);
        clearForm();
    };

    const handleReset = (event: React.FormEvent) => {
        event.preventDefault();
        clearForm();
    };

    return (
        <FormContext.Provider value={{ state, handleChange }}>
            <form id={`${id}-form`} onSubmit={handleSubmit} onReset={handleReset} className={className} style={style}>
                {children}
            </form>
        </FormContext.Provider>
    );
}

Form.TextInput = FormTextInput;
Form.NumberInput = FormNumberInput;
Form.DateInput = FormDateInput;
Form.Select = FormSelect;
Form.CheckBox = FormCheckBox;
Form.TextArea = FormTextArea;
Form.Button = FormButton;
Form.ButtonContainer = FormButtonContainer;
Form.Group = FormGroup;
