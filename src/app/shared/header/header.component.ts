import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { MenuButtomComponent } from '../menu-buttom/menu-buttom.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SideNavbarService } from 'src/app/layout/sidebar/services/sidenavbar.service';
import { NavbarSettings } from 'src/app/layout/sidebar/models/navbnarSettings.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  settings: NavbarSettings;

  @Output() openSidebarEvent = new EventEmitter();
  @Output() closeSidenavEvent = new EventEmitter();

  constructor(private readonly _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openBottomSheet() {
    this._bottomSheet.open(MenuButtomComponent);
  }

  openSidebar(): void {
    this.openSidebarEvent.emit();
  }

  closeSidebar(): void {
    this.closeSidenavEvent.emit();
  }
}
