import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GameDetails } from '../interfaces';
import { getDetails } from '../apiCalls/games';
import { cleanDetails } from "../utilities/utilities";

const Details = ({details}:{details?: GameDetails}) => {
    const [message, setMessage] = useState('')
    const { id } = useParams()

    useEffect(() => {
        Promise.resolve(getDetails(id)).then((data) => {
            console.log('game details', cleanDetails(data));
          });
    },[])

    return(
        <div>{message}</div>
    )
}

export default Details