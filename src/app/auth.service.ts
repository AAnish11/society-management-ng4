import { Subject } from 'rxjs/Subject';
export class AuthService{
    isLoggedIn = new Subject<boolean>();

    userLoggedIn(){
        let token = window.localStorage.getItem('loginAuthToken') != null;
        return this.isLoggedIn.next(token);
    }

}