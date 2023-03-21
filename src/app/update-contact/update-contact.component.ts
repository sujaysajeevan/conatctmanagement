import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mycontact } from 'src/model/mycontact';
import { Mygroup } from 'src/model/mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactId: string='';
  contact:Mycontact={}
  groups:Mygroup[]=[]

 constructor(private activatedRoute:ActivatedRoute, private api:ApiService,private route:Router ) { }

 ngOnInit(): void {
  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data.Id);//id-contactid=3
    this.contactId=data.Id
    //call an api for getting particular contact details
    this.api.viewcontact(this.contactId).subscribe((data:any)=>{
      console.log(data);/////////particular contact details
      this.contact=data
          //call an api for getting particular groupt details
       this.api.getAllGroup().subscribe((data:any)=>{
        console.log(data);
        this.groups=data
        
       })  

    })
  })

   
 }

 updateContact(){
  this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
    this.route.navigateByUrl('')
  })
 }
}
