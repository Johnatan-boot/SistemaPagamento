import { environment2 } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private http: HttpClient) {
    }

    getOrderDetail(id: string): Observable<any> {
        return this.http.get(`${environment2.api}/orders/${id}`)
    }

    getUser(id: string): Promise<any> {
        return this.http.get(`${environment2.api}/users/${id}`).toPromise()
    };

    saveCard(token: string, customer_id: string): Promise<any> {
        return this.http.patch(`${environment2.api}/users/save-card/${customer_id}`, { token }).toPromise();
    };

    sendPayment(token: string, id: string, useSavedCard: boolean): Promise<any> {
        return this.http.patch(`${environment2.api}/orders/${id}`,
            {
                token,
                useSavedCard: useSavedCard
            }
        ).toPromise()
    };

    generateOrder(data: { name: string, amount: number, email: string }): Observable<any> {
        return this.http.post(`${environment2.api}/orders`, data)
    }

    confirmOrder(id: string): Promise<any> {
        return this.http.patch(`${environment2.api}/orders/confirm/${id}`, {}).toPromise()
    }
}
