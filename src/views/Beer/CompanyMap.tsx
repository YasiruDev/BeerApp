import React, { useEffect, useState } from 'react'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'
import { Point } from 'ol/geom'
import Feature from 'ol/Feature'
import { Vector as VectorLayer } from 'ol/layer'
import { Vector as VectorSource } from 'ol/source'
import { Style, Icon } from 'ol/style'
import { Beer as IBeer } from '../../types'
import location from './../../assets/images/location.png'

type TmapProps = {
    latitude: IBeer['latitude']
    longitude: IBeer['longitude']
}

const CompanyMap = ({ latitude, longitude }: TmapProps) => {
    const [map, setMap] = useState<Map | null>(null)

    const renderLayer = () => {
        return new VectorLayer({
            source: new VectorSource({
                features: [
                    new Feature(
                        new Point(
                            fromLonLat([
                                parseFloat(longitude),
                                parseFloat(latitude),
                            ])
                        )
                    ),
                ],
            }),
            style: new Style({
                image: new Icon({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    height: 20,
                    width: 20,
                    src: location,
                }),
            }),
        })
    }

    const renderMap = () => {
        return new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([0, 0]),
                zoom: 2,
            }),
        })
    }
    useEffect(() => {
        // Initialize the map
        const map = renderMap()
        const markerLayer = renderLayer()

        map.addLayer(markerLayer)
        setMap(map)

        return () => {
            map.dispose()
        }
    }, [latitude, longitude])

    useEffect(() => {
        if (map) {
            const newCenter = fromLonLat([
                parseFloat(longitude),
                parseFloat(latitude),
            ])
            map.getView().animate({
                center: newCenter,
                zoom: 6,
                duration: 1000,
            })
        }
    }, [latitude, longitude, map])

    return <div id="map" style={{ width: '100%', height: '400px' }}></div>
}

export default CompanyMap
