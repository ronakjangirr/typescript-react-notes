import { UserModel } from "../models/typeOne" 

export class UserService{                   
    private static users: UserModel[] = [
        {contact:9999999, name:"Ronak", age:21},
        {contact:8888888, name:"Akash", age:22},
        {contact:7777777, name:"Vishal", age:23}
    ]

    public static getAllUsers(){            
        return this.users
    }
}


// private: This keyword makes the users property only accessible within the UserService class. It cannot be accessed directly from outside the class.
// static: This keyword indicates that users is a static property. This means it belongs to the class itself, rather than to any instance of the class. You can access it using UserService.users.
// users: The name of the property which is an array of UserModel objects.
// UserModel[]: This denotes that users is an array where each element must conform to the UserModel interface.

// public: This keyword makes the getAllUsers method accessible from outside the class.
// static: This keyword means that getAllUsers is a static method. It belongs to the class itself and can be called without creating an instance of the class.
// getAllUsers(): The name of the method which returns the list of users.
// this.users: Refers to the static users property within the class.