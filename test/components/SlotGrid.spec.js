import React from 'react';
import expect from 'expect'
import {mount} from 'enzyme';
import SlotGrid from 'components/SlotGrid/SlotGrid';

describe('Component <SlotGrid />', () => {
    let slotGrid;
    const planning = {
        bootstrapping: {
            title: 'Project Bootstrapping',
            slots: ['JSPM', 'Webpack']
        },
        frameworks: {
            title: 'Les 4 fantastiques framework Front',
            slots: ['React / Redux']
        },
        qualityAndPerformances: {
            title: 'Qualité et performances Javascript',
            slots: []
        },
        curiosity: {
            title: 'Le cabinet de curiosité Javascript',
            slots: ['Vue.js']
        }
    };

    beforeEach(() => {
        slotGrid = mount(<SlotGrid planning={planning}/>);
    });

    it('should render headers', () => {
        const headers = slotGrid.find('h4');

        expect(headers.length).toEqual(4);
        expect(headers.at(0).text()).toEqual('Project Bootstrapping');
        expect(headers.at(1).text()).toEqual('Les 4 fantastiques framework Front');
        expect(headers.at(2).text()).toEqual('Qualité et performances Javascript');
        expect(headers.at(3).text()).toEqual('Le cabinet de curiosité Javascript');
    });

});