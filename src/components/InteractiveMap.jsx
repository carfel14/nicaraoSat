'use client'

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ChevronRight, MapPin, Thermometer, Droplets } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { format } from 'date-fns'
import hemco from '@/assets/hemco.jpg'
import laLibertad from '@/assets/laLibertad.jpg'
import elLimon from '@/assets/elLimon.jpg'

// Mock data for site information
const sites = [
  {
    id: 1,
    name: 'Mina y Molino el Limón',
    lat: 12.755799616933643,
    lng: -86.7381169569907,
    status: 'Monitoreo In-Situ',
    image: elLimon,
    temperature: 22.5,
    humidity: 45,
    airQuality: 'Buena'
  },
  {
    id: 2,
    name: 'Mina y Molino la Libertad',
    lat: 12.241953190009696,
    lng: -85.20165858288834,
    status: 'Monitoreo Satelital',
    image: laLibertad,
    temperature: 23.1,
    humidity: 50,
    airQuality: 'Moderada'
  },
  {
    id: 3,
    name: 'HEMCO Nicaragua S.A',
    lat: 14.032627398296968,
    lng:  -84.59396862121328,
    status: 'Monitoreo In-Situ',
    image: hemco,
    temperature: 21.8,
    humidity: 40,
    airQuality: 'Excelente'
  }
]

const timeSeriesData = {
  1: [
    { time: '2024-10-21', temperature: 20, humidity: 40 },
    { time: '2024-10-22', temperature: 22, humidity: 45 },
    { time: '2024-10-23', temperature: 25, humidity: 50 },
    { time: '2024-10-24', temperature: 23, humidity: 45 },
    { time: '2024-10-25', temperature: 21, humidity: 40 },
    { time: '2024-10-26', temperature: 20, humidity: 42 },
    { time: '2024-10-27', temperature: 22, humidity: 44 },
  ],
  2: [
    { time: '2024-10-21', temperature: 21, humidity: 45 },
    { time: '2024-10-22', temperature: 23, humidity: 48 },
    { time: '2024-10-23', temperature: 26, humidity: 52 },
    { time: '2024-10-24', temperature: 24, humidity: 47 },
    { time: '2024-10-25', temperature: 22, humidity: 43 },
    { time: '2024-10-26', temperature: 21, humidity: 46 },
    { time: '2024-10-27', temperature: 23, humidity: 49 },
  ],
  3: [
    { time: '2024-10-21', temperature: 19, humidity: 38 },
    { time: '2024-10-22', temperature: 21, humidity: 42 },
    { time: '2024-10-23', temperature: 24, humidity: 48 },
    { time: '2024-10-24', temperature: 22, humidity: 43 },
    { time: '2024-10-25', temperature: 20, humidity: 39 },
    { time: '2024-10-26', temperature: 19, humidity: 40 },
    { time: '2024-10-27', temperature: 21, humidity: 41 },
  ],
}

// Custom icon for map markers
const customIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

function MapComponent({ onMarkerClick }) {
  return (
    <MapContainer center={[12.8654, -85.2072]} zoom={7} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {sites.map((site) => (
        <Marker
          key={site.id}
          position={[site.lat, site.lng]}
          icon={customIcon}
          eventHandlers={{
            click: () => onMarkerClick(site),
          }}
        >
          <Popup>{site.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

function DetailsSection({ site }) {
  if (!site) return null

  return (
    <div className="bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out h-full flex flex-col">
      <div className="p-6 flex-grow overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{site.name}</h2>
        <div className="mb-4 relative w-full h-64 overflow-hidden rounded-md">
          <img
            src={site.image}
            alt={`Image of ${site.name}`}
            className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          />
          <div className="absolute bottom-0 right-0 m-2">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              site.status === 'Monitoreo In Situ' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}>
              {site.status}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <Thermometer className="mr-2 text-blue-500" />
            <span className="text-lg">{site.temperature}°C</span>
          </div>
          <div className="flex items-center">
            <Droplets className="mr-2 text-blue-500" />
            <span className="text-lg">{site.humidity}%</span>
          </div>
          <div className="col-span-2">
            <span className="font-semibold">Calidad del Aire:</span> 
            <span className="ml-2 text-lg">{site.airQuality}</span>
          </div>
        </div>
      </div>
      <div className="p-6 border-t">
        <h3 className="text-xl font-semibold mb-4">Evolución semanal (Últimos 7 días)</h3>
        <TimeSeriesChart data={timeSeriesData[site.id]} />
      </div>
    </div>
  )
}

function TimeSeriesChart({ data }) {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="time" 
            tickFormatter={(timeStr) => format(new Date(timeStr), 'MMM dd')}
          />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip labelFormatter={(timeStr) => format(new Date(timeStr), 'MMMM dd, yyyy')} />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#8884d8" name="Temperatura (°C)" />
          <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#82ca9d" name="Humedad (%)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function Map() {
  const [selectedSite, setSelectedSite] = useState(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    setMapLoaded(true)
  }, [])

  const handleMarkerClick = (site) => {
    setSelectedSite(site)
  }

  return (
    <div className="flex flex-col md:flex-row flex-grow">
      <div className="w-full md:w-3/5 h-1/2 md:h-full relative">
        {mapLoaded && <MapComponent onMarkerClick={handleMarkerClick} />}
      </div>
      <div className="w-full md:w-2/5 h-1/2 md:h-full overflow-hidden">
        {selectedSite ? (
          <DetailsSection site={selectedSite} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 bg-gray-100">
            <MapPin className="mr-2" />
            <span>Selecciona un marcador para ver los detalles del sitio</span>
          </div>
        )}
      </div>
    </div>
  )
}