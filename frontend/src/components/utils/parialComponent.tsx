import React from 'react'

type PartialProps<TProps, TGiven extends Partial<TProps>> = Omit<TProps, keyof TGiven>

export function partiallyApplied<TProps, TGiven extends Partial<TProps>>(
  Component: React.FC<TProps>,
  given: TGiven,
): React.FC<PartialProps<TProps, TGiven>> {
  function PartialComponent(props: Omit<TProps, keyof TGiven>) {
    return <Component {...given} {...(props as TProps)} />
  }
  return PartialComponent
}
