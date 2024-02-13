import { HTTP as Axios } from "../Http";

export default class ElementService {
    static getElements() {
        return Axios.get(`elements`);
    }

    static lookups() {
        return Axios.get(`lookups`);
    }

    static saveElement(data) {
        return Axios.post(`elements`, { id, name, code });
    }
}