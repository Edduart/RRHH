
const { v4: uuidv4 } = require('uuid');

class User{
    cedula="";
    firtsname="";
    lastname="";
    email="";
    cell_phone="";
    address="";
    date_of_admission=new Date();

    constructor(firtsname,lastname,email,cell_phone,address,date_of_admission){
        this.cedula=uuidv4();
        this.firtsname=firtsname;
        this.lastname=lastname;
        this.email=email
        this.cell_phone=cell_phone;
        this.address=address;
        this.date_of_admission=date_of_admission.tolocaleDateString();
    }
}

module.exports = User;

