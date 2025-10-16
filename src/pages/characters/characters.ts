import { Component, effect, signal } from '@angular/core';
import { CharactersService } from '../../service/characters.service';
import { Character } from '../../interfaces/characters.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters',
  imports: [CommonModule, RouterLink],
  templateUrl: './characters.html',
  styleUrls: ['./characters.css'],
})
export class Characters {
  characters = signal<Character[]>([]);
  page = signal(1);

  constructor(private charactersService: CharactersService) {
    effect(() => {
      this.loadCharacters(this.page());
    });
  }

  async loadCharacters(page: number) {
    const data = await this.charactersService.getAllCharacters(page);
    this.characters.set(data.results);
  }
}
