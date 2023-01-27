function distributeGifts(packOfGifts, reindeers) {
    let reind = 0;
     let gift = 0;
     let nGift = 0;
     reindeers.forEach(element => {
         reind += element.length * 2;
     });
 
     packOfGifts.forEach(element => {
         gift += element.length;
     });
 
     nGift = reind / gift;
     return Math.floor(nGift);
 }