class FlapyCheck{

    #totalBudget;
    #remainingBudget;
    #percentageChecker;

    function FlapyCheck(totalBudget){
        this.totalBudget = totalBudget;
        this.percentageChecker = 0;
        this.remainingBudget = totalBudget;
        this.updateFlapyReaction();
    }

    addItem(price){
        this.#remainingBudget -= price;
        this.#percentageChecker += price;
        this.updateFlapyReaction();
    }

    getRemainingBudget(){return this.#remainingBudget;}

    getTotalBudget(){return this.totalBudget;}

    updateFlapyReaction(){
        const percentage = (this.#percentageChecker / this.#totalBudget) * 100;
        let reaction = " ";

        if(percentage == 100){
            reaction = "nice stop";
        }else if(percentage >= 150){
            reaction = "i quit";
        }else if(percentage >= 120){
            reaction = "please stop";
        }else if(percentage >= 80){
            reaction = "angry";
        }else if(percentage >= 60){
            reaction = "side eye"
        }else if(percentage >= 40){
            reaction = "big sparkle";
        }else if(percentage > 20){
            reaction = "lil sparkle";
        }else if(percentage >= 0){
            reaction = "default";
        }else{
            console.log("Error in system, check value of percentage");
        }

        return reaction;
    }


    



}