import * as data from '../assets/test.json';
import {convertCoorinates} from '../common/utils';

class DataService {
    constructor() {
        this.allExhibitors = [];
        this.allStands = [];
    }

    getAllExhibitors() {
        const parsedData = data;
        console.log(data);
        const exhibitors = parsedData.event.exhibitors;
        this.allExhibitors = exhibitors;

        return this.allExhibitors;
    }

    getAllStands() {
        if (!this.allStands.length) this.calculateExhibitorCoords();
        return this.allStands;
    }

    calculateExhibitorCoords() {
        const exhibitors = this.getAllExhibitors();
        if (!exhibitors.length) return;

        exhibitors.map((exhibitor) => {
            if (!exhibitor.stand.polygon_coordinates.length) {
                this.allStands.push({...exhibitor.stand, calculatedCoords: convertCoorinates(exhibitor.stand)});
            }
        })

        return this.allStands;
    }


}

export default new DataService();