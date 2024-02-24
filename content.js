class FlapyCheck{
    #totalBudget;
    #remainingBudget;
    Flapy(totalBudget){
        this.totalBudget = totalBudget;
        this.remaniningBudget = 0;
        this.updateFlapyReaction();
    }

    

    addItem(price){
        this.remaniningBudget += price;
        this.updateFlapyReaction();
    }

    updateFlapyReaction(){
        const percentage = (this.remaniningBudget / this.totalBudget) * 100;
        let reaction = " ";

        if(percentage >= 150){
            reaction = "quit";
        }else if(percentage >= 120){
            reaction = "please stop";
        }else if(percentage >= 80){
            reaction = "angry";
        }else if(percentage >= 60){
            reaction = "side eye"
        }else if(percentage >= 40){
            reaction = "big sparkle";
        }else if(percentage > 20){
            reaction = "little sparkle";
        }else if(percentage >= 0){
            reaction = "default";
        }else{
            console.log("Error in system, check value of percentage");
        }
    }






}