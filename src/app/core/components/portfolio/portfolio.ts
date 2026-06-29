import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Content } from './components/content/content';

@Component({
  selector: 'app-portfolio',
  host: { class: 'flex h-dvh flex-col overflow-hidden max-sm:h-svh' },
  imports: [Navbar, Footer, Content],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {}
