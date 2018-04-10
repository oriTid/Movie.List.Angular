import { Component, OnInit } from '@angular/core';
import {arr} from "../Shared/Models/MovieList";
import { Movie } from '../Shared/Models/Movie';
import { allResolved } from 'q';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

movies:Movie[]=arr;
 

selctedMovie: Movie = new Movie();

selectedMovieFunc(movieID:number):void{
  for(let i of this.movies){
    if (i.id==movieID){
      this.selctedMovie=i;
            break;
        }
  }
  
}


}


