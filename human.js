class Human{
    name;
    age;
    dob;
    gender;

    /**
     * Creates a new human object
     * @param {string} gd gender of the human 
     * @param {string} dob date of birth
     */
    constructor(gd, dob){
        this.gender = gd;
        this.dob = dob;
    }

    /**
     * Makes the human speaks
     */
    speak(){
        console.log(`Hello this is ${this.name} and I am a ${this.gender}, and I was born on ${this.dob}, hence I am ${this.age} years of age`);
    }

}