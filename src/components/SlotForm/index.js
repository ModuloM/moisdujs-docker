import "./SlotForm.css";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import SlotForm from "./SlotForm";
import {addSlot, slotFormChanged} from "actions";

const mapStateToProps = (state) => {
    return {
        slotForm: state.slotForm
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addSlot, slotFormChanged}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SlotForm);
