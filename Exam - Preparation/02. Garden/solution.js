class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }

    this.spaceAvailable -= spaceRequired;
    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0
    });
    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((x) => x.plantName == plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe == true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    plant.ripe = true;
    plant.quantity += quantity;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    //If the plant is not found, throw an Error:
    let plant = this.plants.find((x) => x.plantName == plantName);
    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    //If the plant is not ripe, throw an Error:
    if (plant.ripe == false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    //Otherwise, this function should remove the plant from the 
    //plants array, add it to storage with properties plantName and 
    //quantity, free up the total space that the plant required, and return:
    // "The {plantName} has been successfully harvested."

    this.plants = this.plants.filter((x) => x.plantName != plantName);
    this.storage.push({
      plantName,
      quantity: plant.quantity
    });
    this.spaceAvailable += plant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    //• On the first line:
    //"The garden has { spaceAvailable } free space left."
    let toReturn = `The garden has ${this.spaceAvailable} free space left.\n`;

    //On the second line list all plants that are in the garden ordered alphabetically by plant name ascending in the format:
    //"Plants in the garden: {plant1Name}, {plant2Name}, {…}"
    toReturn += `Plants in the garden: ${this.plants
      .sort((a, b) => a.plantName.localeCompare(b.plantName))
      .map((x) => x.plantName)
      .join(", ")}\n`;

    //On the third line add:
    //If there are no plants in the storage, print:
    //"Plants in storage: The storage is empty."
    //If there are plants in the storage list them in the format:
    //"Plants in storage: {plant1Name} ({plant1Quantity}), {plant2Name}, ({plant2Quantity}), {…}"
    toReturn += `Plants in storage: `;
    if (this.storage.length === 0) {
      toReturn += "The storage is empty.";
    } else {
      let stringsToAdd = [];
      for (let p of this.storage) {
        stringsToAdd.push(`${p.plantName} (${p.quantity})`);
      }
      toReturn += stringsToAdd.join(", ");
    }
    return toReturn;

    // 2nd. way
    const plantsAsString = this.plants.map(plant => plant.plantName).sort((a, b) => a.localeCompare(b));
    const plantRow = `Plants in the garden: ${plantsAsString.join(', ')}`;
    let storageRow = `Plants in storage: The storage is empty.`;
    if (this.storage.length > 0) {
      const storateAsString = this.storage.map(plant => `${plant.plantName} (${plant.quantity})`);
      storageRow = `Plants in storage: ${storateAsString.join(', ')}`;
    }
    return [
      `The garden has ${this.spaceAvailable} free space left.`,
      plantRow,
      storageRow,
    ].join('\n');

  }

}