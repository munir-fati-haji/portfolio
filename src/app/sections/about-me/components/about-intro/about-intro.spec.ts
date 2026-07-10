import { MockBuilder, MockRender } from 'ng-mocks';

import { AboutIntro } from './about-intro';

describe('AboutIntro', () => {
  beforeEach(() => MockBuilder(AboutIntro));

  it('renders all supplied intro copy', () => {
    const fixture = MockRender(AboutIntro, {
      eyebrow: 'About',
      title: 'Clean frontend systems',
      description: 'First paragraph.',
      secondDescription: 'Second paragraph.',
    });
    const nativeElement = fixture.nativeElement as HTMLElement;
    const text = nativeElement.textContent;

    expect(text).toContain('About');
    expect(text).toContain('Clean frontend systems');
    expect(text).toContain('First paragraph.');
    expect(text).toContain('Second paragraph.');
  });
});
