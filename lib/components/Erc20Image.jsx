import React from 'react'
import classnames from 'classnames'

// import { TOKEN_IMAGES } from 'lib/constants/tokenImages'
import { useCoingeckoTokenInfoQuery } from 'lib/hooks/useCoingeckoTokenInfoQuery'

export const Erc20Image = (props) => {
  const marginClasses = props.marginClasses ?? 'mr-2'
  let src = TOKEN_IMAGES[props.address.toLowerCase()]

  if (!src) {
    const { data: tokenInfo } = useCoingeckoTokenInfoQuery(props.address)
    src = tokenInfo?.image?.thumb
  }

  return src ? (
    <img
      src={src}
      className={classnames('inline-block w-5 h-5 rounded-full', props.className, marginClasses)}
    />
  ) : (
    <div
      className={classnames(
        'inline-block bg-overlay-white w-5 h-5 rounded-full',
        props.className,
        marginClasses
      )}
      style={{
        minWidth: 12
      }}
    />
  )
}
