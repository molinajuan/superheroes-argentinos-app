
import { useMemo } from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-6 g-2 w-100 justify-content-center">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id } 
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
