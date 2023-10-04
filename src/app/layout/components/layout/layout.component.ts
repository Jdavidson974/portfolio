import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  iconMail = faEnvelope;
  iconTel = faPhone;
  iconLinkDin = faLinkedin;
  contactArray: any[] = [
    {
      icon: this.iconMail,
      value: "sautronjdavidsonpro@gmail.com",
      context: "mail"
    },
    {
      icon: this.iconTel,
      value: "06.92.38.08.54",
      context: "tel"
    },
    {
      icon: this.iconLinkDin,
      value: "https://www.linkedin.com/in/jean-davidson-sautron-a11baa150/"
    },
  ]
}
