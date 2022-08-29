import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from 'react-redux'

const ReduxAccordion = () => {

    const userName = useSelector(state => state.learnApp.name);
    const userAge = useSelector(state => state.learnApp.age);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type:'NAME_CHANGE',payload:'John'});
        dispatch({type:'AGE_CHANGE',payload:'10'});
    }

    return (
        <div className='redux-accordion-container-div'>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Redux</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{textAlign:'left'}}>
                        <div>
                            Used for state management
                        </div>
                        <ol>
                            <li className='li-styling'><a href='https://redux.js.org/introduction/getting-started' target='_blank' rel='noreferrer'>Initial Setup</a></li>
                            <li className='li-styling'><a href='https://redux.js.org/usage/configuring-your-store#integrating-the-devtools-extension' target='_blank' rel='noreferrer'>Devtools Integration</a></li>
                            <li className='li-styling'><a href='https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers' target='_blank' rel='noreferrer'>Reducers</a></li>
                            <li className='li-styling'><a href='https://redux.js.org/tutorials/fundamentals/part-5-ui-react#reading-state-from-the-store-with-useselector' target='_blank' rel='noreferrer'>useSelector</a></li>
                            <li className='li-styling'><a href='https://redux.js.org/tutorials/fundamentals/part-5-ui-react#dispatching-actions-with-usedispatch' target='_blank' rel='noreferrer'>useDispatch</a></li>                            
                        </ol>
                        <div>
                            Example - inspect redux devtools:<br/>
                            Current Name: {userName}<br/>
                            Current Age: {userAge}<br/>
                            <button onClick={handleClick}>Change Details</button>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default ReduxAccordion;