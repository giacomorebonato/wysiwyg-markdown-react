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
      className={cn(`md-btn md-box-border md-shrink-0 md-btn-ghost`, {
        'md-btn-disabled': false,
        'md-backdrop-brightness-50': active,
        enabled,
      })}
    >
      {children}
    </button>
  )
}
