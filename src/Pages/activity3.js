import Lenis from "lenis"
export function ActivityThree() {
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
                <h1>Self-supervised Learning for Alzheimer's Disease Classification: A SimCLR-based Approach with Multi-Augmentation Strategies</h1>
                <hr/>
                <p># wecare_reset # 위케어리셋 # 암경험청년 # 한화생명 # 대한암협회</p>
                <p>Roy Seo, Jan 2025</p>
                
                <div className="slide-content">
                    <p> (이 발표 템플릿은 1월에 있을 발표를 위해 10월부터 We Care Reset의 후원으로 진행하고 있는 실험 '결과'를 보여드리기 위함입니다. 이 발표 템플릿은 11월 중순부터 제작을 시작하여 11월 말에 완성할 예정입니다.)</p>
                </div>
    
                <div className="slide-content">
                    <h2>Intro</h2>
                    <p>This research presents a novel application of contrastive learning (SimCLR) for Alzheimer's disease classification using 3D neuroimaging data. Our framework implements:</p>
                    <ol>
                        <li>A custom 3D CNN architecture optimized for medical imaging</li>
                        <li>Multiple data augmentation strategies including geometric, intensity, and clinical transformations</li>
                        <li>Three-stage training pipeline:
                            <ul>
                                <li>Self-supervised pre training</li>
                                <li>Linear evaluation</li>
                                <li>Fine-tuning with gradual unfreezing</li>
                            </ul>
                        </li>
                    </ol>
                    <p>The model classified between three cognitive states (CN, MCI, Dementia) while addressing common challenges in medical imaging like limited labeled data.</p>
                </div>
            </div>
        </div>
    )
}