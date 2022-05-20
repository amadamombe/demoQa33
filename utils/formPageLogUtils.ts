export default class FormPageLogUtils {

    public async log(text: string) {
        console.log(text);
    }

    public async error(error: string) {
        console.log(error);
    }

    public async logAddedUserDetails(name: string, surname: string) {
        return this.log(`Added username ${name} and surname ${surname} to the text fields`)
    }
}