import { Injectable } from "@angular/core";
import { MatSnackBarConfig, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: "root"
})
export class HelpersService {
  constructor(public snackBar: MatSnackBar) {}

  /** Method for open snackbar with dynamic message */
  snackbarOpenFromText(message: string, action: string, options: MatSnackBarConfig = {}): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, options);
  }

  /** Method for open snackbar component */
  snackbarOpenFromComponent(component: any, options: MatSnackBarConfig = {}): MatSnackBarRef<any> {
    return this.snackBar.openFromComponent(component, options);
  }
}
