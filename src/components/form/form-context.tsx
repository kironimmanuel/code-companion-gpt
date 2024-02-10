import React, { createContext } from 'react';

export const FormContext = createContext<{
    state: Record<string, unknown>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}>({
    state: {},
    handleChange: () => {},
});
