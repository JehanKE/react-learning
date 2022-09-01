
import { useQuery, gql } from '@apollo/client';

const AutoFetch = () => {

    const GET_LOCATIONS = gql`
        query getTodos {
            todos {
                data {
                    id
                    title
                }
            }
        }
    `;
    const {data,loading} = useQuery(GET_LOCATIONS);

    return (
        <div>
            {loading? 
                <div>Loading...</div> 
            :
                console.log("GQL Data Auto Fetched: ",data)
            }
        </div>
    )
}

export default AutoFetch;