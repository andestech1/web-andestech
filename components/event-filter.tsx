"use client"

import { useState } from "react"

interface EventFilterProps {
  eventos: Record<string, { nombre: string; emoji: string; color: string }>
  selectedEvent: string
  onSelectEvent: (event: string) => void
}

export function EventFilter({ eventos, selectedEvent, onSelectEvent }: EventFilterProps) {
  const eventKeys = Object.keys(eventos)

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {eventKeys.map((key) => {
        const evento = eventos[key]
        const isSelected = selectedEvent === key
        
        return (
          <button
            key={key}
            onClick={() => onSelectEvent(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isSelected
                ? "text-white"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
            style={isSelected ? { backgroundColor: evento.color } : {}}
          >
            {evento.emoji} {evento.nombre}
          </button>
        )
      })}
    </div>
  )
}