import {Get} from "../utils/httpRequest.ts";

export function getUserList() {
    return Get('/user/list');
}