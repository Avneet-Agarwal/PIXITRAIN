class men {
    constructor() {
        this.name = 'AVI';
        this.age = 25;
    }
        details = function () {
            return 'hello ' + this.name + ' of age ' + this.age;
        };
    
}

var hii=new men();
console.log(hii.details());
hii.age=20;
console.log(hii.details());
