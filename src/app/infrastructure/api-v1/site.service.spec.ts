import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SiteService } from './site.service';

describe('SiteService', () => {
  let service: SiteService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SiteService]
    });

    service = TestBed.inject(SiteService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get site by ID', () => {
    const siteId = '123';
    const expectedUrl = `http://localhost:8000/api/media/site/${siteId}`;

    const mockSite = { name: 'Example Site', backgroundColor: 'red', views:1, url: 'example-site.com', state:'', id: siteId,  };
    service.getSite(siteId).subscribe(site => {
      expect(site).toEqual(mockSite);
    });

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockSite);
  });

  it('should get site by URL', () => {
    const url = 'example-url';
    const expectedUrl = `http://localhost:8000/api/media/id/${url}`;

    const mockSite = { name: 'Example Site', backgroundColor: 'red', views:1, url: 'example-site.com', state:'' };

    service.getSiteByUrl(url).subscribe(site => {
      expect(site).toEqual(mockSite);
    });

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockSite);
  });

  it('should get sites for user', () => {
    const userId = '789';
    const expectedUrl = `http://localhost:8000/api/media/userSites/${userId}`;

    const mockSites = 
      { name: 'Example Site', backgroundColor: 'red', views:1, url: 'example-site.com', state:'' };

    service.getSitesForUser(userId).subscribe(sites => {
      expect(sites).toEqual(mockSites);
    });

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockSites);
  });

  it('should get all sites for current user', () => {
    const expectedUrl = 'http://localhost:8000/api/media/mySites';

    const mockSites =  { name: 'Example Site', backgroundColor: 'red', views:1, url: 'example-site.com', state:'' };;

    service.getAllSitesForCurrentUser().subscribe(sites => {
      expect(sites).toEqual(mockSites);
    });

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockSites);
  });

  it('should create site', () => {
    const siteData =  { name: 'Example Site', backgroundColor: 'red', views:1, url: 'example-site.com', state:'' };

    const expectedUrl = 'http://localhost:8000/api/media/sites';

    service.createSite(siteData).subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    req.flush({ /* Response data here */ });
  });

  it('should update site state', () => {
    const siteId = 789;
    const state = 'active';
    const expectedUrl = 'http://localhost:8000/api/media/updateState';

    service.updateState(siteId, state).subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    req.flush({ /* Response data here */ });
  });
});
