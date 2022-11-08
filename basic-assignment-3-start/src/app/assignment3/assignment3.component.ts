import {Component} from '@angular/core'

@Component({
    selector: 'app-assignment3',
    templateUrl: './assignment3.component.html',
    styles: [`
        .clickLog{
            color:white;
        }
    `]
})

export class Assignment3Component{

    display=true;
    clicks = [];
    counterclick = 0;

    displayParagraph(){
        this.counterclick++;
        this.clicks.push(this.counterclick);
        this.display? this.display=false : this.display=true;
    }

}