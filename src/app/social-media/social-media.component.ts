import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
 getTrends(){
   this.http.get('https://www.google.com/trends/').subscribe((response) =>{
     console.log('response', response)
   })
 }
}
