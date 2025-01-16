import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters}) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return ( alter_ego === characters )
     ? <></>
     : <p>{ characters }</p>;
}


export const HeroSearchResultCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters ,
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    // const charactesByHero =  (<p>{ characters }</p>);

    // CARD BORDERS border border-3 border-info border-opacity-25 
    return (
        
        <a className="card-search rounded-3" href={`/hero/${ id }`}>
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={ heroImageUrl } className="card-img rounded-0 rounded-start-2" alt={ superhero } />
                </div>
                <div className="col-8">
                    <div className="card-body py-3">
                        <h5 className="card-title fw-bold text-dark mb-3">{ superhero }</h5>
                        { 
                            (alter_ego != 'Unknown' || first_appearance != 'Unknown') ? 
                            
                                <div className='card-text'>
                                    { 
                                        alter_ego != 'Unknown' 
                                        ? <p className="small"><b>Alter ego:</b><br/>{ alter_ego }</p> 
                                        : '' 
                                    }
                                    { 
                                        first_appearance != 'Unknown' 
                                        ? <p className="small"><b>Primera aparición:</b><br/>{ first_appearance }</p> 
                                        : '' 
                                    }

                                </div> 
                            : ''
                        }
                    </div>
                </div>
            </div>
        </a>
    )
}
