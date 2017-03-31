import * as classNames from 'classnames';
import * as React from 'react';
import { Breakpoints, FloatTypes } from './enums';

/**
 * Property types for general properties.
 *
 * @returns {Object}
 */
// export interface IGeneralPropTypes extends React.Props<any> {
//   [float: string]: FloatTypes;
//   hideFor: PropTypes.oneOf([Breakpoints.MEDIUM, Breakpoints.LARGE]);
//   hideOnlyFor: PropTypes.oneOf(objectValues(Breakpoints));
//   isClearfix: boolean;
//   isHidden: boolean;
//   isInvisible: boolean;
//   showFor: PropTypes.oneOf([Breakpoints.MEDIUM, Breakpoints.LARGE]);
//   showForLandscape: boolean;
//   showForPortrait: boolean;
//   showForSr: boolean;
//   showOnFocus: boolean;
//   showOnlyFor: PropTypes.oneOf(objectValues(Breakpoints));
// };

/**
 * Creates class names from the given arguments.
 *
 * @param {*} args
 * @returns {string}
 */
export function createClassName(...args) {
  return classNames(...args);
}

/**
 * Parses the general class names from the given properties.
 *
 * @param {Object} props
 * @returns {Object}
 */
export function generalClassNames(props) {
  return {
    'clearfix': props.isClearfix,
    'float-center': props.float === FloatTypes.CENTER,
    'float-left': props.float === FloatTypes.LEFT,
    'float-right': props.float === FloatTypes.RIGHT,
    'hide': props.isHidden,
    'hide-for-large': props.hideFor === Breakpoints.LARGE,
    'hide-for-large-only': props.hideOnlyFor === Breakpoints.LARGE,
    'hide-for-medium': props.hideFor === Breakpoints.MEDIUM,
    'hide-for-medium-only': props.hideOnlyFor === Breakpoints.MEDIUM,
    'hide-for-small-only': props.hideOnlyFor === Breakpoints.SMALL,
    'invisible': props.isInvisible,
    'show-for-landscape': props.showForLandscape,
    'show-for-large': props.showFor === Breakpoints.LARGE,
    'show-for-large-only': props.showOnlyFor === Breakpoints.LARGE,
    'show-for-medium': props.showFor === Breakpoints.MEDIUM,
    'show-for-medium-only': props.showOnlyFor === Breakpoints.MEDIUM,
    'show-for-portrait': props.showForPortrait,
    'show-for-small-only': props.showOnlyFor === Breakpoints.SMALL,
    'show-for-sr': props.showForSr,
    'show-on-focus': props.showOnFocus,
  };
}

/**
 * Returns the keys for the given object.
 * This method is used for getting the keys for prop types.
 *
 * @param {Object} object
 * @returns {Array}
 */
export function objectKeys(object) {
  return Object.keys(object);
}

/**
 * Returns the values for the given object.
 * This method is used for getting the values for enumerables.
 *
 * @param {Object} object
 * @returns {Array}
 */
export function objectValues(object) {
  const values = [];

  for (const property in object) {
    if (object.hasOwnProperty(property)) {
      values.push(object[property]);
    }
  }

  return values;
}

/**
 * Removes properties from the given object.
 * This method is used for removing valid attributes from component props prior to rendering.
 *
 * @param {Object} object
 * @param {Array} remove
 * @returns {Object}
 */
export function removeProps(object, remove): object {
  const result = {};

  for (const property in object) {
    if (object.hasOwnProperty(property) && remove.indexOf(property) === -1) {
      result[property] = object[property];
    }
  }

  return result;
}

/**
 * Returns whether or not the given value is defined.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isDefined(value) {
  return typeof value !== 'undefined';
}
