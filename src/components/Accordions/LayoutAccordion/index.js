import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LayoutAccordion = () => {
    return (
        <div className='layout-accordion-container-div'>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Layouts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='layout-container-div'>
                        <a href='https://www.w3schools.com/css/css3_flexbox.asp' target='_blank' rel='noreferrer'>Flexbox Layout</a>
                        <br/><br/>
                        <a href='https://www.w3schools.com/css/css_grid.asp' target='_blank' rel='noreferrer'>Grid Layout</a>
                        <br/><br/>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default LayoutAccordion;