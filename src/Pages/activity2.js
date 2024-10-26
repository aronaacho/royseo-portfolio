import Lenis from "lenis"
export function ActivityTwo() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
return (
    <div className='home-container'>
        <div className="fade-item page-content report-body">
            <div className="wecare-activity-photo-wrapper">
                <div className='photo-wrapper'>
                    <img key="0" src={"/img/roy-pasta.jpeg"} alt={"dinner with friends"} className="roy-img"/>
                </div>
                <p className='right-activity-text'>" #wecare_reset #위케어리셋 #암경험청년 #한화생명 #대한암협회 I had a crew meeting and reported what I have done in this past month."</p> 
                </div>    


                <div className="wecare-activity-photo-wrapper">
                <p className='left-activity-text'>"I had a crew meeting and reported what I have done in this past month."</p> 
                <div className='photo-wrapper'>
                    <img key="1" src={"/img/roy-discussion1.jpeg"} alt={"discussion with friends over coffee"} className="roy-img"/>
                </div>
                </div>        
        </div>
    </div>
    )
}