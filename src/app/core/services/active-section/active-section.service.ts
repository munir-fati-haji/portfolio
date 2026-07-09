import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActiveSectionService {
  public readonly sectionId = signal('hero');

  public setSectionId(sectionId: string): void {
    this.sectionId.set(sectionId);
  }
}
