import React, { createContext, useState } from 'react'

export const FormContext = createContext();

export const FormProvider = (props) => {
    const [FormName, setFormName] = useState("");

    return (
        <FormContext.Provider value={[FormName, setFormName]}>
            {props.children}
        </FormContext.Provider>
    );
}
