
import { levelColors } from 'view/themes/org-colors'
import { shadeBlend } from 'helpers/colors';
import { Fonts, Colors } from 'view/themes';

export const headlineStyles = levelColors.reduce(
  (acc, color, idx) => ({
    ...acc,
    [`h${idx + 1}C`]: {
      color,
      fontSize: Fonts.size.regular,
    },
    [`h${idx + 1}CH`]: {
      color: shadeBlend(-0.4,color, Colors.white),
      fontSize: Fonts.size.regular,
    },
    [`h${idx + 1}R`]: {
      fontSize: Fonts.size.h2 - idx * 6,
      fontWeight: idx === 0 ? 'bold' : 'normal'
    },
  }),
  {}
)
