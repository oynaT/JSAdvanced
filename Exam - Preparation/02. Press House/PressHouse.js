function pressHouse() {

    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return [
                `Title: ${this.title}`,
                `Content: ${this.content}`
            ].join(`\n`);
        }
    }
    //As we create a short reports here we have a length limit for the content property – 
    //it should be less than 150 symbols, otherwise throw an error with the next message:
    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            if (content.length >= 150) {
                throw new Error(`Short reports content should be less then 150 symbols.`);
                //The property should have the both required properties , otherwise throw error with this message:
            } else if (originalResearch.hasOwnProperty('title') == false || 
            originalResearch.hasOwnProperty('author') == false) {
                throw new Error(`The original research should have author and title.`);
            }
            super(title, content);
            this.originalResearch = originalResearch;
            this.comments = [];
        }
        //This function should receive single comment like string, add it to the comments array and return a message:
        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.';
        }
        //This function should receive single comment like string, add it to the comments array and return a message:
        toString() {
            const result = [
                super.toString(),
                `Original Research: ${this.originalResearch.title} by ${this.originalResearch.author}`
            ];
            //And if there are any comments you should print on a new line
            if (this.comments.length > 0) {
                //and then all comments each on a new line.
                result.push('Comments:');
                this.comments.forEach(comment => result.push(comment));
            }
            return result.join(`\n`);
        }
    }
    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clinets = [];
        }
    //The client object should have the following structure {clientName, orderDescription}.
        addClient(clientName, orderDescription) {
            //This function should receive clientName and orderDescription as strings. Here you should check 
            //our clients array and if we already have this order from the same client throw error with next message:
            if (this.clinets.find(x => x.clientName == clientName) !== undefined) {
                throw new Error(`This client has already ordered this review.`);
            } else {
                //Otherwise we add our client object into the clients array and return a message:
                this.clinets.push({
                    clientName,
                    orderDescription
                });
                return `${clientName} has ordered a review for ${this.book.name}`;
            }         
        }
        //This function should extend the toString() method of class Article adding same more lines like:
        toString() {
            const result = [
                super.toString(),
                `Book: ${this.book.name}`
            ];
            //And if there are any comments you should print on a new line
            if (this.clinets.length > 0) {
                //and then all comments each on a new line.
                result.push('Orders:');
                this.clinets.forEach(clinetOrder => result.push(`${clinetOrder.clientName} - ${clinetOrder.orderDescription}`));
            }
            return result.join(`\n`);
        }
    }
    return {
        Article,
        ShortReports,
        BookReview
    }
}