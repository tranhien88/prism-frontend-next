// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces'

import { Dayjs } from 'dayjs'
import { NextPage } from 'next'
import React from 'react'

/**New NextPage type which includes getLayout function. */
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}


export type Video = {
  id: number
  title: string
  description?: string
  publishDate: Date
  views: string
  videoUrl: string
}

export interface ErrorResponse {
  message: string
  name: string
  ok: boolean
  status: number
  statusText: string
  url: string
  code?: number
}

export interface BaseResponse<T> {
  data: {
    responseData: T
    error?: ErrorResponse
  }
}

export interface BaseResponseData<T> {
  responseData: T
  error?: ErrorResponse
}

export interface LoginRequest {
  username: string
  password?: any
  platformType?: number
  platformVersion?: string
  deviceId?: string
  deviceToken?: string
}
export interface UpdatePasswordRequest {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

export interface SignupRequest {
  address?: string
  businessTypeIds?: number[]
  companyName: string
  country?: string
  email: string
  emailEnquiry?: string
  emailNewsAnnouncements?: boolean
  emailSearchesWeekly?: boolean
  firstName: string
  lastName: string
  mobile: string
  password: string
  postcode?: string
  roleIds: string | string[]
  state?: string
  suburb?: string
  about?: string
  confirm?: string
}
export interface SignupResponse {
  address?: string
  businessTypes?: BusinessTypes
  companyName?: string
  country?: string
  displayName?: string
  email?: string
  emailEnquiry?: string
  emailNewsAnnouncements?: boolean
  emailSearchesWeekly?: boolean
  firstName?: string
  id: number
  lastName?: string
  mobile?: string
  postcode?: string
  prismAccountId?: number
  roles?: Role[]
  state?: string
  status?: number
  suburb?: string
  about?: string
}
export interface TrainerResponse{
  id: number
  name: string
}
export interface featureResponse {
  id: number
  featureKey: string
  featureLabel: string
  group: string
  version?: string
}
export interface Permission {
  permission: number
  trainers: TrainerResponse[]
  feature: featureResponse[]
}
export interface locationProps {
  id: number
  name: string
}
export interface EmailProps {
  id: number
  email: string
  primary: boolean
  verify?: boolean
  verifyCode?: string
}
export interface ContactProps {
  id?: number
  abn?: string
  acountName?: string
  addressLine1?: string
  addressLine2?: string
  avatar?: string
  bsb?: string,
  company?: string
  email?: string
  fax?: string
  fullAddress?: string
  dob?: number | Dayjs
  isGstRegistered?: boolean
  logo?:string
  mobile?: number
  name?: string
  paymentNote?: string
  postcode?: string
  region?: string
  state?: string
  suburb?: string
  website?: string
}
export interface Account {
  id?: number
  address?: string
  permission: Permission[]
  firstName?: string
  lastName?: string
  displayName?: string
  locationData?: locationProps
  companyName?: string
  location?: string
  mobile?: string
  name?:string
  dob?: number | Dayjs
  emails?: EmailProps[]
  postcode?: string
  prismId?: string
  stable?: string
  state?: string
  trainerId?: number
  username: string
  contact?: ContactProps 
  avatar?: string
}
export interface LoginResponse {
  token: string
  account: Account
}
export interface UploadMediaRequest {
  newToken?: boolean
  listMetaData?: Media[]
}
export interface UploadMediaReponse {
  session?: Session
  medias?: Media[]
}
export interface Session {
  accessKeyId?: string
  bucket?: string
  expiresAt: number
  region?: string
  secretAccessKey?: string
  sessionToken?: string
}
export interface Token {
  access_token?: string
  expires_in?: number
  refresh_token?: string
  scope?: string
  token_type?: string
}

export interface Role {
  id: number
  name: string
}

export interface BusinessTypes {
  id: number
  type: string
}
export interface Media {
  fileRemoved?: number
  guid?: string
  id?: number
  originalFilename?: string
  typeOfMedia?: number
  uploader?: number
  url?: string
}
export interface MediaAvatar extends Media {
  cdnOrigin: string
  cdnLarge: string
  cdnMedium: string
  cdnSmall: string
  contentType?: string
  filename?: string
  localThumbnail?: string
  thumbnail?: string
  url?: string
}
export interface Position {
  id: number
  label: string
}

export type OrderBy = 'publishedDate' | 'name' | 'price' | 'value'
export type OrderDirection = 'asc' | 'desc'

export interface BaseListRequest {
  orderBy?: OrderBy
  orderDirection?: OrderDirection
  pageSize?: number
  pageIndex?: number
  keyword?: string
}

export interface QueryParams {
  orderBy?: OrderBy
  orderDirection?: OrderDirection
  pageSize?: number
  pageIndex?: number
}

export interface OrderByItem {
  id?: number
  orderBy?: OrderBy
  orderDirection?: OrderDirection
  name?: string
  image?: string
}

