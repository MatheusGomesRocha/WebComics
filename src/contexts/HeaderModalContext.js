import React, { createContext, useState } from 'react';

export const HeaderModalContext = createContext(false);

export function HeaderModalContextProvider({children}) {
    const [modalVisible, setModalVisible] = useState(false);
        
    function showModal(value) {
        setModalVisible(value);
    }
    
    return(
        <HeaderModalContext.Provider value={{
            modalVisible,
            showModal
        }}>
            {children}
        </HeaderModalContext.Provider>
    )
}