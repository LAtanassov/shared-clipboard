import { Injectable } from '@angular/core';
import { Document } from './document'

@Injectable()
export class DocumentService {
	documents: Document[] = [
	new Document('Post', 'Movie Night', '/assets/avatar.jpg', 'image/jpg', '/assets/cat.jpg')
	];

	get(): Promise<Document[]> {
		return Promise.resolve(this.documents);
	}

	post(document: Document): Promise<Document[]> {
		return new Promise(resolve => {
			this.documents.push(document);
			setTimeout(() => resolve(this.documents), 2000);
		});
	}

	delete(document:Document): Promise<Document[]> {
		return new Promise(resolve => {
			var index = this.documents.indexOf(document);
			this.documents.splice(index, 1);
			setTimeout(() => resolve(this.documents), 2000);

		})
	}
}