import {Component, Input} from "@angular/core";

@Component({
  selector: 'slide-header',
  styleUrls: ['./slide-header.component.scss'],
  templateUrl: './slide-header.component.pug',
})
export class SlideHeaderComponent {

  @Input() header: string | null = null;

}
