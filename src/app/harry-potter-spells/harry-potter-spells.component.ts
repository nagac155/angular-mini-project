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
  error = signal<string | null>(null);
  loading = signal<boolean>(true);

  ngOnInit(): void {
    this.petsService.getSpells()
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (e: HPSpell[]) => {
          this.loading.set(false);
          this.spells.set(e);
      },
        error: (error) => {
          this.loading.set(false);
            this.error.set('Failed to load spells. Please try again later.' + (error?.message ? `Error: ${error.message}` : ''));
          }
      });
  }

  ngOnDestroy(): void {
      this.subscription.next();
      this.subscription.complete();
  }
}

