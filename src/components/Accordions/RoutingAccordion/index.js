import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";


const RoutingAccordion = () => {
    return (
        <div className='routing-accordion-container-div'>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Routing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='routing-container-div'>
                        <div>Moving from one webpage to another</div>
                        <a href='https://reactrouter.com/en/v6.3.0/getting-started/installation' target='_blank' rel='noreferrer'>Installation</a>
                        <div>
                            <br/>Example:<br/>
                            <Link to='/page1'>Go to Page 1</Link><br/>
                            <Link to='/page2'>Go to Page 2</Link>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default RoutingAccordion;