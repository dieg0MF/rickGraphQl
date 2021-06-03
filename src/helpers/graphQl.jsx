import React,{useState} from 'react';
import { useQuery, gql } from '@apollo/client';

const EPISODES = gql`
query getAllEpisodes {
    episodes{
      results{
        id
        name
        created
        characters{
          image
        }
      }
    }
  }
`;
const SingleEpisode=gql`
query getSingleEpisode ($episodeId: [ID!]!) {
 
    episodesByIds(ids:$episodeId ){
       name
       id
       created
       air_date
      
      
    }
 
  }

`

export default function EpisodesGraph() {
  const { loading, error, data } = useQuery(EPISODES);

  if (loading) return null ;
  if (error) return error;
    console.log(data.episodes)

let ep= data.episodes.results

  return ep

}
export  function EpisodeGraph(id) {
    // const [episodeId, setEpisodeId] = useState(2)
    const { loading, error, data } = useQuery(SingleEpisode,{
        // variables:{episodeId},
        variables:{episodeId: id},
    });
  
    if (loading) return null;
    if (error) return null;
     
        console.log('Single',data)
        let ep= data.episodesByIds[0]
        return ep

           

            // <p>{data.episodesByIds[0].name}</p>
        
  
  
  
 
  
  }
      
    
  
