import React from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import Input from "../Common/Input/Input";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItems name={'Ivan'}
                             url={'https://pbs.twimg.com/profile_images/1080468018147328000/qbyMyWCs_200x200.jpg'}/>
                <DialogItems name={'Ivan'}
                             url={'https://pbs.twimg.com/profile_images/1080468018147328000/qbyMyWCs_200x200.jpg'}/>
                <DialogItems name={'Ivan'}
                             url={'https://pbs.twimg.com/profile_images/1080468018147328000/qbyMyWCs_200x200.jpg'}/>
                <DialogItems name={'Ivan'}
                             url={'https://pbs.twimg.com/profile_images/1080468018147328000/qbyMyWCs_200x200.jpg'}/>
            </div>

            <div className={s.messages}>
                <Messages message={'Hello'}/>
            </div>

            <div className={s.inputBlock}>

                <Input/>
            </div>


        </div>
    )
};

export default Dialogs;