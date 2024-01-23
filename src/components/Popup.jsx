import { useState, useEffect } from 'react'
import Loader from './Loader'
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';

import './Popup.css'

function Popup({ error }) {

    return (
        <div className="popup">
             <Loader />
        </div>
    )
}

export default Popup