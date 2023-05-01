import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-component',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopels:any
  // TODO: Include the PersonService and get the list of People
  constructor(private peopleService:PeopleService) { }

  ngOnInit() {
    this.peopels = this.peopleService.getPeople()
    console.log(this.peopels)
  }

}
