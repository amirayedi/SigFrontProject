import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingdataService } from '../service/sharingdata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hideLoginNav:string="";
  approvalText:string="";
  constructor(private router: Router,private appService: SharingdataService) { }

  ngOnInit(): void {
   
  }
  submit(){
    this.router.navigate(['/tabledashboard']);
    this.approvalText="ttt"
    this.appService.updateApprovalMessage(this.approvalText);
    this.hideLoginNav="true"
    this.appService.updateLoginNav(this.hideLoginNav);
    }
  
  }
  


