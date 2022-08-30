import * as React from 'react';
import './index.scss';
import SassAccordion from '../Accordions/SassAccordion';
import ReduxAccordion from '../Accordions/ReduxAccordion';
import PrecommitAccordion from '../Accordions/PrecommitAccordion';
import RoutingAccordion from '../Accordions/RoutingAccordion';

const HomePage = () => {

    return (
        <div className='home-page-container-div'>          
            <PrecommitAccordion/>
            <ReduxAccordion/>
            <SassAccordion/>
            <RoutingAccordion/>
        </div>
    )
}

export default HomePage;