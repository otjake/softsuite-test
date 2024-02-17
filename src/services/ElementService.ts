import { HTTP as Axios } from "../Http";
interface ElementData {
    id: number;
    name: string;
    code: string;
}
export default class ElementService {
    static getElements() {
        return Axios.get(`elements`);
    }

    static lookups() {
        return Axios.get(`lookups`);
    }

    static getLookupChildren(lookUpId: number) {
        return Axios.get(`lookups/`+lookUpId+`/lookupvalues`);
    }

    static saveElement(data : ElementData) {
        return Axios.post(`elements`, data);
    }
}