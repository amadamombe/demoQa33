import { Selector, t } from "testcafe";
import FormPage from "../pages/formPage";
import FormPageLogUtils from "../utils/formPageLogUtils";

const formPage = new FormPage();
const formPageLogUtils = new FormPageLogUtils();

export default class FormPageActions {

    public async addUserDetails() {
        const name = 'Augustine';
        const surname = 'Madamombe';
        await t.typeText(formPage.fName, name);
        await t.typeText(formPage.lName, surname);
        await formPageLogUtils.logAddedUserDetails(name, surname);
    }

    public async addEmail() {
        await t.typeText(formPage.email, 'example@example.com');
    }

    public async selectGender(text: string) {
        if (text === 'Male') {
            await t.click(formPage.maleGender);
        } else if (text === 'Female') {
            await t.click(formPage.femaleGender);
        } else {
            await t.click(formPage.otherGender);
        }
    }

    public async addMobileNumber() {
        await t.typeText(formPage.mobileNumber, '07412458963');
    }

    public async selectHobbies(text: string) {
        if (text === 'Sports') {
            await t.click(formPage.sportsHobbies);
        } else if (text === 'Reading') {
            await t.click(formPage.readingHobbies);
        } else {
            await t.click(formPage.musicHobbies);
        }
    }

    public async uploadFile() {
        const fileUploadBtn = formPage.uploadFile;

        await t
            .click(fileUploadBtn)
            .setFilesToUpload(fileUploadBtn, ['../../resources/images/ARSNL SAKA2.jpeg']);
    }

    public async addState() {
        await t
            .click(formPage.state)
            .typeText(formPage.state, 'Haryana')
    }

    public async addCity() {
        await t
            .click(formPage.city)
            .typeText(formPage.city, 'Panipats')
            .wait(3000)
    }

    public async clickSubmitBtn() {
        await t.click(formPage.submitBtn);
    }
}