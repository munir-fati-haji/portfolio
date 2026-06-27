export const SVG_ICON_NAMES = ['github', 'gitlab', 'gmail', 'linkedin'] as const;

export type SvgIconName = (typeof SVG_ICON_NAMES)[number];
