import React ,{ useEffect,useContext} from 'react';
import { AppContext } from "../../AppProvider";
import EpisodesGraph from '../../helpers/graphQl';

import Cards from '../shared/Card';
import './Main.css';



export default function Main() {
	const {episodes, setEpisodes} = useContext(AppContext);
	

    // const ep= EpisodesGraph()
    //         console.log(ep)
           
    //         setEpisodes  ( ep)
            setEpisodes(EpisodesGraph())
   

	console.log('MAIN',EpisodesGraph())





	return (
		<div className='CardsContainer'>
			{
				episodes !== null   ? (episodes.map((element,index)=><Cards 
					episodeName={element.name}
					image={`https://rickandmortyapi.com/api/character/avatar/${element.id}.jpeg`}
					date={element.air_date}
					key={element.id}></Cards>)): 
				<span>Loading....</span>
			}

			
		</div>
	)
}