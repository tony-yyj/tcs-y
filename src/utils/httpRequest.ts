import axios from "axios";

const  baseURL= 'http://localhost:8080/api';

const instance = axios.create({
    baseURL,
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export function Get(url: string) {
    return instance.get(url);
}
