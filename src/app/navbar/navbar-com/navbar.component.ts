import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  events: string[] = [];
  opened: boolean;

  mobileQuery: MediaQueryList

  private _mobileQueryListener: () => void

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener)
  }
}
