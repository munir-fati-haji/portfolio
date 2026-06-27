import { Component } from '@angular/core';
import { AboutMe } from '../../../../../sections/about-me/about-me';
import { CaseStudy } from '../../../../../sections/case-study/case-study';
import { Contact } from '../../../../../sections/contact/contact';
import { Education } from '../../../../../sections/education/education';
import { Experience } from '../../../../../sections/experience/experience';
import { Hero } from '../../../../../sections/hero/hero';
import { Projects } from '../../../../../sections/projects/projects';
import { Skills } from '../../../../../sections/skills/skills';
import { WorkingOn } from '../../../../../sections/working-on/working-on';

@Component({
  selector: 'app-content',
  imports: [AboutMe, CaseStudy, Contact, Education, Experience, Hero, Projects, Skills, WorkingOn],
  templateUrl: './content.html',
})
export class Content {}
