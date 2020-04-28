import { SHOW_MODAL, HIDE_MODAL, TYPE_OF_MODAL, PAYPAL_AMOUNT, MEMBERSHIP_MONTH, CURRENT_BILLING_PACKAGE } from './type'

export default (state = [], action) => {

    switch (action.type) {
        case SHOW_MODAL:
            return { ...state, show: action.displayModal };
        case HIDE_MODAL:
            return { ...state, show: action.displayModal };
        case TYPE_OF_MODAL:
            return { ...state, type: action.payload };
        case PAYPAL_AMOUNT:
            return { ...state, amount: action.payload };
        case MEMBERSHIP_MONTH:
            return { ...state, m_month: action.payload };
        case CURRENT_BILLING_PACKAGE:
            return { ...state, curr_package: action.payload };
        default:
            return state;
    }
}