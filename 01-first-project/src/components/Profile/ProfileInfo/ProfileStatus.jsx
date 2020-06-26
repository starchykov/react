import React from 'react'


class ProfileStatus extends React.Component {


    state = {
        EditMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({EditMode: true});
    };

    deactivateEditMode = () => {
        this.setState({EditMode: false});
        this.props.updateStatus(this.state.status)
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    };

    render() {
        return (
            <div>
                {!this.state.EditMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status} </span>
                </div>
                }

                {this.state.EditMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }

};

export default ProfileStatus;