import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.dev';
import { Character, CharacterResponse } from '../interfaces/characters.interface';

@Injectable({
    providedIn: 'root'
})
export class CharactersService {
    private apiUrl = environment.apiUrl;
    constructor() { }

    async getAllCharacters(page: number){
        const response = await fetch(`${this.apiUrl}/character?page=${page}`);
        const data: CharacterResponse = await response.json();
        return data;
    }
    async getCharacterById(id: number){
        const response = await fetch(`${this.apiUrl}/character/${id}`);
        const data: Character = await response.json();
        return data;
    }
}