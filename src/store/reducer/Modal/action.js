import { SHOW_MODAL, HIDE_MODAL, TYPE_OF_MODAL} from './type';

export function show(display) {
    return {
        type: SHOW_MODAL,
        displayModal: display
    };
}
export function hide(display) {
    return {
        type: HIDE_MODAL,
        displayModal: display
    };
}

export function type(type) {
    return {
        type: TYPE_OF_MODAL,
        payload: type
    };
}
