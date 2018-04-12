import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Shared/Models/Movie';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  {

  @Input() selectedMovie:Movie;

}
