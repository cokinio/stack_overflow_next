import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RigthSidebar = () => {

    const hotQuestions=[{_id:1, title:"test1"},{_id:2, title:"test2"},{_id:3, title:"test3"},{_id:4, title:"test4"},{_id:5, title:"test5"}]
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 
    top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 max-xl:hidden dark:shadow-none">
        <div>
            <h3 className='h3-bold text-dark200_light900'>
                Top questions
            </h3>
            <div className="mt-7 flex w-full flex-col gap-[30px]">
                {hotQuestions.map((question)=>(
                    <Link href={`/question/${question._id}`}
                    key={question._id}
                    className="flex cursor-pointer items-center justify-between gap-7"
                    >
                    <p className='body-medium text-dark500_light700'>{question.title}</p>
                    <Image
                        src="/assets/icons/chevron-right.svg"
                        alt="chevron-rigth"
                        width={20}
                        height={20}
                        className='invert-colors'
                    />

                   
                    </Link>
            ))}
            </div>
        </div>
        <div className="mt-16">
        <h3 className='h3-bold text-dark200_light900'>
                Popular tags
            </h3>
        </div>
        
        </section>
  )
}

export default RigthSidebar