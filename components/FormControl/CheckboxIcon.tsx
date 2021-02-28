import React from 'react';

type Props = {
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function CheckboxIcon({ isChecked, onClick }: Props) {
  const checkedClass = isChecked ? 'fa fa-check-square' : 'fa fa-square-o';
  return (
    <i
      className={checkedClass}
      onClick={onClick}
      style={{
        padding: 0,
        margin: 'auto'
      }}
      aria-hidden="true"
    />
  );
}
