import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mycontact } from 'src/model/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
  // contactId:any;
  // contactName:string='';
 allGroups:any[]=[];
 contact:Mycontact={}
  
  constructor(private api:ApiService, private route:Router) { }

  ngOnInit(): void {
     this.api.getAllGroup().subscribe((data:any)=>{
    console.log(data);
    this.allGroups=data
    
  })
}
addContact(){
  this.api.addContact(this.contact).subscribe(
    (data:any)=>{
      this.route.navigateByUrl('')
    }
  )
}
}
