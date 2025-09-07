import { clsx, type ClassValue } from 'clsx'
import { PayloadRequest } from 'payload'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function n8nRequest(req: PayloadRequest) {
  try {
    const [formData, json] = await Promise.all([req.formData?.call(req), req.json?.call(req)])

    if (json && json.__n8n_nodes_payload_cms__) {
      return true
    }
    const formEntry = formData?.get('_payload')
    if (formEntry && typeof formEntry == 'string') {
      const data = JSON.parse(formEntry)
      if (data.__n8n_nodes_payload_cms__) {
        return true
      }
    }
  } catch (error) {
    console.error(error)
  } finally {
    return false
  }
}
