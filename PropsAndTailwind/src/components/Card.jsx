import React from 'react'

function Card({channel,btnText,btnTxt="visit us",someobj}) {
  // console.log(props)
  return (
    <div>

<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://miro.medium.com/v2/resize:fit:600/1*9SrBzvtuW6YMztHjcW5Ffw.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {someobj.username}
        {someobj.age}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {channel}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {channel || "any channel"}
      </div>
    </figcaption>
  </div>
</figure>
      <button className='mt-2  cursor-pointer items-center text-sm font-semibold  text-black'>
        {btnText || "visit this"}
      </button>
      <button className='mt-2  cursor-pointer items-center text-sm font-semibold  text-black'>
        {btnTxt }
      </button>
    </div>
  )
}

export default Card
