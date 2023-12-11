import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-canvas',
  templateUrl: './footer-canvas.component.html',
  styleUrls: ['./footer-canvas.component.css']
})
export class FooterCanvasComponent {

  @Input() backgroundColor: string = '';

  @Input() textColor: string = '';

  @Input() setSocialMedia!: boolean;

  @Input() facebookUrl: string = '';

  @Input() instagramUrl: string = '';

  @Input() twitterUrl: string = '';

  @Input() linkedinUrl: string = '';

  @Input() tiktokUrl: string = '';

  @Input() extraUrl: string = '';

  @Input() setExtra!: boolean;

  @Input() imageExtraFooter: string = '';

  @Input() textExtraFooter: string = '';

  @Input() setContact!: boolean;

  @Input() phone: string = '';

  @Input() address: string = '';

}
