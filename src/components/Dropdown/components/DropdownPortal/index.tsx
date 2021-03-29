import React, {useContext, forwardRef, useEffect} from 'react';
import classNames from 'classnames';

import type {RefAttributes, ForwardRefExoticComponent} from 'react';
import {DropdownContext} from 'components/Dropdown';

import BodyPortal from '../../../BodyPortal';
import type {BodyPortalProps} from '../../../BodyPortal';

import useRelativePosition from '../../../../hooks/useRelativePosition';
import type {RelativePositionOffset} from '../../../../hooks/useRelativePosition';

import styles from './DropdownPortal.module.scss';

export interface DropdownPortalProps extends BodyPortalProps {
  animated?: boolean;
  offset?: RelativePositionOffset;
}

const DropdownPortal: ForwardRefExoticComponent<
  DropdownPortalProps & RefAttributes<HTMLDivElement>
> = forwardRef(({animated = true, offset, style, className, ...props}, ref) => {
  const context = useContext(DropdownContext);
  const [relativePosition, recalc] = useRelativePosition(
    context?.togglerRef?.current,
    context?.horizontalPosition || 'left',
    offset,
  );

  useEffect(() => {
    if (context?.isOpened) recalc();
  }, [context?.isOpened, recalc]);

  return (
    <BodyPortal
      ref={(el) => {
        if (context) context.contentRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref?.current) ref.current = el;
      }}
      className={classNames(
        styles['portal'],
        styles[`horizontal-${context?.horizontalPosition}`],
        animated && styles['animated'],
        context?.isOpened && styles['opened'],
        className,
      )}
      {...props}
      style={{...relativePosition, ...style}}
    />
  );
});

export default DropdownPortal;
