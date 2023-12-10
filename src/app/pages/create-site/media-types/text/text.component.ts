import { Component, Input,} from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

/**
 * Componente para mostrar un elemento de texto.
 * 
 * @component
 * @selector app-text
 * @templateUrl ./text.component.html
 * @styleUrls ['./text.component.css']
 */
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class TextComponent {

  /**
   * Columna asociada al elemento de texto.
   * 
   * @property {string} column
   */
  @Input() column!: string;

  
}
