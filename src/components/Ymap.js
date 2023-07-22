import React from 'react'
import { YMaps, Map, SearchControl } from '@pbe/react-yandex-maps'

export default function Ymap() {
  return (
    <div>
<YMaps>
  <Map
    defaultState={{
      center: [55.751574, 37.573856],
      zoom: 9,
      controls: [],
    }}
  >
    <SearchControl options={{ float: "right" }} />
  </Map>
</YMaps>;
    </div>
  )
}
