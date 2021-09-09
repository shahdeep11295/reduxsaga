import * as type from '../../contants/types';

export function getUsers(payload) {
    return {
        type: type.GET_USERS_REQUESTED,
        payload
    }
}