import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {
    constructor(private _http: HttpClient) { }

    get(url: string, params?: any, headers: any = {}): Observable<any> {
        const options = {};

        url = this._removeDoubleBars(url);

        if(headers != null) { Object.assign(options, { headers: new HttpHeaders(headers) }); }
        if(params != null) { Object.assign(options, { params: params }); }

        return options ? this._http.get(url, options) : this._http.get(url);
    }

    put(url: string, body: any, params?: any, headers: any = {}): Observable<any> {
        const options = {};

        url = this._removeDoubleBars(url);

        if(headers != null) { Object.assign(options, { headers: new HttpHeaders(headers) }); }
        if(params != null) { Object.assign(options, { params: params }); }

        return options ? this._http.put(url, body, options) : this._http.put(url, body);
    }

    post(url: string, body: any, params?: any, headers: any = {}): Observable<any> {
        const options = {};

        url = this._removeDoubleBars(url);

        if(headers != null) { Object.assign(options, { headers: new HttpHeaders(headers) }); }
        if(params != null) { Object.assign(options, { params: params }); }

        return options ? this._http.post(url, body, options) : this._http.put(url, body);
    }

    patch(url: string, body: any, params?: any, headers: any = {}): Observable<any> {
        const options = {};

        url = this._removeDoubleBars(url);

        if(headers != null) { Object.assign(options, { headers: new HttpHeaders(headers) }); }
        if(params != null) { Object.assign(options, { params: params }); }

        return options ? this._http.patch(url, body, options) : this._http.put(url, body);
    }

    delete(url: string, params?: any, headers: any = {}): Observable<any> {
        const options = {};

        url = this._removeDoubleBars(url);

        if(headers != null) { Object.assign(options, { headers: new HttpHeaders(headers) }); }
        if(params != null) { Object.assign(options, { params: params }); }

        return options ? this._http.delete(url, options) : this._http.get(url);
    }

    private _removeDoubleBars(val: string): string {
        let valAux: string = val.replace(/\/\//g, '/');

        if(valAux.indexOf('http:/') >= 0) { valAux = valAux.replace('http:/', 'http://'); }
        else if(valAux.indexOf('https:/') >= 0) { valAux = valAux.replace('https:/', 'https://'); }

        return valAux;
    }
}
