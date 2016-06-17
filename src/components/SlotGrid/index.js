import './SlotGrid.css'

import {connect} from 'react-redux'
import SlotGrid from './SlotGrid.js'

const mapStateToProps = (state) => {
    return {
        planning: state.slots
    }
};

export default connect(mapStateToProps)(SlotGrid);