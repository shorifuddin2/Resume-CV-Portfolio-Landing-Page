import { AiFillPhone } from "react-icons/ai";
import { AiTwotoneBank } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const About = () => {
    return (
        <div className="w-full h-3/2 my-16 lg:mx-24 ">
            <div className="text-center">
            <h1 className="text-xl text-orange-500">My Info</h1>
            <h1 className="text-2xl font-bold ">About Me</h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 m-5">
                <div className="lg:mx-8 ">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="">
                    <span className="flex ">< AiFillPhone className="  mx-2 w-5 h-auto text-orange-500"/>+0880123456789 | +0880123456789</span>
                    <span className="flex ">< AiOutlineMail className="mx-2 w-5 h-auto text-orange-500"/>info@urdomain.com | info@urdomain.com</span>
                    <span className="flex ">< AiTwotoneBank className="mx-2 w-5 h-auto text-orange-500"/>123 Street adress,Road no,House no state no,country</span>
                    <div className="">
                        <h1 className=" mx-2 font-bold">My Intarest</h1>
                        <div className="flex">
                        <span className="flex">< AiFillPhone className="  mx-2 w-5 h-auto text-orange-500"/>Treval</span>
                        <span className="flex">< AiFillPhone className="  mx-2 w-5 h-auto text-orange-500"/>Book</span>
                        <span className="flex ">< AiFillPhone className="  mx-2 w-5 h-auto text-orange-500"/>Cyling</span>
                        <span className="flex">< AiFillPhone className="  mx-2 w-5 h-auto text-orange-500"/>FootBall</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;