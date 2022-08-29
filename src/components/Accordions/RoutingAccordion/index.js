import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                    <Typography sx={{textAlign:'left'}}>
                        {/* <div>Advanced version of css</div>
                        <a href='https://www.w3schools.com/react/react_sass_styling.asp' target='_blank' rel='noreferrer'>Installation</a> */}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default RoutingAccordion;