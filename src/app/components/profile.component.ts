import { Component } from '@angular/core';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'my-profile',
  templateUrl: 'profile.component.html' 
})
export class ProfileComponent {
  title = 'MyFirstProfileApp';
  person = {
    firstname:'Duong',
    lastname:'Pham',
    age:34,
    avatar:'assets/circle.png',
    address:{
        street: '15 Dong Quan',
        city:'Ha Noi',
        country:'Viet Nam'
    },
    friends:[
      {name:'Bob', age:30},
      {name:'Cindy', age:31},
      {name:'Huyen', age:33}
    ]
  }
}
