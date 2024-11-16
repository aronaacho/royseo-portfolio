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
                    <p>(이 발표 템플릿은 1월에 있을 발표를 위해 10월부터 We Care Reset의 후원으로 진행하고 있는 실험 '결과'를 보여드리기 위함입니다. 이 발표 템플릿은 11월 중순부터 제작을 시작하여 11월 말에 완성할 예정입니다.)</p>
                </div>
    
                <div className="slide-content">
                    <h2>Intro 11/14</h2>
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
    
                <div className="slide-content">
                    <h2>Intro - SimCLR 11/15-11/16</h2>
                    <hr/>
                    <div className="simclr-diagram" style={{ position: 'relative', margin: '40px auto', maxWidth: '800px' }}>
                        {/* Left Side Labels */}
                        <div style={{ position: 'absolute', left: '0', top: '20px', textAlign: 'left' }}>
                            <p><strong>z<sub>i</sub></strong> and <strong>z<sub>j</sub></strong> the final<br/>
                            projected representations</p>
                            
                            <p style={{ marginTop: '80px' }}>
                                <strong>h<sub>i</sub></strong> and <strong>h<sub>j</sub></strong> the projection head
                            </p>
                            
                            <p style={{ marginTop: '80px' }}>
                                <strong>x<sub>i</sub></strong> and <strong>x<sub>j</sub></strong> two different "views"<br/>
                                of the same image<br/>
                                after transformations
                            </p>
                        </div>
    
                        {/* Center Diagram */}
                        <div style={{ margin: '0 auto', width: '400px', position: 'relative' }}>
                            {/* Top Layer */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                                <div>z<sub>i</sub></div>
                                <div style={{ textAlign: 'center' }}>Maximize agreement</div>
                                <div>z<sub>j</sub></div>
                            </div>
    
                            {/* Middle Layer */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                                <div>g(·)</div>
                                <div style={{ textAlign: 'center' }}>Representation</div>
                                <div>g(·)</div>
                            </div>
    
                            {/* Bottom Layer */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                                <div>h<sub>i</sub></div>
                                <div>h<sub>j</sub></div>
                            </div>
    
                            {/* Base Layer */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>x<sub>i</sub></div>
                                <div style={{ textAlign: 'center' }}>
                                    <div>x</div>
                                    <div style={{ marginTop: '10px' }}>
                                        t ~ τ &nbsp;&nbsp;&nbsp; t' ~ τ
                                    </div>
                                </div>
                                <div>x<sub>j</sub></div>
                            </div>
                        </div>
    
                        {/* Right Side Labels */}
                        <div style={{ position: 'absolute', right: '0', top: '20px', textAlign: 'left', maxWidth: '250px' }}>
                            <p>g(·) the projection head that transforms<br/>
                            the representations into a space<br/>
                            where contrastive loss is applied</p>
                            
                            <p style={{ marginTop: '60px' }}>
                                f(·) represents the base encoder<br/>
                                network (usually a CNN)<br/>
                                that extracts features<br/>
                                from the transformed images
                            </p>
                        </div>
    
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <p><strong>t</strong> and <strong>t'</strong> represent different random transformations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}