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

    expect(fixture.nativeElement.textContent).toContain('About');
    expect(fixture.nativeElement.textContent).toContain('Clean frontend systems');
    expect(fixture.nativeElement.textContent).toContain('First paragraph.');
    expect(fixture.nativeElement.textContent).toContain('Second paragraph.');
  });
});
