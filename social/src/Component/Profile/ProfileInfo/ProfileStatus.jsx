import React from 'react'
import s from './Status.module.css'

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    editOn = () => {
        this.setState({
            editMode: true
        })
    };

    editOff = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState): void {
        prevState.status !== this.props.status && this.setState({
            status: this.props.status
        })
    }


    render() {

        return (
            <div className={s.statusBlock}>
                {!this.state.editMode &&
                <span className={s.statusBody}
                      onClick={() => this.editOn()}>
                    Status: <span className={s.status}>{!this.props.status ? 'No status' : this.props.status}</span>
                </span>}


                {this.state.editMode &&
                <span className={s.input}
                      onBlur={() => this.editOff()}>

                    <input autoFocus={true}
                           type="text"
                           value={this.state.status}
                           onChange={this.onStatusChange}/>

                </span>}
            </div>
        )
    }
}


export default Status;