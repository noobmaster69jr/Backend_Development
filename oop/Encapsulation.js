//Encapsulaion - ability to binding data and methods, and we make use of getter or setter to
//access data outside the class


class Sports{
    #name;                          // # - makes it private within the class

    constructor(name){
        this.#name = name;
        this.nation = "India"
    }
    #about(){
        console.log(this.#name +" requires 11 players to play")
    }
    aboutInfo(){
        this.#about()
    }
    get nationality(){
        console.log(this.nation)
    }

    set nationality(nation){
        this.nation = nation;
    }
}

let cricket = new Sports("cricket")
cricket.aboutInfo()

cricket.nationality
cricket.nationality = "England"
cricket.nationality