import FormPageActions from "../../pageActions/formPageActions";
import FormPageQueries from "../../pageQueries/formPageQueries";


const formPageActions = new FormPageActions();
const formPageQueries = new FormPageQueries();

fixture(' Form page fixtures').
    page('https://demoqa.com/automation-practice-form');


test('Add user details test', async t => {
    await formPageActions.addUserDetails();
    await t.expect(formPageQueries.getUserName()).eql('Augustine');
    await t.expect(formPageQueries.getUserSurName()).eql('Madamombe')
    await formPageActions.addEmail();
    await formPageActions.selectGender('Female');
    await formPageActions.addMobileNumber();
    await formPageActions.selectHobbies('Music');
    // await formPageActions.uploadFile();
    await formPageActions.addState();
    //await formPageActions.addCity();

    await formPageActions.clickSubmitBtn();
    await t.wait(4000);
})

