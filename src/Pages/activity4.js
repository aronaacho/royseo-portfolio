import Lenis from "lenis"
export function ActivityFour() {
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
                    <img key="0" src={"/img/royseo-dinner-w-drkim1.jpeg"} alt={"dinner with friends"} className="roy-img"/>
                </div>
                <p className='right-activity-text'> Since the end of last month, I’ve been reconnecting with old friends who are currently teaching in Korea. I’ve had six meetings with six different professors—four are new connections, and two are old friends. Networking has been encouraging and is helping me reflect on the kind of person I want to become in academia. 지난달 말부터 현재 한국에서 가르치고 있는 옛 친구들과 다시 연락하기 시작했습니다. 6 명의 교수님들과 미팅을 가졌는데, 네 분은 처음 만난 분들이고 두 분은 옛 친구들입니다. 네트워킹은 큰 격려가 되었고, 학계에서 어떤 사람이 되고 싶은지 깊이 생각하는 데 많은 도움이 되고 있습니다. # wecare_reset # 위케어리셋 # 암경험청년 # 한화생명 # 대한암협회 </p> 
                </div>    


                <div className="wecare-activity-photo-wrapper">
                <p className='left-activity-text'> I completely forgot to take photos during my six meetings except for this one. I asked for a meeting with Dr. Kim from Gachon Gil College, and he kindly invited me to his home for lunch on Saturday (Nov 23). He shared valuable insights about seeking a job and navigating the job market in some cultures in Korea. 
                    It was a fruitful conversation, and I was also able to save on my budget since they all treated me to lunch or dinner. Thank you! 6번의 미팅 중에서 사진 찍는 것을 다 잊어버렸는데, 가천길대학 김 교수님과 점심을 먹었던 사진만 남겼습니다. 교수님께 잡마켓에 나가기 위한 조언을 얻고자 미팅을 요청했고, 
                    11월 23일 토요일에 초대받아 점심을 함께하며 job market에 대한 여러 유익한 조언을 들을 수 있었습니다. 감사해요, 교수님! 교수님들께서 맛있는 음식을 대접해 주셔서 예산도 많이 아낄 수 있었습니다. 감사합니다!    # wecare_reset # 위케어리셋 # 암경험청년 # 한화생명 # 대한암협회 </p> 
                <div className='photo-wrapper'>
                    <img key="1" src={"/img/royseo-dinner-w-drkim2.jpeg"} alt={"discussion with Dr.Kim from Gachon Gill College over some deliciou desert"} className="roy-img"/>
                </div>
                </div>        
        </div>
    </div>
    )
}