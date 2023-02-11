class Movie {
    constructor(name, price) {
        this.movieName = name;
        this.ticketPrice = Number(price);
        this.screenings = [];
        this._totalProfit = 0;
        this._totalSoldTickets = 0;
    }

    newScreening(date, hall, description) {
        if (this.screenings.some(s => s.date == date && s.hall == hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        this.screenings.push({ date, hall, description });

        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        let screening = this.screenings.find(s => s.date == date && s.hall == hall);
        if (screening == undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        let index = this.screenings.indexOf(screening);
        this.screenings.splice(index, 1);
        let currentProfit = soldTickets * this.ticketPrice;
        this._totalProfit += currentProfit;
        this._totalSoldTickets += soldTickets;

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;

    }

    toString() {

        let result = [];
        result.push(`${this.movieName} full information:`);
        result.push(`Total profit: ${this._totalProfit.toFixed(0)}$`);
        result.push(`Sold Tickets: ${this._totalSoldTickets}`);

        if (this.screenings.length == 0) {
            result.push("No more screenings!");
        } else {
            result.push("Remaining film screenings:");
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall))
                .forEach(s => result.push(`${s.hall} - ${s.date} - ${s.description}`));
        }
        return result.join('\n');
    }
}