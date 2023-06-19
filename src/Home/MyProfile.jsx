

const MyProfile = () => {
    return (
        <div>
            <div className="bg-slate-200  ">

            <div className=" p-5 lg:mx-24 ">
            <h1 className="text-center">Qualifiction</h1>
            <h1 className="text-center text-xl font-bold">My Profile</h1>

            <div className="grid lg:grid-cols-2  gap-4 my-5 lg:mx-8">
                <div className="min-w-full">
                    <h1 className="font-bold">Work EXperince</h1>

                    <ul className="steps steps-vertical">
                        <li className="step step-primary">Register</li>
                        <li className="step step-primary">Choose plan</li>
                    </ul>
                    <br/>
                    <ul className="steps steps-vertical">
                        <li className="step step-primary">Register</li>
                        <li className="step step-primary">Choose plan</li>
                    </ul>
                        
                </div>
                
                <div className="min-w-full">
                    <h1 className="font-bold">Education</h1>

                    <ul className="steps steps-vertical">
                        <li className="step step-neutral">Register</li>
                        <li className="step step-neutral">Choose plan</li>
                    </ul>
                    <br/>
                    <ul className="steps steps-vertical">
                        <li className="step step-primary">Register</li>
                        <li className="step step-primary">Choose plan</li>
                    </ul>
                    <br/>
                    <ul className="steps steps-vertical">
                        <li className="step step-primary">Register</li>
                        <li className="step step-primary">Choose plan</li>
                    </ul>

                    
                </div>

            </div>
                <div className="grid lg:grid-cols-2  gap-4 my-5 lg:mx-8">
                    <div className="min-w-full">
                        <h1 className="font-bold">Work EXperince</h1>

                        <progress className="progress progress-warning w-96" value="95" max="100"></progress>
                        <br/>
                        <progress className="progress progress-warning w-96" value="80" max="100"></progress>
                        <br/>
                        <progress className="progress progress-warning w-96" value="90" max="100"></progress>
                        <br/>
                        <progress className="progress progress-warning w-96" value="85" max="100"></progress>
                    
                            
                    </div>
                    
                    <div className="min-w-full">
                        <h1 className="font-bold">Education</h1>

                        <progress className="progress progress-warning w-96" value="90" max="100"></progress>
                        <br/>
                        <progress className="progress progress-warning w-96" value="100" max="100"></progress>
                       
                    

                        
                    </div>

                </div>
            
            </div>
            </div>
        </div>
    );
};

export default MyProfile;