import { Selector } from "testcafe";

export default class FormPage {
    uploadFile: Selector;
    fName: Selector;
    lName: Selector;
    state: Selector;
    city: Selector;
    email: Selector;
    mobileNumber: Selector;
    submitBtn: Selector;
    maleGender: Selector;
    femaleGender: Selector;
    otherGender: Selector;
    sportsHobbies: Selector;
    readingHobbies: Selector;
    musicHobbies: Selector;

    constructor() {
        this.fName = Selector('#firstName');
        this.lName = Selector('#lastName');
        this.uploadFile = Selector('#uploadPicture');
        this.state = Selector('#state');
        this.city = Selector('#city');
        this.email = Selector('#userEmail');
        this.mobileNumber = Selector('#userNumber');
        this.submitBtn = Selector('#submit');
        this.maleGender = Selector('#gender-radio-1');
        this.femaleGender = Selector('#gender-radio-2');
        this.otherGender = Selector('#gender-radio-3');
        this.sportsHobbies = Selector('#hobbies-checkbox-1');
        this.readingHobbies = Selector('#hobbies-checkbox-2');
        this.musicHobbies = Selector('#hobbies-checkbox-3');
    }
}