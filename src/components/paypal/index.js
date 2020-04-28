import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { connect } from 'react-redux';

class Transaction extends Component {
  render() {
    const { amount, onSuccess, currency } = this.props;
    return (
      <div>
        <PayPalButton
          amount={amount}
          onSuccess={(details, data) => onSuccess(details, data, this.props.data.m_month)}
          options={{
            clientId: "Aev407_0jkCraYjgklOkxiIp1p3o75l9h5wN8S3QHU_DElhQsVOMtfQIrRDLsWmoWrcnaZWnttUGSbTZ"
          }}
        />
      </div>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state.show,
  }
};


export default connect(mapStateToProps, null)(Transaction);



