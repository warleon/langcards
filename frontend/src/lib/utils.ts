import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function n8nRequest(data: any) {
  if (data.__n8n_nodes_payload_cms__) {
    return true
  }
  return false
}
