class VeterinaryClinic {

    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0; 
        this.currentWorkload = 0;
    }

    getClient(ownerName) {
        let client = this.clients.find(oName => oName.ownerName == ownerName);
        return client;
    }
    getPet(owner, petName) {

        if (!owner) {
            return;
        }
        return owner.pets.find(x => x.petName == petName);
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload >= this.capacity) {
            throw new Error(`Sorry, we are not able to accept more patients!`);
        }

        //let currentOwner = this.clients.find(oName => oName.ownerName == ownerName);
        let currentOwner = this.getClient(ownerName);
        let currentPet = this.getPet(currentOwner, petName);
        //if (currentOwner && currentOwner.pets.some(op => op.petName === petName)) {
        if (currentOwner && currentPet) {
            //let pet = currentOwner.pets.find(pet => pet.petName === petName);
            //let pet = this.getPet(currentOwner, petName);
            if (currentPet.procedures.length > 0) {
                throw new Error(`This pet is already registered under ${currentOwner.ownerName} name! ${currentPet.petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`);
            } else {
                currentPet.procedures = procedures;
            }
        } else if (!currentOwner) {
            currentOwner = {
                ownerName,
                pets: [],
            };
            this.clients.push(currentOwner);
        }
        //add pet to owner
        currentOwner.pets.push({
            petName,
            kind,
            procedures,
        });

        this.currentWorkload++;
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        let currentOwner = this.getClient(ownerName);
        if (!currentOwner) {
            throw new Error(`Sorry, there is no such client!`);
        }
        let currentPet = this.getPet(currentOwner, petName);
        if (!currentPet || currentPet.procedures.length == 0) {
            throw new Error(`Sorry, there are no procedures for ${currentPet.petName}!`);
        }

        this.totalProfit += currentPet.procedure.length * 500;
        this.currentWorkload--;
        currentPet.procedures = [];
        return `Goodbye ${currentPet.petName}. Stay safe!"`;
    }

    toString(){
        let percentage = Math.floor(this.capacity / this.currentWorkload);
        result = `${this.clinicName} is ${percentage}% busy today!`;
        result += `\n`;
        result += `Total profit: ${this.totalProfit.toFixed(2)}$"`;

        this.clients.sort((a,b) => a.ownerName.localeCompare(b.ownerName));
        for (const client of this.clients) {
            client.pets.sort((a,b) => a.petName.localeCompare(b.petName));
            result += `\n`;
            result += `${client.ownerName} with:`;
            for (const pet of client.pets) {
                result += `\n`;  
                result += `---${pet.petName} a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}`;
            }
        }
        return result;
    } 

}



let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());


class VeterinaryClinic2{
    constructor(clinicName, capacity){
        this.clinicName=clinicName
        this.capacity=capacity
        this.clients=[]
        this.totalProfit=0
        this.currentWorkload=0
        this.pets=0
    }
 
    newCustomer(ownerName, petName, kind, procedures){
            
        if(this.pets==this.capacity){
            
            throw new Error('Sorry, we are not able to accept more patients!')
        }
        else{
            let owner=this.clients.find(c=>c.name==ownerName)
 
            if(owner===undefined){
                
                owner={
                    name: ownerName,
                    pets: []
                }
                this.clients.push(owner)
            }
            let pet=owner.pets.find(p=>p.name===petName)
 
            if(pet===undefined || pet.procedures.length==0){
                
                if(pet===undefined){
                    pet={
                        name: petName,
                        kind: kind.toLowerCase(),
                        owner: ownerName,
                        procedures: [],
                    }
                    owner.pets.push(pet)
                }
                pet.procedures=procedures
                this.pets++
                this.currentWorkload=(this.pets/this.capacity)*100
                return `Welcome ${petName}!`
            }
            else{
 
               throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.procedures.join(', ')}`)
            }
        }
    }
    
    onLeaving(ownerName, petName){
        let client=this.clients.find(c=>c.name===ownerName)
        
        if(client===undefined){
            
            throw new Error('Sorry, there is no such client!')
        }
        else{
            
            let pet=client.pets.find(p=>p.name===petName)
            
            if(pet===undefined || pet.procedures.length===0){
                
                throw new Error(`Sorry, there are no procedures for ${petName}!`)
            }
            else{
                
                this.totalProfit+=(pet.procedures.length)*500
                pet.procedures=[]
                this.pets--
                this.currentWorkload=(this.pets/this.capacity)*100
                return `Goodbye ${petName}. Stay safe!`
            }
        }
    }
    toString(){
        let output=[
            `${this.clinicName} is ${Math.floor(this.currentWorkload)}% busy today!`,
            `Total profit: ${this.totalProfit.toFixed(2)}$`,
        ]
        this.clients.sort((a, b)=>(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        .forEach(c => {
            output.push(`${c.name} with:`)
            c.pets.sort((a, b)=> (a.name>b.name)? 1 : ((b.name>a.name)?-1:0)).forEach(p=>{
                output.push(`---${p.name} - a ${p.kind} that needs: ${p.procedures.join(', ')}`)
            })
        });
        return output.join('\n')
    }
}