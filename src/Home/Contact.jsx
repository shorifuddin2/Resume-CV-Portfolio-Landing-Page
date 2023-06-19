import { AiFillPhone } from "react-icons/ai";
import { AiTwotoneBank } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import  { useState } from 'react'

import MapPicker from 'react-google-map-picker'

const DefaultLocation = { lat: 10, lng: 106};
const DefaultZoom = 10;

const Contact = () => {

    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);
  
    function handleChangeLocation (lat, lng){
      setLocation({lat:lat, lng:lng});
    }
    
    function handleChangeZoom (newZoom){
      setZoom(newZoom);
    }
  
    function handleResetLocation(){
      setDefaultLocation({ ... DefaultLocation});
      setZoom(DefaultZoom);
    }

    return (
        <div className="bg-slate-200">
            <div className="lg:mx-24 ">
                <h1 className="text-xl text-orange-500 text-center font-bold">Get In Touch</h1>
                <h1 className="text-3xl text-center font-bold">Contact With Me</h1>

                <div className="grid lg:grid-cols-3 gap-3  lg:mx-24">
                <div>
                <span className="flex ">< AiFillPhone className="  mx-2 w-5 h-auto text-orange-500"/>+0880123456789</span>
                
                </div>
                <div>
                    <span className="flex ">< AiOutlineMail className="mx-2 w-5 h-auto text-orange-500"/>info@urdomain.com</span>
               
                </div>
                <div>
                    <span className="flex ">< AiTwotoneBank className="mx-2 w-5 h-auto text-orange-500"/>123 Street adress,Road no,House no state no,country</span>
                </div>

                </div>


                <div className="grid lg:grid-cols-2 gap-4">
                <div>
                    <div className="form-control mt-8">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered mt-5" />
                    
                    </div>
                    <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="eamil" placeholder="Type here" className="input input-bordered mt-5" />
                    
                    </div>
                    <textarea className="w-full mt-5 textarea textarea-warning" placeholder="Bio"></textarea>
                    <div>
                    <button className="btn btn-error mt-3">Send Massage</button>
                    </div>
                </div>
                
                <div>

                <button onClick={handleResetLocation}>Reset Location</button>
                    <label>Latitute:</label><input type='text' value={location.lat} disabled/>
                    <label>Longitute:</label><input type='text' value={location.lng} disabled/>
                    <label>Zoom:</label><input type='text' value={zoom} disabled/>
                    
                    <MapPicker defaultLocation={defaultLocation}
                        zoom={zoom}
                        mapTypeId="roadmap"
                        style={{height:'400px'}}
                        onChangeLocation={handleChangeLocation} 
                        onChangeZoom={handleChangeZoom}
                        apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8 'className="mb-24"/>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;