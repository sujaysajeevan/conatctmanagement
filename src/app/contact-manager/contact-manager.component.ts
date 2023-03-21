import { Component, OnInit } from '@angular/core';
import { Mycontact } from 'src/model/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  loginDate:any;
  //searching
  searchkey:string='';

        // heading='Contact Details'

  //one methord allContacts:any 
  //STRING INTERPOLATION
  allContacts:Mycontact[]=[] //empty array

  
  constructor(private api:ApiService){
    this.loginDate=new Date()
  }

  ngOnInit(): void {
    this.getAllContact()
  }

    getAllContact(){
    this.api.getAllContact().subscribe((data:any)=>{

      console.log(data)//array of data array(4) contact details
      this.allContacts=data 
      
    })
  }

  // namechange(){
  //   alert("value changed")
  // }
  search(event:any){
    console.log(event.target.value);
    this.searchkey=event.target.value
    console.log(this.searchkey);
    
  }
  deleteContact(contactId:any){
    this.api.deleteContact(contactId).subscribe((data:any)=>{
      alert('contact deleted')
      this.getAllContact()
      
    })
  }

}
