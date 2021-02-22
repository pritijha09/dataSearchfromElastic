import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: "app-custom-snackbar",
  template: `
    <div class="mat-simple-snackbar">
      <span>
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
      </span>
      {{ message }}
      <span class="mat-simple-snackbar-action">
        <button
          mat-button
          class="mat-button mat-button-base"
          (click)="snackBarRef.dismiss()"
        >
          <span class="mat-button-wrapper">Okay</span>
        </button></span
      >
    </div>
  `
})
export class CustomSnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<CustomSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public message: string
  ) {}
}
