_Thiet ke database cho twtter clone_

## Users

```ts
enum verifyStatus {
  Unverified, //chưa verify email
  Verified, //đã verify email
  Banned //bị ban
}
interface Users {
  _id: ObjectId
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
}
```

## refresh_token

```ts
interface RefreshToken {
  _id: ObjectId
  user_id: ObjectId
  token: string
  created_at: Date
}
```

## Followers

```ts
interface Followers {
  _id: ObjectId
  user_id: ObjectId
  followed_user_id: ObjectId
  created_at: Date
}
```

## Tweets

```ts
interface Tweets {
  _id: ObjectId
  user_id: ObjectId
  parent_id: null | ObjectId // chỉ null nếu là tweet gốc
  type: tweetType
  audience: tweetAudience
  content: string
  hashtags: ObjectId[]
  mentions: ObjectId[]
  medias: Media[]
  guest_views: number
  user_views: number
  created_at: Date
  updated_at: Date
}
```

```ts
interface Media {
  url: string
  type: mediaType
}
enum mediaType {
  Image,
  Video
}
enum tweetAudience {
  Everyone,
  TwitterCircle
}

enum tweetType {
  Tweet,
  Retweet,
  Comment,
  QuoteTweet
}
```

## Bookmarks

```ts
interface Bookmarks {
  _id: ObjectId
  user_id: ObjectId
  tweet_id: ObjectId
  created_at: Date
}
```

## Likes

```ts
interface Likes {
  _id: ObjectId
  user_id: ObjectId
  tweet_id: ObjectId
  created_at: Date
}
```

## Hashtags

```ts
interface Hashtags {
  _id: ObjectId
  name: string
  created_at: Date
}
```
