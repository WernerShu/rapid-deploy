export type CameraLive = {
  channels: { device_id: string; channel_id: string; live_protocol: string; stream_type: string }[]
  expire_time?: number
  use_times?: number
}

export type CameraList = {
  equipmentType: EquipmentType
}
