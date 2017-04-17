import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {MdDialogRef} from '@angular/material';


@Component({
  selector: 'password-dialog',
  templateUrl: './password.dialog.component.html',
})


export class PasswordDialogComponent {

	public password: string;
	
	constructor(public dialogRef: MdDialogRef<PasswordDialogComponent>) {}
}