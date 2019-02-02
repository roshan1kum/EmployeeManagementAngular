export class Employee {

    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public contactnumber: string,
        public address: string,
        public username: string,
        public password: string,
        public gender: string,
        public qualification: string,
        public experience: string,
        public languages:{LanguageName:string,IsEnabled:boolean}[]
    )

    {}

}