import Person from"../assets/Person-Photo.png"


const Banner = () => {
    return (
        <div className=" ">
          
            <div className="relative hero min-h-3/2 bg-slate-200	">

            <div className=" bg-slate-200 lg:mx-24  px-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                      <img src={Person} className="max-w-sm w-[350px] rounded-lg " />
              <div className="">
                <h1 className="text-2xl font-bold text-primary">Hi, I am</h1>
                <h1 className="text-5xl font-bold text-secondary py-2">Jonathon Doe</h1>
                <h1 className="text-2xl font-bold text-secondary py-2">UI/UX Designer</h1>
              <p className="py-6">Some shot brief about me. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                <button className="btn btn-primary">Download CV</button>
              </div>
            </div>
          </div>
              <div className="absolute inset-x-0 bottom-0 h-16 lg:mx-24">
              
              <div className="stats shadow w-full h-auto mx-auto ">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>
              </div>
          </div>
        </div>
    );
};

export default Banner;