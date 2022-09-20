import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CypressTest = () => {
    return (
        <div className='cypress-accordion-container-div'>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Cypress Test</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='cypress-container-div'>
                    <a href='https://docs.cypress.io/guides/component-testing/quickstart-react' target='_blank' rel='noreferrer'>Cypress Documentation</a><br/><br/>
                    <a href='https://docs.cypress.io/api/commands/and' target='_blank' rel='noreferrer'>Cypress Commands</a><br/><br/>
                    <a href='https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano?hl=en' target='_blank' rel='noreferrer'>Testing Playground Extension</a><br/><br/>
                    <a href='https://testing-library.com/docs/' target='_blank' rel='noreferrer'>React Testing Library Documentation</a><br/><br/>
                    <a href='https://www.youtube.com/watch?v=OVNjsIto9xM&t=1763s' target='_blank' rel='noreferrer'>Vdeo reference (see E2E section)</a><br/><br/>
                    <ol>
                        <li>
                            <b>Install Cypress</b><br/>
                            npm install cypress -D
                        </li>
                        <br/>
                        <li>
                            <b>Install commands for react testing in cypress</b><br/>
                            npm i -D @testing-library/cypress
                        </li>
                        <br/>
                        <li>
                            <b>Open Cypress workspace and setup Cypress</b><br/>
                            npx cypress open
                        </li>
                        <br/>
                        <li>
                            <b>Add following to Cypress/ support/ commands.js to use react testing commands in cypress</b><br/>
                            import '@testing-library/cypress/add-commands'
                        </li>
                        <br/>
                        <li>
                            <b>Create spec from cypress window</b>
                        </li>
                    </ol>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default CypressTest;