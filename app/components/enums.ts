/**
 * Breakpoints enumerable.
 *
 * @type {{SMALL: string, MEDIUM: string, LARGE: string, XLARGE: string, XXLARGE: string}}
 */
export const Breakpoints = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge',
};

/**
 * Badge color enumerable.
 *
 * @type {Object}
 */
export const BadgeColors = {
  ALERT: 'alert',
  INFO: 'info',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
};

/**
 * Button color enumerable.
 *
 * @type {Object}
 */
export const ButtonColors = {
  ALERT: 'alert',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
};

/**
 * Button group color enumerable.
 *
 * @type {Object}
 */
export const ButtonGroupColors = {
  ALERT: 'alert',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
};

/**
 * Callout color enumerable.
 *
 * @type {Object}
 */
export const CalloutColors = {
  ALERT: 'alert',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
};

/**
 * Label color enumerable.
 *
 * @type {Object}
 */
export const LabelColors = {
  ALERT: 'alert',
  INFO: 'info',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
};

/**
 * Progress colors enumerable.
 *
 * @type {Object}
 */
export const ProgressColors = {
  ALERT: 'alert',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
};

/**
 * Color meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */
export const Colors = {
  ...BadgeColors,
  ...ButtonColors,
  ...ButtonGroupColors,
  ...CalloutColors,
  ...LabelColors,
  ...ProgressColors,
};

/**
 * Callout size enumerable.
 *
 * @type {Object}
 */
export const CalloutSizes = {
  LARGE: 'large',
  SMALL: 'small',
};

/**
 * Button size enumerable.
 *
 * @type {Object}
 */
export const ButtonSizes = {
  LARGE: 'large',
  SMALL: 'small',
  TINY: 'tiny',
};

/**
 * Button group size enumerable.
 *
 * @type {Object}
 */
export const ButtonGroupSizes = {
  LARGE: 'large',
  SMALL: 'small',
  TINY: 'tiny',
};

/**
 * Switch size enumerable.
 *
 * @type {Object}
 */
export const SwitchSizes = {
  LARGE: 'large',
  SMALL: 'small',
  TINY: 'tiny',
};

/**
 * Size meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */
export const Sizes = {
  ...ButtonSizes,
  ...ButtonGroupSizes,
  ...CalloutSizes,
  ...SwitchSizes,
};

/**
 * Horizontal alignment enumerable.
 *
 * @type {Object}
 */
export const HorizontalAlignments = {
  CENTER: 'center',
  JUSTIFY: 'justify',
  RIGHT: 'right',
  SPACED: 'spaced',
};

/**
 * Vertical alignment enumerable.
 *
 * @type {Object}
 */
export const VerticalAlignments = {
  BOTTOM: 'bottom',
  MIDDLE: 'middle',
  STRETCH: 'stretch',
  TOP: 'top',
};

/**
 * Menu alignment enumerable.
 *
 * @type {{RIGHT: string, CENTER: string}}
 */
export const MenuAlignments = {
  CENTER: 'center',
  RIGHT: 'right',
};

/**
 * Alignments meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */
export const Alignments = {
  ...HorizontalAlignments,
  ...VerticalAlignments,
  ...MenuAlignments,
};

/**
 * Float types enumerable.
 *
 * @type {{LEFT: string, CENTER: string, RIGHT: string}}
 */
export const FloatTypes = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
};

/**
 * Switch type enumerable.
 *
 * @type {Object}
 */
export const SwitchInputTypes = {
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
};

/**
 * Input type meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */
export const InputTypes = {
  ...SwitchInputTypes,
};
