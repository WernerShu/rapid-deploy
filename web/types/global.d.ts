/*
 * @Description:
 * @Date: 2022-05-31 15:55:41
 */
declare interface TabOption {
  label: string
  value: string | number
  id?: string
}

declare type ResConfig = {
  code?: number
  data?: any
  msg?: string
  success?: boolean
  [propsName: string]: any
}

declare type TypeOption = 'application/x-mpegURL' | 'video/mp4'
declare type EquipmentType = 'monitor_huawei' | 'monito_hik'

declare const videojs: Function

declare type Channels = {
  hw: {
    device_id: string
    channel_id: string
    live_protocol: string
    stream_type: string
  }[]
  hk: { url: string }[]
}

declare type CameraListItem = {
  address: string
  code: string
  equipmentGroup: string
  equipmentType: EquipmentType
  id: string
  imei: string
  lat: string
  lon: string
  name: string
  status: string
  tenantId: string
  [propsName: string]: any
}

declare type CameraLiveItem = {
  device_id: string
  channel_id: string
  imei: string
  result: {
    code: string
    msg: string
  }
}
