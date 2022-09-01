
import { useLazyQuery, gql } from '@apollo/client';

const ActionFetch = () => {

    const GET_LOCATIONS = gql`
        query getTodo {
            todo(id:1) {
                id
                title
            }
        }
    `;
    const [getData, {data,loading}] = useLazyQuery(GET_LOCATIONS);

    const handleClick = () => {
        getData();
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>Fetch Data</button>
            </div>
            <div>
                {loading? 
                    <div>Loading...</div> 
                :
                    console.log("GQL Data Fetched onClick: ",data)
                }
            </div>
        </>
    )
}

export default ActionFetch;