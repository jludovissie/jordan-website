import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted= false;

  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm){
    console.log(form.value)

    this.submitted= true;
  }


}
