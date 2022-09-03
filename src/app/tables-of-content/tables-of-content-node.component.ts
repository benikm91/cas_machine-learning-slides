import {Component, Input} from "@angular/core";
import {TableOfContentEntry, TableOfContentLabel} from "./table-of-content-data";

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

  @Input('entry') entry: TableOfContentEntry<TableOfContentLabel> | null = null;

  /** null means infinite. */
  @Input('remaining-depth') remainingDepth: number | null = null;

  /** null means infinite. */
  @Input('depth-after-active') depthAfterActive: number | null = null;

  /** null means infinite. */
  @Input('show-siblings') showSiblingsOfActualActive: boolean = true;

  public hasChildren(): boolean {
    return (this.entry?.children?.length ?? 0) > 0
  }

  public isActiveButNotActualActive(): boolean {
    if (this.entry == null) return false;
    return this.entry.isActive && !this.entry.isActualActive
  }

  public isParentOfActualActive(): boolean {
    return this.entry?.children?.find(x => x.isActualActive) != null
  }

  public hasRemainingDepth(): boolean {
    return (this.remainingDepth ?? 1) > 0;
  }

  public isActualActiveAndHasDepthAfterActive(): boolean {
    if (this.entry == null) return false;
    return this.entry.isActualActive && (this.depthAfterActive ?? 1) > 0
  }

}
