export default class UtilServices {
    static generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
    static getLocalStorageData(value) {
        return localStorage.getItem(value);
    }

    static setLocalStorageData(key,values) {
        localStorage.setItem(key, JSON.stringify(values));
    }

}