import React,{useRef} from 'react'
import materials from '../data'

const Card=() => {
 
  return (
    <div className=' rounded-md flex flex-wrap justify-center gap-20'>
      
      {materials.map((course) => (
          <div key={course.id} className='flex flex-col w-[30rem] h-[50rem] box-border bg-teal-100 p-2'>
            <img src={course.image} alt={`Course ${course.id}`} className='h-[30rem] w-[30rem]'/>
            <h2>{course.course}</h2>
            <p>{course.duration}</p>
            <p>{course.price}</p>
            <p>{course.info}</p>
            <iframe
              width={450}
              height={415}
              src={course.video}
              title={`Course ${course.id} Video`}
              className='p-2 w-full h-full aspect-w-16 aspect-h-9'
            ></iframe>
            <br/>
            <br/>
          </div>
        ))}
        
    </div>
  )
 }

export default Card


