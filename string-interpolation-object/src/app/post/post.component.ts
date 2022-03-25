import { Component, OnInit } from '@angular/core';
import { lookupService } from 'dns';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})




export class PostComponent implements OnInit {
  firstName: string = 'Luke';
  lastName: string = 'Wilson';

  constructor() {

   }

  ngOnInit(): void {
  }



}
