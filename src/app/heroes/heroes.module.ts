import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { HeroComponent } from './pages/hero/hero.component';

@NgModule({
  declarations: [ListComponent, HeroComponent],
  imports: [CommonModule],
  exports: [ListComponent, HeroComponent],
})
export class HeroeModule {}
