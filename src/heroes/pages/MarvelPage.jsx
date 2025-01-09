import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h3>Marvel Comics</h3>
      <hr className='border border-info opacity-50' />

      <HeroList publisher='Marvel Comics' />

    </>
  )
}
