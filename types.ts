export type CamItem = {
  camImg: string, 
  camTitle: string
}

export enum LoadingStatus {
  None = 1,
  Loading = 2,
  Loaded = 3,
  Error = 4,
  Done = 5
}