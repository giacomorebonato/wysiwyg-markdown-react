import cn from 'classnames'
import React, { ReactNode } from 'react'

type BaseButtonProps = {
  active: boolean
  enabled: boolean
  onClick: (params: any) => void
  children: ReactNode
}

export const BaseButton = ({
  children,
  onClick,
  enabled,
  active,
}: BaseButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(`btn box-border shrink-0 btn-ghost`, {
        'btn-disabled': false,
        'backdrop-brightness-50': active,
        enabled,
      })}
    >
      {children}
    </button>
  )
}
