function constructionCrew(worker) {
       if(worker.dizziness){
        worker.levelOfHydrated = worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;   
       }
       return worker;
}

function constructionCrew2(worker) {
    //2. spred operator - shallow copy
    if (worker.dizziness) {
        return {
            ...worker, //взима всички ключове и стойности и ги създава в ново обект и 
                        //след запетайката може да добавим нови пропъртита или да модифицираме съществуващите и връщаме //shallow copy 
            //weight: 80,
            //experience: 1,
            //levelOfHydrated: 0,
            //dizziness: true
            levelOfHydrated: worker.weight * 0.1 * worker.experience, // и модифицираме само levelOfHydrated
            dizziness: false,
        }
    }
    return { ...worker }; //ако не се изпълни... shallow copy въщаме обект който нов обект от worker 
}

//3. Тернарен оператор
function constructionCrew3(worker) {
    return worker.dizziness
        ? {
            ...worker,
            levelOfHydrated: worker.weight * 0.1 * worker.experience,
            dizziness: false,
        }
        : { ...worker };
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});

console.log(constructionCrew2({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
console.log(constructionCrew3({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));