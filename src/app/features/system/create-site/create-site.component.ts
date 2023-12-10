import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BodyElementComponent } from './body-element/body-element.component';
import { CreateSiteService } from 'src/app/services/create-sitie.service';

/**
 * Componente para la ventana de creación de sitios.
 *
 * @component
 * @description
 * El componente CrearSitioComponent se utiliza para la creación de un sitio web.
 * Permite al usuario especificar diferentes configuraciones y contenido para el sitio.
 */
@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styleUrls: ['./create-site.component.css'],
})
export class CreateSiteComponent implements OnInit {
  /**
   * FormGroup que representa el formulario principal del sitio.
   *
   * @property {FormGroup} sitioForm
   */
  public siteForm!: FormGroup;

  /**
   * Indica si se muestra el componente hero.
   *
   * @property {boolean} isHero
   */
  public isHero: boolean;

  /**
   * Indica si se establecen los medios sociales.
   *
   * @property {boolean} setSocialMedia
   * @protected
   */
  protected setSocialMedia: boolean;

  /**
   * Indica si se establece el contacto.
   *
   * @property {boolean} setContact
   * @protected
   */
  protected setContact: boolean;

  /**
   * Indica si se establecen extras.
   *
   * @property {boolean} setExtra
   * @protected
   */
  protected setExtra: boolean;

  /**
   * Indica si se permite la carga de archivos.
   *
   * @property {boolean} upload
   * @protected
   */
  protected upload: boolean;

  /**
   * Indica si se permite la carga de una imagen.
   *
   * @property {boolean} uploadHeroImage
   * @protected
   */
  protected uploadHeroImage: boolean;

  /**
   * Indica si se muestra la vista previa.
   *
   * @property {boolean} preview
   * @protected
   */
  protected preview: boolean;

  /**
   * Indica el estilo para mostrar la vista previa.
   *
   * @property {string} showPreview
   * @protected
   */
  protected showPreview: string;

  /**
   * Indica el estilo para mostrar el formulario.
   *
   * @property {string} showForm
   * @protected
   */
  protected showForm: string;

  /**
   * Crea una instancia de CrearSitioComponent.
   *
   * @constructor
   * @param {Router} router - El enrutador de Angular.
   * @param {ChangeDetectorRef} cdr - El detector de cambios de Angular.
   */

  // eslint-disable-next-line no-magic-numbers
  private readonly MAX_INPUT_LENGTH: number = 64;
  // eslint-disable-next-line no-magic-numbers
  private readonly JSON_SPACING: number = 2;

  private router!: Router;

  private changeDetectorRef!: ChangeDetectorRef;

  private createSiteService!: CreateSiteService;

  constructor(routerParam: Router, changeDetectorRefParam: ChangeDetectorRef, createSiteServiceParam: CreateSiteService) {
    this.isHero = false;
    this.setSocialMedia = false;
    this.setContact = false;
    this.setExtra = false;
    this.upload = true;
    this.uploadHeroImage = true;
    this.preview = false;
    this.showPreview = 'none';
    this.showForm = 'block';

    this.router = routerParam;
    this.changeDetectorRef = changeDetectorRefParam;
    this.createSiteService = createSiteServiceParam;
  }

  /**
   * Funcion que se ejecuta al cargar el componente
   *
   *
   */
  ngOnInit(): void {
    //endpoint que conecte a show co un parametro
    this.initSitioForm();
  }

  /**
   * Inicializa el formulario del sitio.
   *
   * @method initSitioForm
   */
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

  /**
   * Devuelve el control correspondiente a una clave en un formulario.
   *
   * @method getCtrl
   * @param {string} key - Clave del control.
   * @param {FormGroup} form - Formulario en el que buscar el control.
   * @returns {any} - Control correspondiente a la clave especificada.
   */
  getCtrl(key: string, form: FormGroup): any {
    return form.get(key);
  }

  /**
   * Agrega un elemento de columna completa al cuerpo del sitio.
   *
   * @method addFullColumn
   * @param {string} type - Tipo de columna.
   */
  addFullColumn(type: string): void {
    this.getCtrl('body', this.siteForm).push(
      BodyElementComponent.addFullColumn(type)
    );
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Agrega un elemento de columna dividida al cuerpo del sitio.
   *
   * @method addSplitColumn
   * @param {string} leftType - Tipo de columna izquierda.
   * @param {string} rightType - Tipo de columna derecha.
   */
  addSplitColumn(leftType: string, rightType: string): void {
    this.getCtrl('body', this.siteForm).push(
      BodyElementComponent.addSplitColumn(leftType, rightType)
    );
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Elimina un elemento del cuerpo del sitio en el índice especificado.
   *
   * @method deleteBodyElement
   * @param {number} index - Índice del elemento a eliminar.
   */
  deleteBodyElement(index: number): void {
    this.getCtrl('body', this.siteForm).removeAt(index);
  }

  /**
   * Elimina todos los elementos del cuerpo del sitio.
   *
   * @method deleteAllBodyElement
   */
  deleteAllBodyElement(): void {
    const bodyCtrl = this.getCtrl('body', this.siteForm);
    bodyCtrl.clear();
  }

  onSubmit() {
    const sitioForm = this.siteForm.value;
    sitioForm.url = sitioForm.name;
    sitioForm.views = 0;
    this.createSiteService.createSite(sitioForm).subscribe(
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

  /**
   * Cancela la creación del sitio y navega a la página de sitios.
   *
   * @method cancelar
   */
  cancelar(): void {
    this.router.navigate(['/misSitios']);
  }

  /**
   * Alterna entre mostrar el formulario y la vista previa del sitio.
   *
   * @method mostrarPreview
   */
  mostrarPreview() {
    this.preview = !this.preview;
    if (this.preview) {
      this.showForm = 'none';
    } else {
      this.showForm = 'block';
    }
  }

  /**
   * Getter para obtener el control 'name' del formulario.
   *
   * @getter name
   * @returns {AbstractControl} - Control 'name'.
   */
  get name() {
    return this.siteForm.get('name');
  }

  /**
   * Getter para obtener el control 'title' del formulario.
   *
   * @getter headerTitle
   * @returns {AbstractControl} - Control 'title' del encabezado.
   */
  get headerTitle() {
    return this.siteForm.get('header')?.get('title');
  }

  /**
   * Getter para obtener el control 'position' del formulario.
   *
   * @getter headerPosition
   * @returns {AbstractControl} - Control 'position' del encabezado.
   */
  get headerPosition() {
    return this.siteForm.get('header')?.get('position');
  }

  /**
   * Getter para obtener el control 'size' del formulario.
   *
   * @getter headerSize
   * @returns {AbstractControl} - Control 'size' del encabezado.
   */
  get headerSize() {
    return this.siteForm.get('header')?.get('size');
  }

  /**
   * Getter para obtener el control 'phone' del formulario.
   *
   * @getter footerPhone
   * @returns {AbstractControl} - Control 'phone' del pie de página.
   */
  get footerPhone() {
    return this.siteForm.get('footer')?.get('contact')?.get('phone');
  }
}
