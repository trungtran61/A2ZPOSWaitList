import { Component, OnInit } from "@angular/core";
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
    phone: number;
    isShowingDataEntry: boolean = false;

    showDataEntry()
    {
        this.isShowingDataEntry = true;
    }

    done()
    {
        this.isShowingDataEntry = false;
    }

    cancel()
    {
        this.isShowingDataEntry = false;
    }

    constructor() {
        // Use the component constructor to inject providers.
        this.waitListEntries.push(
            {
                Name: "Trung",
                Phone: '714-757-4469',
                Guests: 3
            }
        )
    }

    ngOnInit(): void {
       // Init your component properties here.
    }
}
