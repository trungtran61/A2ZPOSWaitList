import { Component, OnInit } from "@angular/core";
import * as TNSPhone from 'nativescript-phone';

import { WaitListEntry } from "../models/wait-list-entry";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    waitListEntries: WaitListEntry[] = [];
    name: string = '';
    guests: number = 1;
    phone: string = '';
    isShowingDataEntry: boolean = false;
    message: string = "You're now on the wait list. We'll text you when a table becomes available.";

    showDataEntry()
    {
        this.isShowingDataEntry = true;
    }

    done()
    {
        this.isShowingDataEntry = false;

        //if(Number.isInteger(this.phone)) {
            //alert(this.message = this.name + ' ' + "You're now on the wait list. We'll text you when a table becomes available.");
            this.waitListEntries.push(
                {
                    Name: this.name,
                    Phone: this.phone,
                    Guests: this.guests
                }
            )
            /*
            TNSPhone.sms([this.phone.toString()], this.message).then(result => {
                    console.dir(result);
                    this.phone = null;                    
                }, error => {
                    console.dir(error);
                });
                */
        //}
    }

    cancel()
    {
        this.isShowingDataEntry = false;
    }

    constructor() {
       
    }

    ngOnInit(): void {       
    
    }
}
