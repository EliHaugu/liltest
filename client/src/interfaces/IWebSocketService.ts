import type { Log } from '@/types/WebSocketServiceTypes'

export interface IWebSocketService {
  connect(port: number): void
  disconnect(): void
  subscribe(listener: (log: Log) => void): void
  unsubscribe(listener: (log: Log) => void): void
  notifyListeners(log: Log): void
}
