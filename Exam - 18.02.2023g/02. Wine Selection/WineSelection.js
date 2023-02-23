class WineSelection {
    constructor(space) {
        this.space = space;
        this.whines = [];
        this.bill = 0;
    }
    reserveABottle(wineName, wineType, price) {
        if (this.space === this.whines.length) {
            throw Error("Not enough space in the cellar.");
        }
        this.whines.push({
            wineName,
            wineType,
            price,
            paid: false,
        });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
    payWineBottle(wineName, price) {
        //If the book is not found, throw an Error:
        let matchWine = this.whines.find(x => x.wineName === wineName);
        if (matchWine == undefined) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (matchWine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            matchWine.paid = true;
            this.bill += price;
            return `You bought a ${matchWine.wineName} for a ${price}$.`;
        }
    }
    openBottle(wineName) {
        const matchWine = this.whines.find(wine => wine.wineName == wineName);
        if (matchWine == undefined) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }
        if (!matchWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        } else {
            const index = this.whines.indexOf(matchWine);
            this.whines.splice(index, 1);
            return `You drank a bottle of ${wineName}.`;
        }
    }

    cellarRevision(wineType) {
        if (wineType == undefined) {
            let result = [];
            result.push(`You have space for ${this.space - this.whines.length} bottles more.`);
            result.push(`\nYou paid ${this.bill}$ for the wine.`);
            this.whines.sort((a, b) => a.wineName.localeCompare(b.wineName))
            .forEach(wine => result.push(`\n${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.`));
            return result.join('');       
        }else {
            let matchWine = this.whines.find(w => w.wineType == wineType);
            if(matchWine){
                let result = [];
                result.push(`${matchWine.wineName} > ${matchWine.wineType} - ${matchWine.paid ? "Has Paid" : "Not Paid"}.`);
                return result.join('');
            }else{
                throw Error(`There is no ${wineType} in the cellar.`);
            }
        }        
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// You reserved a bottle of Sauvignon Blanc Marlborough White wine.
// You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.
// Uncaught Error Error: Not enough space in the cellar.

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));


// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
