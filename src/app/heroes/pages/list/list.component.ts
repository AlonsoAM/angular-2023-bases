import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent {
  public heroNames: string[] = [
    'spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  public deletedHero?: string;

  deleteLastHero(): void {
    // const deleteHero = this.heroNames.pop();
    this.deletedHero = this.heroNames.pop();
    // console.log(deleteHero);
  }
}
