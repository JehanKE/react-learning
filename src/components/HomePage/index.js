import * as React from 'react';
import './index.scss';
import SassAccordion from '../Accordions/SassAccordion';
import ReduxAccordion from '../Accordions/ReduxAccordion';
import PrecommitAccordion from '../Accordions/PrecommitAccordion';

const HomePage = () => {

    return (
        <div className='home-page-container-div'>
            Application Skeleton:
            
            <PrecommitAccordion/>
            <ReduxAccordion/>
            <SassAccordion/>

        </div>
    )
}

export default HomePage;;