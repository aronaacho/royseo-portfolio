import Lenis from "lenis"
export function ActivitySix() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
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
                <div className='photo-wrapper' style={{margin: "0 0 0 0"}}>
                    <img key="0" style={{transform: "scale(0.7)"}} src={"/img/royseo-dessert.jpeg"} alt={"coffee and kaymak with an old project member for the project update"} className="roy-img"/>
                <p className='right-activity-text' style={{margin: "0 0 0 0"}}> I met with an old project member and shared updates on the progress of my ongoing project. With the end of the year approaching, I feel an urgent need to complete my work. Although I couldn’t take a photo to document it, a major breakthrough was identifying some critical mistakes in my script with the help of my friend. We’ve now determined the next steps, such as optimizing the training process. Additionally, I’m planning to give a talk on this project in January. Stay tuned!
                    저는 이전 프로젝트 멤버를 만나 현재 진행 중인 프로젝트의 진척 상황을 공유했습니다. 연말이 다가오면서 프로젝트를 완성해야 한다는 절박함이 느껴졌습니다. 사진으로 남기진 못했지만, 큰 진전 중 하나는 친구의 도움으로 제 스크립트에서 몇 가지 중요한 실수를 발견한 것입니다. 이제 우리는 훈련 과정을 최적화하는 등 다음 단계를 결정했습니다. 또한, 이 프로젝트에 대해 1월에 발표할 계획입니다. 기대해 주세요! # wecare_reset # 위케어리셋 # 암경험청년 # 한화생명 # 대한암협회 </p> 
                
                </div>
            </div>        
        </div>
    </div>
    )
}