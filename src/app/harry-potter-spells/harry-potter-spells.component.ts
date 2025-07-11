import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PetsService } from '../service/pets.service';

import { Subject, takeUntil } from 'rxjs';

export interface HPSpell {
  spell: string;
  use: string;
  index: number;
}

@Component({
  selector: 'app-harry-potter-spells',
  templateUrl: './harry-potter-spells.component.html',
  styleUrl: './harry-potter-spells.component.scss'
})
export class CatsComponent implements OnInit, OnDestroy {
  private petsService = inject(PetsService);
  spells = signal<HPSpell[]>([]);
  private subscription = new Subject<void>();

  ngOnInit(): void {
      this.petsService.getSpells().pipe(takeUntil(this.subscription)).subscribe((e: HPSpell[]) => {
        console.log(e)
        this.spells.set(e);
      });
  }

  ngOnDestroy(): void {
      this.subscription.next();
      this.subscription.complete();
  }
}

