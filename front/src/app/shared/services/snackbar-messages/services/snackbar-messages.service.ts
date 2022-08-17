import { SnackbarMessagesComponent } from './../components/snackbar-messages/snackbar-messages.component';
import { SnackbarMessage } from './../interfaces/snackbar-messages';
import { Injectable } from "@angular/core";
//import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class SnackbarMessagesService {
    constructor(/*private _snackbar: MatSnackBar*/) { }

    public showSnackbarMessages(snack: SnackbarMessage): void {
      /*  if(!snack.title) {
            if(snack.type === "error") { snack.title = "ERROR"; }
            else if(snack.type === "info") { snack.title = "INFO"; }
            else if(snack.type === "success") { snack.title = "SUCCESS"; }
            else if(snack.type === "warning") { snack.title = "WARNING"; }
        }

        if(snack.has_duration) {
            this._snackbar.openFromComponent(SnackbarMessagesComponent, {
                duration: snack.duration ? snack.duration : 8000,
                horizontalPosition: "end",
                verticalPosition: "top",
                data: snack
            });
        }
        else {
            this._snackbar.openFromComponent(SnackbarMessagesComponent, {
                horizontalPosition: "end",
                verticalPosition: "top",
                data: snack
            });
        }
    }*/
}
}