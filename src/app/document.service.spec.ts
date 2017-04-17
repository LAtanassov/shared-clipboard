import { DocumentService } from './document.service';
import { Document } from './document';

describe('DocumentService', () => {

  let service: DocumentService;

  beforeEach(() => { service = new DocumentService(); });

  it('get should return one document', (done: DoneFn) => {
    service.get().then(documents => {
      expect(2).toBe(documents.length);
      done();
    })
  });

  it('post should post one document return two document', (done: DoneFn) => {
    service.post(new Document('test', 'text/plain', 'test')).then(documents => {
      expect(3).toBe(documents.length);
      done();
    })
  });
});
