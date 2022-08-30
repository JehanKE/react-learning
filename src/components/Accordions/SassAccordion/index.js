import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SassAccordion = () => {
    return (
        <div className='sass-accordion-container-div'>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Sass</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='sass-details-div'>
                        <div>Advanced version of css</div>
                        <a href='https://www.w3schools.com/react/react_sass_styling.asp' target='_blank' rel='noreferrer'>Installation</a>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default SassAccordion;