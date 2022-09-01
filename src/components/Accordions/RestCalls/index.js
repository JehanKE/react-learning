import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RestCalls = () => {
    return (
        <div className='rest-accordion-container-div'>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Rest Calls</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='rest-container-div'>
                        Calls to Rest API
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default RestCalls;