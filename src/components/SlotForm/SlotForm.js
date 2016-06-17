import React from "react";

const SlotForm = ({slotForm, slotFormChanged, addSlot}) => {
    return (
        <div>
            <h2>Ajouter un Slot</h2>

            <form>
                <div className="form-group">
                    <label for="slot-column">Colonne</label>
                    <select id="slot-column" className="form-control"
                            onChange={(e) => slotFormChanged(e.target.value, slotForm.name)}
                            value={slotForm.column}>
                        <option value="bootstrapping">Project Bootstrapping</option>
                        <option value="frameworks">Les 4 fantastiques framework Front</option>
                        <option value="qualityAndPerformances">Qualité et performances Javascript</option>
                        <option value="curiosity">Le cabinet de curiosité Javascript</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="slot-name">Nom</label>
                    <input id="slot-name" type="text" className="form-control"
                           value={slotForm.name}
                           onChange={(e) => slotFormChanged(slotForm.column, e.target.value)}/>
                </div>

                <button type="button" className="btn btn-primary"
                        onClick={() => addSlot(slotForm.column, slotForm.name)}>
                    Ajouter
                </button>
            </form>
        </div>
    );
};

export default SlotForm;