import { Injectable } from '@nestjs/common';
import * as userData from 'data.json';

@Injectable()
export class CommsService {
  getHello(): string {
    return 'Hello World!';
  }

  getAssociatedInfo(id: string): any {
    let foundUserData = userData.find((element) => element.id === id);
    //NEED CASE WHERE FIND DOESNT WORK
    // console.log(foundUserData);

    // TESTING
    // 1 cat 618f4ed6-1c5b-4993-a149-f64700bf31dd
    // 2 cats 1 active 749cf471-3747-40c6-9a38-f6e94242c4a2
    // 2 cats both active 33b449a6-d92b-4609-9910-69a8979a04b2
    // 3 cats all active ea17433d-7527-45a5-acbc-2e2f78f95c6e

    const firstName = foundUserData?.firstName;
    // console.log(firstName);
    const catsArray = foundUserData?.cats;
    let catsNameArray: string[] = [];
    let catsPouchSizesArray: string[] = [];
    let activeCatCounter = 0;
    catsArray?.forEach((oneCat) => {
      if(oneCat.subscriptionActive === true)
      {
        catsNameArray.push(oneCat.name);
        catsPouchSizesArray.push(oneCat.pouchSize);
        activeCatCounter++;
      }
    });
    // console.log(catsNameArray);
    // console.log(catsPouchSizesArray);
    // console.log(activeCatCounter);
    let catNamesString: string = '';
    let totalPriceCalc: number = 0;
    //easiest case
    if(activeCatCounter === 1){
      catNamesString = catsNameArray[0];
      switch(catsPouchSizesArray[0]){
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
    //multiple cats
    else{
      for(let x = 0; x < activeCatCounter; x++) {
        let currentCatName = catsNameArray[x];
        if(x === 0)
        {
          catNamesString = 'and ' + currentCatName;
        }
        else if(x === 1)
        {
          catNamesString = currentCatName + ' ' + catNamesString;
        }
        else{
          catNamesString = currentCatName + ', ' + catNamesString;
        }
        switch(catsPouchSizesArray[x]){
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
    // console.log(catNamesString);
    // console.log(totalPriceCalc);

    const title: string = "Your next delivery for " + catNamesString;
    const message: string = " Hey " + firstName + "! In two days' time, we'll be charging you for your next order for " + catNamesString + "'s fresh food.";
    const totalPrice: number = totalPriceCalc;
    const freeGift: boolean = totalPriceCalc >= 120.0 ? true : false;
    // console.log(title);
    // console.log(message);
    // console.log(totalPrice);
    // console.log(freeGift);

   const returnBody =  {
    title: title,
    message: message,
    totalPrice: totalPrice,
    freeGift: freeGift
   };
   return returnBody;

    // if(foundUserData !== undefined)
    // {
    //   return true;
    // }
    // else
    // {
    //   return false;
    // }

  };

}
