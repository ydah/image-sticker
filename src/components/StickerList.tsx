import React, { FC } from 'react'
import styled from 'styled-components'
import { Sticker } from './Sticker'
import { useStickerList } from '../hooks/StickerList'
import { StickerObject } from '../lib/StickerObject'

type PresentationalStickerList = FC<{
  className?: string
  generatedClassName?: string
  stickerObjectList: StickerObject[]
}>

export const PresentationalStickerList = styled<PresentationalStickerList>(
  ({ className = '', stickerObjectList }) => (
    <div className={className}>
      {stickerObjectList.map(stickerObject => (
        <Sticker key={stickerObject.id} src={stickerObject.src} />
      ))}
    </div>
  )
)``

type StickerList = FC

export const StickerList: StickerList = () => {
  const { stickerObjectList } = useStickerList()

  return <PresentationalStickerList stickerObjectList={stickerObjectList} />
}
