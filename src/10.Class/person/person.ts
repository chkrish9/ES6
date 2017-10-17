export class Person{
    constructor(private names:string){
        this.names = names;
    }
    displayName(){
        console.log(this.names);
    }

    get Names(){
        return this.Names;
    }

    set Names(names){
        this.names = names;
    }
}