class Boy extends Human{

    /**
     * Creates a new boy object
     * @param {string} dob date of birth 
     */
    constructor(dob){
        super("boy", dob);
    }

    /**
     * Tell this object to fight another object
     * @param {Boy} boy2 
     */
    fight(boy2){
        console.log(`Boy: ${this.name} is fighting Boy: ${boy2.name}`);
    }

}
