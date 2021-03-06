import React, { useEffect, useState } from "react"
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet"
import { CRS, LatLng, LatLngExpression } from "leaflet"
import "leaflet-routing-machine"
import L from "leaflet"
import { BiCurrentLocation, GiPartyPopper } from "react-icons/all"

interface MapProps {
    className?: string
}

const coordsMaze: LatLngExpression = [47.456060, -0.271910]
const coordsPayotte: LatLngExpression = [47.449973, -0.283195]
const defaultZoom = 14

const Maps: React.FC<MapProps> = ({ className }) => {
    const [currentLocation, setCurrentLocation] = useState<LatLngExpression>([0, 0])
    const [map, setMap] = useState<L.Map>({} as L.Map)
    const [waypoints, setWaypoints] = useState<LatLng[]>([L.latLng(coordsPayotte[0], coordsPayotte[1])])

    useEffect(() => {
        let mounted = true
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                if (mounted) {
                    setCurrentLocation([position.coords.latitude, position.coords.longitude])
                    setWaypoints([L.latLng(position.coords.latitude, position.coords.longitude), ...waypoints])
                }
            })
        }
        return () => {
            mounted = false
        }
    }, [])

    const computeRoute = (): void => {
        L.Routing.control({
            waypoints: [
                L.latLng(currentLocation[0], currentLocation[1]),
                L.latLng(coordsPayotte[0], coordsPayotte[1])
            ],
            formatter: new L.Routing.Formatter({
                language: "fr",
                distanceTemplate: "{value} {unit}",
            }),
            plan: L.Routing.plan(waypoints, {
                draggableWaypoints: false,
                addWaypoints: false,
                language: "fr",
                createMarker: (i, waypoint) => (
                    L.marker(waypoint.latLng, {
                        draggable: false,
                        zIndexOffset: -1
                    }))
            }),
            summaryTemplate: "<h2>{name}</h2><h3><b>{distance}, {time}</b></h3>",
            addWaypoints: false,
            collapsible: true,
            showAlternatives: false,
            show: true
        }).addTo(map)
        map.flyTo(currentLocation, 14)
    }

    return (
        <MapContainer crs={ CRS.EPSG900913 } center={ coordsMaze } zoom={ defaultZoom }
            whenCreated={ map1 => setMap(map1) }
            scrollWheelZoom={ true } dragging={ true } markerZoomAnimation={ true }
            zoomAnimation={ true } fadeAnimation={ true } attributionControl={ true }
            className={ `w-full px-2 h-64 sm:h-96 ${ className }` }>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={ coordsPayotte } draggable={ false }>
                <Popup>
                    <div className="flex flex-col items-center font-bold">
                        <div className="inline-flex items-baseline text-2xl">
                            <GiPartyPopper/>
                            <div className="m-2">Le festival</div>
                            <GiPartyPopper/>
                        </div>
                        <button onClick={ computeRoute }
                            className="font-semibold text-white bg-test-green border border-test-green rounded p-2 hover:bg-white hover:text-test-green focus:outline-none">
                            Itinéraire depuis ma position
                        </button>
                    </div>
                </Popup>
            </Marker>
            <Marker position={ currentLocation } draggable={ false }>
                <Popup>
                    <div className="inline-flex items-center text-xl">
                        <BiCurrentLocation/>
                        <div className="font-bold mx-1">Ma position</div>
                        <BiCurrentLocation/>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Maps