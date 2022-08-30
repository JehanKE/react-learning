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
                    <div className='pc-details-div'>
                            Husky - allows you to run scripts on commit<br/><br/>
                            Lint - checks code for small erros<br/><br/>
                            Prettier - formats code for readability
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default PrecommitAccordion;