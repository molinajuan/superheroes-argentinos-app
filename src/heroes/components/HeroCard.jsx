import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters}) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return ( alter_ego === characters )
     ? <></>
     : <p>{ characters }</p>;
}


export const HeroCard = ({ 
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
        <div className="col animate__animated animate__fadeIn">
                <div className="card rounded-3">

                    <div className="row no-gutters">
                        
                        <div className="col-4">
                            <img src={ heroImageUrl } className="card-img rounded-0 rounded-start-2" alt={ superhero } />
                        </div>

                        <div className="col-8">

                            <div className="card-body">

                                <h5 className="card-title fw-bold">{ superhero }</h5>
                                <p className="card-text">{ alter_ego }</p>

                                {/* {
                                    ( alter_ego !== characters ) && charactesByHero
                                    ( alter_ego !== characters ) && <p>{ characters }</p>
                                } */}
                                <CharactersByHero characters={ characters } alter_ego={ alter_ego } />

                                <p className="card-text">
                                    <small className="text-muted">{ first_appearance }</small>
                                </p>

                                <Link  className="custom-link" to={`/hero/${ id }`}>
                                    Más..
                                </Link>

                                
                            </div>

                        </div>


                    </div>

                </div>
        </div>
    )
}
