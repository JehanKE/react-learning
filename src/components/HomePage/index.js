import * as React from 'react';
import './index.scss';
import SassAccordion from '../Accordions/SassAccordion';
import ReduxAccordion from '../Accordions/ReduxAccordion';
import PrecommitAccordion from '../Accordions/PrecommitAccordion';
import RoutingAccordion from '../Accordions/RoutingAccordion';
import RestCalls from '../Accordions/RestCalls';
import GraphqlCalls from '../Accordions/GraphqlCalls';
import LayoutAccordion from '../Accordions/LayoutAccordion';
import CypressTest from '../Accordions/CypressTest';

const HomePage = () => {

    return (
        <div className='home-page-container-div'>          
            <PrecommitAccordion/>
            <ReduxAccordion/>
            <SassAccordion/>
            <RoutingAccordion/>
            <LayoutAccordion/>
            <RestCalls/>
            <GraphqlCalls/>
            <CypressTest/>
        </div>
    )
}

export default HomePage;