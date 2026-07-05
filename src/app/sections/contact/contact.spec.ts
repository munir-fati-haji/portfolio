import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { SectionHeader } from '@shared/components/section-header/section-header';
import { ContactLinkCard } from './components/contact-link-card/contact-link-card';
import { CONTACT_DESCRIPTION, CONTACT_EYEBROW, CONTACT_TITLE } from './data/contact-copy';
import { CONTACT_LINKS } from './data/contact-links';
import { Contact } from './contact';

describe('Contact', () => {
  beforeEach(() => MockBuilder(Contact).mock(SectionHeader).mock(ContactLinkCard));

  it('passes copy to the section header', () => {
    MockRender(Contact);

    const sectionHeader = ngMocks.find(SectionHeader);

    expect(ngMocks.input(sectionHeader, 'eyebrow')).toBe(CONTACT_EYEBROW);
    expect(ngMocks.input(sectionHeader, 'title')).toBe(CONTACT_TITLE);
    expect(ngMocks.input(sectionHeader, 'description')).toBe(CONTACT_DESCRIPTION);
  });

  it('renders contact link cards from data', () => {
    MockRender(Contact);

    const contactCards = ngMocks.findAll(ContactLinkCard);

    expect(contactCards).toHaveLength(CONTACT_LINKS.length);
    expect(ngMocks.input(contactCards[0], 'link')).toEqual(CONTACT_LINKS[0]);
    expect(ngMocks.input(contactCards[0], 'isCopied')).toBe(false);
  });
});
