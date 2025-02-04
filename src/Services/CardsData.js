import UtilServices from "./UtilServices"
import { storage } from "../Constants"

class CardsData {
    constructor() {
        this.CardsData = this.getCardsData() || []
    }
    getCardsData() {
        const getLocalStorage = UtilServices.getLocalStorageData(storage.cards);
        if(getLocalStorage === null) {
            UtilServices.setLocalStorageData(storage.cards,[]);
            return [];
        }
        try {
            return JSON.parse(getLocalStorage);
        } catch (err) {
            return [];
        }
    }
    saveLocal() {
        UtilServices.setLocalStorageData(storage.cards,this.CardsData);
    }
    updateCardsData(cards) {
        this.CardsData = cards;
        this.saveLocal();
    }

}

const cardsData = new CardsData();
export default cardsData;