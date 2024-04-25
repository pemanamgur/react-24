import React from 'react'

const Card = ({name,address="humla"}) => {
    // console.log(props.Obj.name1)
    console.log(name )
  return (
    <div >
         <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://plus.unsplash.com/premium_photo-1689247409203-8002a974e018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {name}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, {address || "Humla"}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card
