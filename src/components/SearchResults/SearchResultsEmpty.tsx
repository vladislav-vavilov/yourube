import { FC } from 'react'
import { Empty } from '../Illustrations'

export const SearchResultsEmpty: FC = () => {
  return (
    <div className='mt-[10vh] flex flex-col items-center justify-center'>
      <Empty.Astronaut />
      <h2 className='text-center text-2xl font-medium'>
        It seems like there's nothing here
      </h2>
    </div>
  )
}
