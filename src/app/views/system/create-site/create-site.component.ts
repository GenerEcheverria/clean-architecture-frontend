import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BodyElementComponent } from './body-element/body-element.component';
import { SiteService } from 'src/app/infrastructure/api-v1/site.service';

@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styleUrls: ['./create-site.component.css'],
})
export class CreateSiteComponent implements OnInit {

  protected siteForm!: FormGroup;

  protected isHero: boolean;

  protected setSocialMedia: boolean;

  protected setContact: boolean;

  protected setExtra: boolean;

  protected upload: boolean;

  protected uploadHeroImage: boolean;

  protected preview: boolean;

  protected showPreviewDisplay: string;

  protected showFormDisplay: string;

  // eslint-disable-next-line no-magic-numbers
  private readonly MAX_INPUT_LENGTH: number = 64;
  // eslint-disable-next-line no-magic-numbers
  private readonly JSON_SPACING: number = 2;

  private router!: Router;

  private changeDetectorRef!: ChangeDetectorRef;

  private siteService!: SiteService;

  constructor(routerParam: Router, changeDetectorRefParam: ChangeDetectorRef, siteServiceParam: SiteService) {
    this.isHero = false;
    this.setSocialMedia = false;
    this.setContact = false;
    this.setExtra = false;
    this.upload = true;
    this.uploadHeroImage = true;
    this.preview = false;
    this.showPreviewDisplay = 'none';
    this.showFormDisplay = 'block';

    this.router = routerParam;
    this.changeDetectorRef = changeDetectorRefParam;
    this.siteService = siteServiceParam;
  }

  ngOnInit(): void {
    this.initSitioForm();
  }

  initSitioForm(): void {
    this.siteForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]+$/),
        Validators.maxLength(this.MAX_INPUT_LENGTH),
      ]),
      backgroundColor: new FormControl('#ffffff'),
      header: new FormGroup({
        hero: new FormControl(false),
        title: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 ]+$/),
          Validators.maxLength(this.MAX_INPUT_LENGTH),
        ]),
        position: new FormControl('', Validators.required),
        size: new FormControl('', Validators.required),
        color: new FormControl('#000000'),
        image: new FormControl(''),
      }),
      body: new FormArray([]),
      footer: new FormGroup({
        backgroundColor: new FormControl('#ffffff'),
        textColor: new FormControl('#000000'),
        socialMedia: new FormGroup({
          setSocialMedia: new FormControl(false),
          facebook: new FormControl(''),
          instagram: new FormControl(''),
          twitter: new FormControl(''),
          linkedin: new FormControl(''),
          tiktok: new FormControl(''),
          otro: new FormControl(''),
        }),
        extra: new FormGroup({
          setExtra: new FormControl(false),
          image: new FormControl(''),
          text: new FormControl(''),
        }),
        contact: new FormGroup({
          setContact: new FormControl(false),
          phone: new FormControl('', Validators.pattern(/^\d{10}$/)),
          address: new FormControl(''),
        }),
      }),
    });
  }

  protected getController(key: string, form: FormGroup): any {
    return form.get(key);
  }

  protected addFullColumn(type: string): void {
    this.getController('body', this.siteForm).push(
      BodyElementComponent.addFullColumn(type)
    );
    this.changeDetectorRef.detectChanges();
  }

  protected addSplitColumn(leftType: string, rightType: string): void {
    this.getController('body', this.siteForm).push(
      BodyElementComponent.addSplitColumn(leftType, rightType)
    );
    this.changeDetectorRef.detectChanges();
  }

  protected deleteBodyElement(index: number): void {
    this.getController('body', this.siteForm).removeAt(index);
  }

  protected onSubmit() {
    const sitioForm = this.siteForm.value;
    sitioForm.url = sitioForm.name;
    sitioForm.views = 0;
    this.siteService.createSite(sitioForm).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/misSitios']);
      },
      (error) => {
        console.error(
          JSON.stringify(JSON.parse(error), null, this.JSON_SPACING)
        );
      }
    );
  }

  protected cancel(): void {
    this.router.navigate(['/misSitios']);
  }

  protected showPreview() {
    this.preview = !this.preview;
    if (this.preview) {
      this.showFormDisplay = 'none';
    } else {
      this.showFormDisplay = 'block';
    }
  }

  get name() {
    return this.siteForm.get('name');
  }

  get headerTitle() {
    return this.siteForm.get('header')?.get('title');
  }

  get headerPosition() {
    return this.siteForm.get('header')?.get('position');
  }

  get headerSize() {
    return this.siteForm.get('header')?.get('size');
  }

  get footerPhone() {
    return this.siteForm.get('footer')?.get('contact')?.get('phone');
  }
}
