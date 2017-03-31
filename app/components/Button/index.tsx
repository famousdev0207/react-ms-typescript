import * as classNames from 'classnames';
import * as React from 'react';
import { createClassName, generalClassNames, objectKeys, removeProps } from '../utils';

// interface IButtonProps extends React.Props<any> {
//   ...GeneralPropTypes;
//   color: PropTypes.oneOf(objectValues(ButtonColors)),
//   size: PropTypes.oneOf(objectValues(ButtonSizes)),
//   isHollow: boolean;
//   isExpanded: boolean;
//   isDisabled: boolean;
//   isDropdown: boolean;
// }

// export default function Button({

// }: IButtonProps) {
//   const passProps = removeProps(IButtonProps, objectKeys(Button.propTypes));
//   return <button {...passProps} className={createButtonClassName(IButtonProps)} />;
// };

function createButtonClassName(props) {
  return createClassName(
    props.noDefaultClassName ? null : 'button',
    props.className,
    props.size,
    props.color,
    {
      'arrow-only': props.isArrowOnly,
      'disabled': props.isDisabled,
      'dropdown': props.isDropdown,
      'expanded': props.isExpanded,
      'hollow': props.isHollow,
    },
    generalClassNames(props),
  );
}
