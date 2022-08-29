import * as React from 'react';
import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HomePage = () => {

    return (
        <div className='home-page-container-div'>
            Application Skeleton:

            <div className='accordion-container-div'>
                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                        <Typography>Pre-Commit checks</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{textAlign:'left'}}>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='accordion-container-div'>
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
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            
            <div className='accordion-container-div'>
                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                        <Typography>Sass</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{textAlign:'left'}}>
                            <div>Advanced version of css</div>
                            <a href='https://www.w3schools.com/react/react_sass_styling.asp' target='_blank' rel='noreferrer'>Installation</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </div>
    )
}

export default HomePage;;