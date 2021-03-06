import React, {forwardRef} from 'react';
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';

import styles from './Loader.module.scss';

export interface LoaderProps extends RefAttributes<HTMLDivElement> {
  design?: 'circle' | 'square';
  size?: 'extraSmall' | 'small' | 'medium' | 'large';
  color?: 'white' | 'gray';
  animation?: 'scale' | 'blick';
}

const LoaderDots: ForwardRefExoticComponent<
  LoaderProps & HTMLAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
      size = 'medium',
      design = 'square',
      animation = 'scale',
      color = 'white',
      ...props
    }: LoaderProps,
    ref,
  ) => (
    <div
      className={classnames(
        styles['loader'],
        styles[`size-${size}`],
        styles[`design-${design}`],
      )}
      ref={ref}
      {...props}
    >
      {Array.from({length: 3}).map((_, i) => (
        <div
          key={i}
          className={[
            styles['dot'],
            styles[`dotAnimation-${animation}`],
            styles[`dotDesign-${design}`],
            styles[`dotSize-${size}`],
            styles[`dotColor-${color}`],
          ].join(' ')}
        />
      ))}
    </div>
  ),
);

export default LoaderDots;
