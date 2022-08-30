/*
 * @Description:常用
 * @Date: 2022-04-15 13:20:58
 */
//分页
export interface Paging {
  current: number
  pageSize: number
}

export interface AxiosRes {
  code: number
  message: string
  data: [] | object
  result?: [] | object
  total?: number
  pageSize?: number
  totalPage?: number
  [props: string]: any
}
