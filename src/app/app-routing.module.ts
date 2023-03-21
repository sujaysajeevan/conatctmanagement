import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {
    //localhost://4200
    path:'',redirectTo:'contact/admin',pathMatch:'full'
  },
  {
    //localhost://4200/contact/admin
    path:'contact/admin',component:ContactManagerComponent
  },
  //creating another path of add contact
  {
    path:'contact/add',component:AddContactComponent
  },
  {
    path:'contact/update/:Id',component:UpdateContactComponent
  },
  {
    path:'contact/view/:contactId',component:ViewContactComponent
  },
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
