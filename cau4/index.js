class PhoneBook{
    constructor(name,phoneNumber,email){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    addContact =function(name,phoneNumber,email){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    searchContact = function(name){
        
    }
}

let user = new PhoneBook();
user.addContact("Đạt","0908050623","dat@gmail.com")
document.write(user.name + user.phoneNumber + user  .email +"<br>") 
let user2 = new PhoneBook();
user2.addContact("Giang","0607050321","giang@gmail.com")
document.write(user2.name + user2.phoneNumber + user2.email +"<br>")
let user3 = new PhoneBook();
user3.addContact("Hải", "03040608931","hai@gmail.com")
document.write(user3.name + user3.phoneNumber + user3.email +"<br>")

