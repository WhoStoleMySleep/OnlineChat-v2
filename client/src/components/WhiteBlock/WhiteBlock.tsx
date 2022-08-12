import classNames from 'classnames';
import React from 'react';
import styles from './white-block.module.scss';

function WhiteBlock({ children, className }: any) {
  return (
    <div className={classNames(className, styles['white-block'])}>
      {children}
    </div>
  );
}

export default WhiteBlock;
