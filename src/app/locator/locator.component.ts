import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../apiclient.service';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-locator',
    templateUrl: './locator.component.html',
    styleUrls: ['./locator.component.css'],
    providers: [
        ApiClientService
    ]
})

export class LocatorComponent implements OnInit {

    // Stores the response from the server
    ipData: ApiData;
    // Stores if the api call has failed or not
    hasFailed: boolean;
    // Error text in case the call fails
    errorText: string;
    // Text label for the IP
    ipText: string;
    // Store whois url
    whoisUrl: string;

    constructor(private apiClient: ApiClientService) {
        this.whoisUrl = "http://ip.api.fridev.com/v1/whois/";
    }

    // Call the api and get the current IP on init
    ngOnInit() {
        this.callApiClient("Your IP Is:");
    }

    // Calls the api client when the user searches
    newSearch(ip: string) {
        if (ip === '') {
            alert("IP / HostName cannot be empty!");
        } else {
            this.ipData = undefined;
            this.callApiClient("IP You Searched For:", ip);
        }

    }

    // Calls the api client and handles error
    callApiClient(ipText: string, ip: string = "") {
        this.apiClient.getIpData(ip).subscribe(data => {
            // If the server responded with error, show it
            if (data.error === true) {
                this.hasFailed = true;
                this.errorText = data.message;
            } else {
                // Set that the call didnt fail and set the data for the call
                this.hasFailed = false;
                this.ipData = data as ApiData;
                this.ipText = ipText;
            }
        }, error => {
            // Handle error and show it
            this.hasFailed = true;
            this.errorText = error;
        });
    }

}

// Structure of the API response
class ApiData {
    ip: string;
    city: string;
    region: string;
    country: string;
    postal: string;
    continent: string;
    hostname: string;
    searchname: string;
    latitude: number;
    longitude: number;
}