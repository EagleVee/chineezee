import Config from "react-native-config";

export const API_ENDPOINT = Config.API_ENDPOINT;
export const APP_ENV = Config.APP_ENV;
export const REQUEST_TIME_OUT = 30000;
export const MAX_FILE_SIZE = 25000000;

console.log("API ENDPOINT:", API_ENDPOINT);
console.log("APP ENV:", APP_ENV);
if (APP_ENV === "production") {
    // console.log = () => {};
}

export const STATUS_OK = 200;
export const STATUS_BAD_REQUEST = 400;
export const STATUS_UNAUTHORIZED = 410;
export const STATUS_NOT_FOUND = 404;
export const STATUS_INTERNAL_SERVER_ERROR = 500;
export const STATUS_BAD_GATEWAY = 502;
export const STATUS_GATE_WAY_TIMEOUT = 504;
