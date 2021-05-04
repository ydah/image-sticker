import React from 'react'
import ReactDOM from 'react-dom'
import { ContentScript } from '~/components/ContentScript'
import { StickerObjectListContextProvider } from '~/contexts/StickerObjectList'

const App = () => (
  <StickerObjectListContextProvider>
    <ContentScript />
  </StickerObjectListContextProvider>
)

const divEl = document.createElement('div')
divEl.setAttribute('id', 'imgstckr')
document.body.appendChild(divEl)
ReactDOM.render(<App />, divEl)
