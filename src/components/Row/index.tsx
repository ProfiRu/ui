import React, {forwardRef} from 'react';
import classNames from 'classnames';
import styles from './Row.module.scss';

export type RowProps = React.HTMLAttributes<HTMLDivElement>;

const Row: React.ForwardRefExoticComponent<
  RowProps & React.RefAttributes<HTMLDivElement>
> = forwardRef(({...props}, ref) => {
  return <div className={styles['row']} ref={ref} {...props} />;
});

export default Row;
