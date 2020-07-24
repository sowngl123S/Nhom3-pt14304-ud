import { Component, OnInit } from '@angular/core';
import { Agile } from '../agile';
import { AgileService } from '../agile.service';
import { data } from '../Mockupdata';

@Component({
  selector: 'app-agile-user',
  templateUrl: './agile-user.component.html',
  styleUrls: ['./agile-user.component.scss']
})
export class AgileUserComponent implements OnInit {
  selected: Agile;
  agiles : Agile[];
  agile: Agile;
  public keyword: string;
  constructor(
    private agileService: AgileService

  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.agileService.getProducts().subscribe(data =>{
      console.log(data);
      this.agiles = data;
    });
  }

  Search(){
    this.agileService.Search(this.keyword).subscribe(data => {
      console.log(data);
      this.agiles = data;
     });

     
  }
}
