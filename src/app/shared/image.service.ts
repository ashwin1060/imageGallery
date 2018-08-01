import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageService{

    private query: string;
    private API_KEY: string = environment.PIXABAY_API_KEY;
    private API_URL: string = environment.PIXABAY_API_URL;
    private URL: string = this.API_URL + this.API_KEY + '&q=';
    private perPage: string = "&per_page=10";

    constructor(private _http: Http){ }

    // Making GET calls will get us back Observables
    // Observables are collections that arrive over time 
    // usefull for streaming events.

    // We can use map operators to help us work with whatever
    // response that comes back whenever its ready to come back.
    getImage(query){
         // Angular 6 onwards, we need to use pipe to apply most operators
         return this._http.get(this.URL + query + this.perPage).pipe(map(res => res.json()));
    }
}