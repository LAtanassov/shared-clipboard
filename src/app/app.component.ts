import { Component } from '@angular/core';
import { Document } from './document';
import { DocumentService } from './document.service';
import { PasswordDialogComponent } from './password.dialog.component';
import {MdDialog} from '@angular/material';
import { OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [DocumentService]
})
export class AppComponent implements OnInit {

	documents: Document[];
	title: string = 'Shared Clipboard';

	constructor(private documentService: DocumentService, private dialog: MdDialog) {}
	
	ngOnInit(): void {
		this.documentService.get().then(_documents => this.documents = _documents);
	}

	copy(document: Document): void {
		//TODO
	}

	delete(document: Document): void {
	  this.documentService.delete(document).then(_documents => this.documents = _documents);
	}

	add(): void {
		let dialogRef = this.dialog.open(PasswordDialogComponent);
		dialogRef.afterClosed().subscribe(result => {
	      console.log(result);
	    });

	}
}
