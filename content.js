function FlapyCheck(totalBudget){
    this.totalBudget = totalBudget;
    this.remainingBudget = totalBudget;
    this.percentageChecker = 0;
    this.updateFlapyReaction();
}

function addItem(price){
    this.remainingBudget -= price;
    this.percentageChecker += price;
    this.updateFlapyReaction();

    return remainingBudget;
}

function determineFlapyReaction(){
    const percentage = (this.percentageChecker / this.totalBudget) * 100;
        let reaction = " ";

        if(percentage == 100){
            reaction = "niceStop.png";
        }else if(percentage >= 150){
            reaction = "quit.png";
        }else if(percentage >= 120){
            reaction = "pleaseStop.png";
        }else if(percentage >= 80){
            reaction = "angry.png";
        }else if(percentage >= 60){
            reaction = "sideEye.png"
        }else if(percentage >= 40){
            reaction = "bigSpark.png";
        }else if(percentage > 20){
            reaction = "lilSpark.png";
        }else if(percentage >= 0){
            reaction = "default.png";
        }else{
            console.log("Error in system, check value of percentage");
        }

        return reaction;
}

function changeFlapyReaction(){
    let flapyReaction = FlapyCheck.determineFlapyReaction();
    document.getElementById("").src = flapyReaction; //ID has not been added yet

}

function outputBudgetDetails(){
    document.getElementById(" ") = FlapyCheck.totalBudget + " - " FlapyCheck.remainingBudget + " left"; //ID has not been added yet
}

