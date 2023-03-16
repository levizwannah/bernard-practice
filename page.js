class Page{
    title ;
    subtitle;
    content;
    visibility;
    status;

    constructor(t, st){
        this.title = t;
        this.subtitle = st;
        this.save();
    }

    save(){
        console.log("In the save method");
        console.log(this);
    }

}

let p = new Page("Page 1 Title", "SubTitle 1");
let p2 = new Page("Page 2 Title", "SubTitle 2");

p.title = "Hello Page";
p.subtitle = "Hello Page Subtitle";
p.content = "<h1>This is a page</h1>";
p.visibility = "public";
p.status = "published";
