import { HTMLProps } from 'react'

export function SpecialText({ text, className }: { text: string } & HTMLProps<'p'>) {
  const partes = text.split(/<([^>]+)>/g)

  return (
    <p className={className}>
      {partes.map((parte, i) =>
        i % 2 === 1 ? ( // las posiciones impares son las palabras entre < >
          <span key={i} className="text-blue-500 font-bold">
            {parte}
          </span>
        ) : (
          <span key={i}>{parte}</span>
        ),
      )}
    </p>
  )
}
