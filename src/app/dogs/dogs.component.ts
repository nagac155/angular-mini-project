import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PetsService } from '../service/pets.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dogs',
  imports: [CommonModule],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.scss'
})
export class DogsComponent {

  private petsService = inject(PetsService);
  dog: Observable<any> = new Observable<any>();


  getRandomDog(): void {
    this.dog = this.petsService.getDogs();
  }

}
