import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingdataService {

  private approvalStageMessage = new BehaviorSubject('false');
  currentApprovalStageMessage = this.approvalStageMessage.asObservable();

  private functioHideLoginNav = new BehaviorSubject('false');
  currentfunctioHideLoginNav = this.functioHideLoginNav.asObservable();

  private functioAddtoMap = new BehaviorSubject(0);
  currentfunctioAddtoMap = this.functioAddtoMap.asObservable();
  
  constructor() { }

  updateAddMap(message: number) {
    this.functioAddtoMap.next(message)
    }


  updateApprovalMessage(message: string) {
    this.approvalStageMessage.next(message)
    }

  updateLoginNav(message: string) {
      this.functioHideLoginNav.next(message)
      }  


}
