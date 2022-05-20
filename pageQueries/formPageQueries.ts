import FormPage from "../pages/formPage";

const formPage = new FormPage();

export default class FormPageQueries {

    public getUserName() {
        return formPage.fName.value;
    }

    public getUserSurName() {
         return formPage.lName.value;
    }
}