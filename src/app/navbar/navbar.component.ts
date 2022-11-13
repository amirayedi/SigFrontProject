import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharingdataService } from '../sharingdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  hideLoginNav:string="";
  hideTooltip: boolean = false;
    constructor(private router: Router,private appService: SharingdataService) { }

    ngOnInit(): void {}
  
    Navigate(){
      this.router.navigate(['/login']);
    }
 
    toggleSidebar() {
      this.toggleSidebarForMe.emit(); }
  
    show(){
        this.appService.currentfunctioHideLoginNav.subscribe(msg => this.hideLoginNav = msg);
        if(this.hideLoginNav=="true"){
          this.hideTooltip=true
            return false
        }else{

            return true;
        }
    }
}

