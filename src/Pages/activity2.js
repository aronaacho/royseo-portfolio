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
                <p className='right-activity-text'> We had our first team meeting as the project began in October. Over lunch, I briefly shared my plans for the next five months. And yes, we enjoyed some amazing Italian cuisine! 10월에 we_care_reset 프로젝트가 시작되면서 첫 팀 회의를 가졌습니다. 저녁을 먹으며 저의 앞으로 5개월간의 계획을 간단히 공유했어요. 그리고 정말 맛있는 이탈리안 요리를 즐겼답니다!           # wecare_reset # 위케어리셋 # 암경험청년 # 한화생명 # 대한암협회  </p> 
                </div>    


                <div className="wecare-activity-photo-wrapper">
                <p className='left-activity-text'>After lunch, I shared my project progress of my project, which I summarized on Acitivity 1. I’m working on data augmentation using a computer vision algorithm. 점심 식사 후, 개인 웹페이지에 정리 해 둔 프로젝트 진행 상황을 공유했습니다. 'Activity 1' 탭에 나와 있듯이, 저는 컴퓨터 비젼 알고리즘을 사용하여 데이터 증강 작업을 진행 중입니다. </p> 
                <div className='photo-wrapper'>
                    <img key="1" src={"/img/roy-discussion1.jpeg"} alt={"discussion with friends over coffee"} className="roy-img"/>
                </div>
                </div>        
        </div>
    </div>
    )
}