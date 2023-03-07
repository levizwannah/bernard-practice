class Girl extends Human{

    constructor(dob){
        super("girl", dob);
    }

    /**
     * Makes the girl dance to a particular music
     * @param {string} music 
     */
    dance(music){
        console.log(`Girl: ${this.name} is dancing to ${music} music`);
    }

}