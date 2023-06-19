

const Testimonial = () => {
    return (
        <div>
            <div className="bg-slate-200 w-full h-3/2">
                <h1 className="text-xl  text-center font-bold pt-5">What Client Say</h1>
                <h1 className="text-3xl text-center font-bold ">Testimonial</h1>

                <div className="card  bg-base-100 shadow-2xl lg:mx-24 lg:my-5">
                    <div className="card-body ">
                        <div className="card-actions justify-start">
                        <span className="text-orange-500 font-bold text-5xl">❝</span>
                        </div>
                        <p>We are using cookies for no reason. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur vel rerum tenetur impedit, aliquam eius voluptatibus quasi veniam? Distinctio earum esse vel praesentium aliquid voluptatibus, nam explicabo itaque, quisquam animi possimus laborum doloribus soluta voluptates autem est? Quod, voluptatibus officia quaerat eos unde itaque quasi quae, rerum qui placeat accusantium similique impedit! Quidem nisi sunt recusandae laudantium quibusdam debitis assumenda aliquam animi? Aperiam veritatis non pariatur et provident porro, itaque nam nostrum quisquam natus obcaecati placeat incidunt, dolorem voluptates ipsa dolores enim! Illo porro hic eum reprehenderit nesciunt eius, veniam qui ratione vitae ad beatae optio suscipit cum! Fuga!</p>
                        <p className="font-bold text-xl">John Smith</p>
                        <p className="font-bold">Dhaka BD</p>
                    </div>
                    </div>
                    
                    <div className="text-center p-5">
                    <input type="radio" name="radio-6" className=" radio radio-warning" checked />
                        <input type="radio" name="radio-6" className="mx-5 radio radio-warning" />
                        <input type="radio" name="radio-6" className=" radio radio-warning" />
                    </div>
            </div>
        </div>
    );
};

export default Testimonial;