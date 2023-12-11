import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClientService } from './client.service';

describe('ClientService', () => {
  let service: ClientService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService]
    });

    service = TestBed.inject(ClientService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a client', () => {
    const clientData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: 'user',
      phone: '123456789'
    };

    const expectedUrl = 'http://localhost:8000/api/auth/register';

    service.register(clientData).subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    req.flush({ /* Response data here */ });
  });

  it('should edit a user', () => {
    const clientData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: 'user',
      phone: '123456789'
    };

    const clientId = '123';
    const expectedUrl = `http://localhost:8000/api/auth/account/users/${clientId}`;

    service.editUser(clientData, clientId).subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('PUT');
    req.flush({ /* Response data here */ });
  });

  it('should get actual user', () => {
    const expectedUrl = 'http://localhost:8000/api/auth/me';

    service.getActualUser().subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    req.flush({ /* Response data here */ });
  });
});
