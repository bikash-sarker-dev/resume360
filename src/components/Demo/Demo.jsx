import React from 'react'

export const Demo = () => {
  return (
    <div className="mt-16 min-h-screen p-10" style={{ backgroundColor: 'var(--color-r-background)' }}>
      <h1 className="text-4xl font-bold text-center" style={{ color: 'var(--color-r-text)' }}>
        Demo Page 1
      </h1>
      
      <div className="flex justify-center gap-6 my-6">
        <button className="px-6 py-3 font-semibold text-white rounded" style={{ backgroundColor: 'var(--color-r-primary)' }}>
          Primary Button
        </button>
        <button className="px-6 py-3 font-semibold text-white rounded" style={{ backgroundColor: 'var(--color-r-secondary)' }}>
          Secondary Button
        </button>
        <button className="px-6 py-3 font-semibold text-white rounded" style={{ backgroundColor: 'var(--color-r-accent)' }}>
          Accent Button
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded shadow" style={{ backgroundColor: 'var(--color-r-card)' }}>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-r-text)' }}>Card Title</h3>
          <p className="mt-2">This is a card using the theme colors.</p>
        </div>
        <div className="p-6 rounded shadow" style={{ backgroundColor: 'var(--color-r-info-card)' }}>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-r-text)' }}>Info Card</h3>
          <p className="mt-2">This is an info card with a soft background.</p>
        </div>
        <div className="p-6 rounded shadow" style={{ backgroundColor: 'var(--color-r-info)' }}>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--color-r-text)' }}>Info Section</h3>
          <p className="mt-2">This section highlights information.</p>
        </div>
      </div>

           {/* Additional Sections */}
           <div className="my-10 p-6 rounded shadow text-center" style={{ backgroundColor: 'var(--color-r-secondary)', color: 'white' }}>
        <h2 className="text-2xl font-bold">Secondary Section</h2>
        <p className="mt-2">Lorem ipsum dolor sit amet
            , consectetur adipisicing elit. Ipsam illo sint nisi voluptates, facere ratione!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded shadow" style={{ backgroundColor: 'var(--color-r-accent)', color: 'white' }}>
          <h3 className="text-xl font-semibold">Accent Section</h3>
          <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, repudiandae!</p>
        </div>
        <div className="p-6 rounded shadow" style={{ backgroundColor: 'var(--color-r-primary)'}}>
          <h3 className="text-xl font-semibold">Primary Section</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.\</p>
        </div>
      </div>
    </div>
  )
}
