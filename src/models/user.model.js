
//const { v4: uuidv4 } = require('uuid');

class User{
    nin=""; // NIN identificacion nacional
    firstname="";
    lastname="";
    email="";
    cell_phone="";
    address="";
    //date_of_admission = new Date();

    constructor(nin,firstname,lastname,email,cell_phone,address,date_of_admission){
        this.nin=nin;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email
        this.cell_phone=cell_phone;
        this.address=address;
        //this.date_of_admission=date_of_admission.tolocaleDateString();
    }
}

module.exports = User;

