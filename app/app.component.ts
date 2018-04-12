import { Component } from '@angular/core';
import { Movie } from '../app/Shared/Models/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  
    title = 'app';

    res:Movie;


  public onMovieSelected(chosenMovie:Movie){

    this.res=chosenMovie;
  }
}
