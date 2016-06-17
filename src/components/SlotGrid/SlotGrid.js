import React from 'react';

const GridColumn = ({title, slots}) => {
    return (
        <div className="col-xs-3 slot-column">
            <h4>{title}</h4>
            {slots.map(slot => <div key={slot} className="td">{slot}</div>)}
        </div>
    );
};

const SlotGrid = ({planning}) => {
    return (
        <div>
            <h2>Programme</h2>

            <div className="row slot-grid">
                {
                    Object.keys(planning)
                        .map(key => planning[key])
                        .map(({title, slots}) => <GridColumn key={title} title={title} slots={slots}/>)
                }
            </div>
        </div>
    );
};

export default SlotGrid;

