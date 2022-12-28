import { UserService } from './../service/user.service';
import { LoginComponent } from './../login/login.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharingdataService } from '../service/sharingdata.service';
import { LoginService } from '../service/login.service';
import { User } from '../user';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  hideLoginNav: string = "";
  hideTooltip: boolean = false;
  idLog!: Number;
  user!:User;
  constructor(private router: Router, private appService: SharingdataService, private login: LoginService,private userService: UserService) { }

  ngOnInit(): void {
    this.idLog = Number(localStorage.getItem("loggedUser"));
    this.userService.getUserById(Number(this.idLog)).pipe(
      map((user: User) => this.user = user)
    ).subscribe()
  }

  Navigate() {
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  show() {
    this.appService.currentfunctioHideLoginNav.subscribe(msg => this.hideLoginNav = msg);
    if (this.hideLoginNav == "true") {
      this.hideTooltip = true
      return false
    } else {

      return true;
    }
  }
}