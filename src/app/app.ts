import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Love } from './love/love';
import { Love2 } from './love2/love2';
import { Love3 } from './love3/love3';
import { Love4 } from './love4/love4';
import { Love5 } from './love5/love5';
import { Love6 } from './love6/love6';



@Component({
  imports: [RouterOutlet, Header, Love, Love2, Love3, Love4, Love5, Love6],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FirstProjet');
}
