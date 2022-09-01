import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoFetch from './AutoFetch';
import ActionFetch from './ActionFetch';

const GraphqlCalls = () => {
    return (
        <div className='gql-accordion-container-div'>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>GraphQL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='gql-container-div'>
                        <div>
                            GraphQL helps prevent over and under fetching. <br/>
                            <a href='https://graphql.org/' target='_blank' rel='noreferrer'> GraphQL Documentation</a>
                            <br/><br/>
                            To make GraphQL work with React we use Apollo client. <br/>
                            <a href='https://www.apollographql.com/docs/react/' target='_blank' rel='noreferrer'>Apollo Documentation</a>
                            <br/><br/>
                            <a href='https://graphqlzero.almansi.me/#get-started' target='_blank' rel='noreferrer'>GraphQL playground and mock endpoints</a>
                            <br/><br/>
                        </div>
                        <div>
                            Check Console For Example Responses
                            <AutoFetch/>
                            <ActionFetch/>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default GraphqlCalls;