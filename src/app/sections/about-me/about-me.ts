import { Component } from '@angular/core';
import { AboutIntro } from './components/about-intro/about-intro';
import { AboutSkills } from './components/about-skills/about-skills';
import { AboutHighlights } from './components/about-highlights/about-highlights';
import { SectionContainer } from '../../shared/components/full-page-wrapper/section-container';
import { ABOUT_DESCRIPTION, ABOUT_EYEBROW, ABOUT_SECOND_DESCRIPTION, ABOUT_TITLE } from './data/about-copy';
import { ABOUT_HIGHLIGHTS } from './data/about-highlights';
import { ABOUT_SKILLS } from './data/about-skills';

@Component({
  selector: 'app-about-me',
  imports: [AboutIntro, AboutSkills, AboutHighlights, SectionContainer],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  public readonly eyebrow = ABOUT_EYEBROW;
  public readonly title = ABOUT_TITLE;
  public readonly description = ABOUT_DESCRIPTION;
  public readonly secondDescription = ABOUT_SECOND_DESCRIPTION;
  public readonly skills = ABOUT_SKILLS;
  public readonly highlights = ABOUT_HIGHLIGHTS;
}
