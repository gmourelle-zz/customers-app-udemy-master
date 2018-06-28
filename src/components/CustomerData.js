import React from "react";
import CustomersActions from "./CustomersActions";
import PropTypes from "prop-types";

const CustomerData = ({ name, dni, age, onBack }) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Datos del Cliente</h2>
        <div>
          <strong>Nombre</strong>
          <i>{name}</i>
          <strong />
        </div>
        <div>
          <strong>DNI</strong>
          <i>{dni}</i>
          <strong />
        </div>
        <div>
          <strong>Edad</strong>
          <i>{age}</i>
          <strong />
        </div>
      </div>
      <CustomersActions>
        <button onClick={onBack}>Volver</button>
      </CustomersActions>
    </div>
  );
};

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  age: PropTypes.number
};

export default CustomerData;
