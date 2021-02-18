import React, {forwardRef} from 'react';
import classNames from 'classnames';
import styles from './Col.module.scss';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number | string;
  offset?: number | string;
}

const Col: React.ForwardRefExoticComponent<
  ColProps & React.RefAttributes<HTMLDivElement>
> = forwardRef(({children, span, offset, ...props}, ref) => {
  return (
    <div
      className={classNames(
        span && styles[`span-${span}`],
        offset && styles[`offset-${offset}`],
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

export default Col;
