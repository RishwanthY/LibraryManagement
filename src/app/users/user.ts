export class User {
    name:string;
    email:string;
    password:string;
    dob:string;

    constructor(name:string, email:string, password:string, dob:string)
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.dob = dob;
    }
}
