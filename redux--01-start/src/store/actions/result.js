import * as actionTypes from './actions.js';

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

// storeResult is now an async function which uses saveResult which is a sync function
export const storeResult = (res) => {
    // we have access to dispatch bc of redux thunk
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    }
};
