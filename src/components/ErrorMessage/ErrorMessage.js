import React from 'react'

const ErrorMessage = ({ children }) => {
    return (
        <div style={{
            width: '100%',
            padding: 10,
            marginBottom: 10,
            borderRadius: 4,
            backgroundColor: 'orangered',
            textAlign: 'center',
            textTransform: 'capitalize',
            color: 'white',
            fontSize: 20
        }}>
            {children}
        </div>
    )
}

export default ErrorMessage