import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      name: "Krilin",
      power: 1000,
      id: uuid()
    },
    {
      name: "Goku",
      power: 9500,
      id: uuid()
    },
    {
      name: "Vegetta",
      power: 7500,
      id: uuid()
    }
  ]

  onAddCharacter(character: Character): void {
    const newCharacter: Character = {...character, id: uuid()};
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    // this.characters.splice(index, 1);

    this.characters = this.characters.filter(character => character.id !== id);
  }
}
