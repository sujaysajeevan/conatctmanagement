import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mycontact } from 'src/model/mycontact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseurl:string='http://localhost:3000/conatcts'

  //function - get all contact
  getAllContact():Observable<Mycontact>{
   return this.http.get(this.baseurl)
  }

  //api call for fetch particular contact
  viewcontact(contactId:any){
   // http://localhost:3000/conatcts/4
    return this.http.get(`${this.baseurl}/${contactId}`)
  }

  //api call for fetch group name
  getGroupName(groupId:any){
   return this.http.get('http://localhost:3000/group/'+groupId)
  }
  //finction fetch all groups from http://localhost:3000/group
  getAllGroup(){
    return this.http.get('http://localhost:3000/group')
  }
  //function add new contact to server
      addContact(contactBody:any){
        return this.http.post(this.baseurl,contactBody)

      }
      //function for delete a contact from server
      deleteContact(contactId:any){
        return this.http.delete(`${this.baseurl}/${contactId}`)

      }
      //function for updating an existing contact
      updateContact(contactid:any,contactBody:any){
       return this.http.put(`${this.baseurl}/${contactid}`,contactBody)
      }
}

