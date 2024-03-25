import React from 'react'

const FeedCard = (props: any) => {
  return (
    <div className='text-[#f7f3f3]'>{props.post} {console.log(props)}</div>
  )
}

export default FeedCard