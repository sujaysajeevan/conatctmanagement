import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  //allContacts -array , serchkey-amal ,propName -name
 

  transform(allContacts:any=[], serchkey:string, propName:string):any[] {
  const  result:any=[]
     
    if(!allContacts||serchkey==''|| propName==''){  ///anyone true
      return allContacts
    }
    ////searching
    
    allContacts.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().includes(serchkey.toLowerCase())){  ////trim for avoid white space,includes or startwith for searching
        result.push(contact)
      }
    })
   

    return result;
  }

}
