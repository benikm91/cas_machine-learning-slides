import {Component, Input} from "@angular/core";
import {TableOfContentEntry} from "./table-of-content-data";

@Component({
  selector: '[tables-of-content-node]',
  styleUrls: ['./tables-of-content.component.scss', 'tables-of-content-node.component.scss'],
  templateUrl: './tables-of-content-node.component.pug',
  // template: `
  //   <span class="tf-nc" [ngClass]="{'active' : entry?.isActive}">
  //     <a href="#/{{entry?.label}}">{{entry?.label}}</a>
  //   </span>
  //   <ul *ngIf="entry?.children?.length ?? 0 > 0">
  //    <li *ngFor="let childEntry of entry?.children" tables-of-content-node [entry]="childEntry">
  //    </li>
  //   </ul>
  // `
})
export class TableOfContentNode {
  @Input('entry') entry: TableOfContentEntry<string> | null = null;
}
