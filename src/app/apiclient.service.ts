import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiClientService {
    apiUrl: string;

    constructor(private http: Http) {
        this.apiUrl = "https://ip.api.fridev.com/v1/";
    }

    getIpData(ip: string = "") {
        return this.http.get(this.apiUrl + ip)
            .map(res => res.json())
            .catch(error => {
                return Observable.throw("Could not load data!");
            });
    }

}
