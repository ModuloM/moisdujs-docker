import React from 'react';
import SlotGrid from 'components/SlotGrid';
import SlotForm from 'components/SlotForm';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <SlotGrid />
                    </div>
                    <div className="col-md-4 col-md-offset-1">
                        <SlotForm />
                    </div>
                </div>
            </div>
        );
    }
}


