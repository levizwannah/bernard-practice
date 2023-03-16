class Page{
    title ;
    subtitle;
    content;
    visibility;
    status;

    static count = 0;

    constructor(t = "Default Title", st = "Default Subtitle"){
        this.title = t;
        this.subtitle = st;

        Page.count++;
    }

    save(){
        console.log("In the save method");
        console.log(this);
    }

}

let p = new Page("Page 1 Title", "SubTitle 1");
let p2 = new Page("Page 2 Title");
let p3 = new Page("Page 3", "Subtitle 3");
let p4 = new Page();

// p2.save();
// p3.save();
// p4.save();

// console.log(Page.count);


// f(x) = 2x + 3

// f(2) = 2(2) + 3

function f(x = 4){
    return 2 * x + 3;
}

console.log(f()); // f(4) ==> 2x4 + 3
console.log(f(10)); // ==> f(10) = 2x10 + 3