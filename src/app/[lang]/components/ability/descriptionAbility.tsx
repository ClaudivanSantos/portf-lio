'use client'

interface IDescriptionProps {
    title: string;
    description: string;
}


export default function DescriptionAbility({ title, description }: IDescriptionProps) {

    return (
        <div className='container mx-auto flex flex-col items-center text-center content-center '>
            <div className='bg-base-100 rounded-lg p-5 shadow-md items-center sticky md:w-2/4 md:h-72 h-80'>
                <h1 className='font-bold text-neutral-50 text-xl mb-4'>{title}</h1>
                <p className=' text-neutral-50 md:ml-24 md:mr-24 mb-4'>{description}</p>
            </div>
        </div>
    )
}