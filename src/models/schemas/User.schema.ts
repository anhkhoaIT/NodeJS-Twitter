import { ObjectId } from 'mongodb'
import { verifyStatus } from '~/constants/enums'

interface UserType {
  _id?: ObjectId
  name: string
  password: string
  email: string
  date_of_birth: Date
  created_at?: Date
  updated_at?: Date
  email_verify_token?: string //là jwt hoặc '' nếu đã verify email
  forgot_password_token?: string
  verify_status?: verifyStatus

  //   Optional
  username?: string
  bio?: string
  avatar?: string
  location?: string
  website?: string
  cover_photo?: string
}
export default class User {
  _id?: ObjectId
  name: string
  password: string
  email: string
  date_of_birth: Date
  created_at: Date
  updated_at: Date
  email_verify_token: string //là jwt hoặc '' nếu đã verify email
  forgot_password_token: string
  verify_status: verifyStatus

  //   Optional
  username: string
  bio: string
  avatar: string
  location: string
  website: string
  cover_photo: string

  constructor(user: UserType) {
    const date = new Date()
    this._id = user._id
    this.name = user.name || ''
    this.password = user.password
    this.email = user.email
    this.date_of_birth = user.date_of_birth || new Date()
    this.created_at = user.created_at || date
    this.updated_at = user.updated_at || date
    this.email_verify_token = user.email_verify_token || ''
    this.forgot_password_token = user.forgot_password_token || ''
    this.verify_status = user.verify_status || verifyStatus.Unverified

    //  Optional
    this.username = user.username || ''
    this.bio = user.bio || ''
    this.avatar = user.avatar || ''
    this.location = user.location || ''
    this.website = user.website || ''
    this.cover_photo = user.cover_photo || ''
  }
}
