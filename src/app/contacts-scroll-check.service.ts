import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactsScrollCheckService {
  linkedThroughContacts:boolean = false;
  constructor() { }
  setTrue(){
    this.linkedThroughContacts = true;
  }
  setFalse(){
    this.linkedThroughContacts = false;
  }
}
