let boy1 = new Boy("June 6, 2000");
let boy2 = new Boy("March 8, 1998");

boy1.name = "James";
boy1.age = 22;

boy2.name = "Andrew";
boy2.age = 24;

boy1.speak();
boy2.speak();

boy1.fight(boy2);

let girl = new Girl("June 12, 2002");

girl.name = "Caroline";
girl.age = 20;

girl.speak();
girl.dance("Made by God");