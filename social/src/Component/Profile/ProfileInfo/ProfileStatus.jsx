import React from 'react'
import s from './Status.module.css'

class Status extends React.Component {

    state = {
        editMode: false
    };

    editOn = () => {
        this.setState({
            editMode: true
        })
    };

    editOff = () => {
        this.setState({
            editMode: false
        })
    };

    render() {

        return (
            <div className={s.statusBlock}>
                {!this.state.editMode &&
                <span className={s.status}
                      onClick={() => this.editOn()}>
                    Status: {!this.props.status ? 'No status' : this.props.status}
                </span>}


                {this.state.editMode &&
                <span className={s.input}
                      onBlur={() => this.editOff()}>
                    <input autoFocus={true}
                           type="text"
                           value={this.props.status}/></span>}
            </div>
        )
    }
}


export default Status;