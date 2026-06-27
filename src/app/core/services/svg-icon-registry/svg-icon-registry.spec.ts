import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SVG_ICON_NAMES } from '../../constants/svg-icons';
import { SvgIconRegistry } from './svg-icon-registry';

describe('SvgIconRegistry', () => {
  const trustedUrl = {} as SafeResourceUrl;
  const addSvgIcon = vi.fn();
  const bypassSecurityTrustResourceUrl = vi.fn(() => trustedUrl);

  beforeEach(() => {
    addSvgIcon.mockClear();
    bypassSecurityTrustResourceUrl.mockClear();

    TestBed.configureTestingModule({
      providers: [
        SvgIconRegistry,
        {
          provide: MatIconRegistry,
          useValue: { addSvgIcon },
        },
        {
          provide: DomSanitizer,
          useValue: { bypassSecurityTrustResourceUrl },
        },
      ],
    });
  });

  it('registers every configured SVG icon', () => {
    TestBed.inject(SvgIconRegistry).register();

    expect(addSvgIcon).toHaveBeenCalledTimes(SVG_ICON_NAMES.length);

    SVG_ICON_NAMES.forEach((iconName) => {
      expect(addSvgIcon).toHaveBeenCalledWith(iconName, trustedUrl);
    });
  });

  it('trusts icon URLs from the public icons folder', () => {
    TestBed.inject(SvgIconRegistry).register();

    SVG_ICON_NAMES.forEach((iconName) => {
      expect(bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(`icons/${iconName}.svg`);
    });
  });
});
