import Lenis from "lenis"
export function ActivityFive() {
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
                <div className='photo-wrapper'>
                    <img key="0" src={"/img/royseo-ipad-pencil.jpeg"} alt={"Finally upgraded: My new iPad"} className="roy-img"/>
                </div>
                <p className='right-activity-text'> I finally purchased a tablet PC! As part of setting up a computer workstation in my space, I had included a tablet PC in my budget, but I hesitated to decide which one would be the best fit for me. My budget was also a bit tight to buy everything I had planned for this month. Eventually, I went with an Apple iPad and Pencil. I already feel like my work life has been significantly enhanced with this addition. The best part is that I can now read anywhere, even in bed!
                    I'm grateful for these. 
                    드디어 태블릿 PC를 구매했어요! 제 공간에 컴퓨터 워크스테이션을 설치하는 과정에서 태블릿 PC를 예산에 포함했지만, 어떤 제품이 저에게 가장 적합할지 고민하느라 망설였어요. 게다가 이번 달에는 계획한 모든 아이템을 한꺼번에 살 만큼 예산이 충분하지 않았습니다. 결국, Apple iPad와 Pencil을 선택했어요. 이 제품을 사용하니 업무 효율이 확실히 향상된 느낌이에요. 무엇보다도, 이제 침대에서도 편하게 책을 읽을 수 있다는 점이 최고예요!
                    저에게 좋은 것을 주셔서 감사드려요! # wecare_reset # 위케어리셋 # 암경험청년 # 한화생명 # 대한암협회 </p> 
                </div>    


                <div className="wecare-activity-photo-wrapper">
                <p className='left-activity-text'> 
                Currently, among my ongoing experiments, Grad-CAM is particularly stressing me out, as you can see. However, I’m hopeful that these new gadgets will help streamline my workflow and boost my productivity. 현재 진행 중인 실험들 중에서 Grad-CAM이 특히 저를 스트레스받게 하고 있습니다. 하지만 이 새로운 기기들이 실험 과정을 더 효율적으로 만들어주고 생산성을 높이는 데 도움이 될 거라고 기대하고 있어요. # 위케어리셋 # 암경험청년 # 한화생명 # 대한암협회 </p> 
                <div className='photo-wrapper'>
                    <img key="1" src={"/img/royseo-grad-cam.jpeg"} alt={"Battling Grad-CAM stress: New gadgets to the rescue"} className="roy-img"/>
                </div>
                </div>        
        </div>
    </div>
    )
}