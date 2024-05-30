import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faArrowDown, faArrowLeft, faBookmark, faCaretDown, faDoorOpen, faGear, faHome, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',


})
export class NavbarComponent   {
  faHome = faHome;
  faBookmarks = faBookmark;
  faSetting = faGear;
  faArrowDown = faCaretDown;
  faArrowLeft = faArrowLeft;
  faLogin = faRightToBracket;
  faLogout = faDoorOpen;

  darkModeActive: boolean = false;


  showSubMenu: boolean = false;
  isSidebarActive = true;

  toggleShowSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }

 
}
