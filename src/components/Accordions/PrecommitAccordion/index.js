import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PrecommitAccordion = () => {
    return (
        <div className='pc-accordion-container-div'>
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
    )
}

export default PrecommitAccordion;