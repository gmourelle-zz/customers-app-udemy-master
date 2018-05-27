import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name, dni, age}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del Cliente</h2>
                    <div><strong>Nombre</strong><i>{name}</i><strong></strong></div>
                    <div><strong>DNI</strong><i>{dni}</i><strong></strong></div>
                    <div><strong>Edad</strong><i>{age}</i><strong></strong></div>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default CustomerData;