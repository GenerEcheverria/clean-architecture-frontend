import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminService]
    });

    service = TestBed.inject(AdminService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user by ID', () => {
    const userId = '123';
    const expectedUrl = `http://localhost:8000/api/users/${userId}`;

    const mockUser = {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com'
      // Add more data as needed
    };

    service.getUser(userId).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockUser);
  });

  it('should get users', () => {
    const expectedUrl = 'http://localhost:8000/api/account/sausers';

    const mockUsers = { id: '1', name: 'User 1', email: 'user1@example.com' };

    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockUsers);
  });

  it('should delete user by ID', () => {
    const userId = '123';
    const expectedUrl = `http://localhost:8000/api/users/${userId}`;

    const mockDeletedUser = {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com'
      // Add more data as needed
    };

    service.deleteUser(userId).subscribe(deletedUser => {
      expect(deletedUser).toEqual(mockDeletedUser);
    });

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('DELETE');
    req.flush(mockDeletedUser);
  });
});
