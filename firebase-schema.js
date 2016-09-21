/users
  uid
    name
    uid
    avatar

/ducks
  duckId
    avatar
    duckId
    name
    text
    timestamp
    uid (of duck author)

/likeCount
  duckId
    0

/userDucks
  uid
    duckId
      avatar
      duckId
      name
      text
      timestamp
      uid (of duck author)

/replies
  duckId
    replyId
      name
      comment
      uid
      timestamp
      avatar

/userLikes
  uid
    duckId: true
