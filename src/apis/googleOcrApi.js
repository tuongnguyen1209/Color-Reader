import axiosClient from "./axiosClient";

const googleOcrApi = {
    getText: (param) => {
        const url = process.env.REACT_APP_OCR_API;
        const key = process.env.REACT_APP_OCR_KEY;

        return axiosClient.post(`${url}${key}`, param)
    }
}

export default googleOcrApi;