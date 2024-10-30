"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsService = void 0;
const common_1 = require("@nestjs/common");
const userData = require("../data.json");
let CommsService = class CommsService {
    getHello() {
        return 'Hello World!';
    }
    getAssociatedInfo(id) {
        let foundUserData = userData.find((element) => element.id === id);
        const firstName = foundUserData?.firstName;
        const catsArray = foundUserData?.cats;
        let catsNameArray = [];
        let catsPouchSizesArray = [];
        let activeCatCounter = 0;
        catsArray?.forEach((oneCat) => {
            if (oneCat.subscriptionActive === true) {
                catsNameArray.push(oneCat.name);
                catsPouchSizesArray.push(oneCat.pouchSize);
                activeCatCounter++;
            }
        });
        let catNamesString = '';
        let totalPriceCalc = 0;
        if (activeCatCounter === 1) {
            catNamesString = catsNameArray[0];
            switch (catsPouchSizesArray[0]) {
                case 'A':
                    totalPriceCalc += 55.50;
                    break;
                case 'B':
                    totalPriceCalc += 59.50;
                    break;
                case 'C':
                    totalPriceCalc += 62.75;
                    break;
                case 'D':
                    totalPriceCalc += 66.00;
                    break;
                case 'E':
                    totalPriceCalc += 69.00;
                    break;
                case 'F':
                    totalPriceCalc += 71.25;
                    break;
            }
        }
        else {
            for (let x = 0; x < activeCatCounter; x++) {
                let currentCatName = catsNameArray[x];
                if (x === 0) {
                    catNamesString = 'and ' + currentCatName;
                }
                else if (x === 1) {
                    catNamesString = currentCatName + ' ' + catNamesString;
                }
                else {
                    catNamesString = currentCatName + ', ' + catNamesString;
                }
                switch (catsPouchSizesArray[x]) {
                    case 'A':
                        totalPriceCalc += 55.50;
                        break;
                    case 'B':
                        totalPriceCalc += 59.50;
                        break;
                    case 'C':
                        totalPriceCalc += 62.75;
                        break;
                    case 'D':
                        totalPriceCalc += 66.00;
                        break;
                    case 'E':
                        totalPriceCalc += 69.00;
                        break;
                    case 'F':
                        totalPriceCalc += 71.25;
                        break;
                }
            }
        }
        const title = "Your next delivery for " + catNamesString;
        const message = " Hey " + firstName + "! In two days' time, we'll be charging you for your next order for " + catNamesString + "'s fresh food.";
        const totalPrice = totalPriceCalc;
        const freeGift = totalPriceCalc >= 120.0 ? true : false;
        const returnBody = {
            title: title,
            message: message,
            totalPrice: totalPrice,
            freeGift: freeGift
        };
        return returnBody;
    }
    ;
};
exports.CommsService = CommsService;
exports.CommsService = CommsService = __decorate([
    (0, common_1.Injectable)()
], CommsService);
//# sourceMappingURL=comms.service.js.map