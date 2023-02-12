class Movie {
    constructor(name, price) {
        this.movieName = name;
        this.ticketPrice = Number(price);
        this.screenings = [  /*{
            date: string,
            hall: string,
            description: string,
        }*/];
        this._totalProfit = 0;
        this._totalSoldTickets = 0;
    }

    newScreening(date, hall, description) {
        //Check if there is already entered screening with the same date and hall and throw an Error:
        // може с  if (this.screenings.find(s => s.date == date && s.hall == hall) != undefind) {
        if (this.screenings.some(s => s.date == date && s.hall == hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        //Otherwise this function should add the screening to the screenings array and return:
        this.screenings.push({ date, hall, description });

        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        //Check if the screening array has a screening with the given date and hall, if NOT throw an Error
        let screening = this.screenings.find(s => s.date == date && s.hall == hall);
        if (screening == undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
        //Otherwise calculate the current screening profit of sold tickets, add the profit to the total profit for the movie,
        // also add the sold tickets count to the total sold movie tickets, delete the screening from the screenings array and return:
        let index = this.screenings.indexOf(screening);
        this.screenings.splice(index, 1);
        let currentProfit = soldTickets * this.ticketPrice;
        this._totalProfit += currentProfit;
        this._totalSoldTickets += soldTickets;

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
    }

    toString() {
        let result = [];
        //At the first line:
        result.push(`${this.movieName} full information:`);
        //On the second two lines comes the collected profit, fixed to 0 and count of all sold ticke
        result.push(`Total profit: ${this._totalProfit.toFixed(0)}$`);
        result.push(`Sold Tickets: ${this._totalSoldTickets}`);

        //If there are screenings into the screening array, add on new line:
        if (this.screenings.length == 0) {
            //If there are no screenings into screenings array add this line to the returned message:
            result.push("No more screenings!");
        } else {
            //Sort screenings alphabetically by hall name and add a message for each of them on new line:
            result.push("Remaining film screenings:");
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall))
                .forEach(s => result.push(`${s.hall} - ${s.date} - ${s.description}`));
        }
        return result.join('\n');
    }
}