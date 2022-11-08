import {Component} from '@angular/core'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})

export class UserComponent {
    username = "";
    allowResetUsername = false
    

    resetInput(){
        this.username = "";
    }

}