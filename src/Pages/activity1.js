import Lenis from "lenis"
export function ActivityOne() {
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
            <h1>Alzheimer's Disease Classification using SimCLR</h1>
            <hr></hr>
            <p># wecare_reset # 위케어리셋 # 암경험청년 # 한화생명 # 대한암협회</p>
            <p>한화생명, 대한암협회 스펙크루 '딥러닝' 팀입니다. 이 프로젝트는 적은 데이터 양으로도 SimCLR 알고리즘을 활용해 의사가 영상을 보고 진단을 내리기 전에 치매 진단을 학습시키는 실험입니다.</p>
            <p>This project implements a 3D Convolutional Neural Network (CNN) with SimCLR (Simple Framework for Contrastive Learning of Visual Representations) for Alzheimer's disease classification using MRI images. The model is designed to classify brain scans into three categories: Alzheimer's Disease (AD), Mild Cognitive Impairment (MCI), and Healthy Control (HC).</p>
            <h2>Datasets</h2>
            <hr></hr>

            <p>Here are the links:</p>
            <ul>
                <li>
                    <a href="https://adni.loni.usc.edu/data-samples/adni-data/neuroimaging/mri/mri-image-data-sets/">Raw data</a>
                    The ADNI 1 1.5T dataset was downloaded for this project.
                </li>
                <li><a href="https://storage.googleapis.com/colab-notebok-simclr/simclr/ADNI_Colab_uwdrive/">Normalized data</a>
                    This folder contains 1,941 preprocessed MRI scans from the ADNI 1 dataset. Ten scans were discarded due to normalization failures. Each file represents a brain scan cropped from (256x256x256) to (173x199x215) to remove the black background, followed by normalization.
                </li>
            </ul>

            <h2>Project Overview</h2>
            <hr></hr>
            <p>The main components of this project include:</p>
            <ol>
                <li>Data loading and preprocessing</li>
                <li>SimCLR model implementation</li>
                <li>Training with various data augmentation techniques
                    <img id="augmentation-img" src="https://raw.githubusercontent.com/royjoysoy/adni_cnn/refs/heads/main/images/augmentations.png" alt="Data Augmentations"/>
                    <p>This image shows different data augmentation techniques applied to brain MRI scans:</p>
                    <ul>
                        <li>Base: Original unmodified images</li>
                        <li>Flip: Vertical flipping of the images</li>
                        <li>Anisotropy: Adjusting image resolution</li>
                    </ul>
                    <p>The full list of image augmentation methods includes:</p>
                    <ul>
                        <li>Swap: Swapping certain parts of the image</li>
                        <li>Flip: Vertical flipping of the images</li>
                        <li>Anisotropy: Adjusting image resolution to simulate variations in scan quality</li>
                        <li>Swap: Swapping certain parts of the image to encourage learning of more general features</li>
                        <li>Elastic: Applying elastic deformations to simulate anatomical variability</li>
                        <li>Bias Field: Adding simulated intensity inhomogeneities to mimic MRI artifacts</li>
                        <li>Blur: Applying Gaussian blur to simulate motion or focus issues</li>
                        <li>Gamma: Adjusting image brightness and contrast</li>
                        <li>Spike: Adding spike noise to simulate scanner artifacts</li>
                        <li>Ghost: Simulating ghosting artifacts often seen in MRI</li>
                        <li>Noise: Adding random noise to the images</li>
                        <li>Motion: Simulating patient movement during scanning</li>
                        <li>Mixup: Blending two images together</li>
                        <li>CutMix: Replacing rectangular regions between images</li>
                    </ul>
                </li>
                <li value="5">Linear evaluation</li>
                <li>Final model evaluation</li>
            </ol>

            <p>These augmentation techniques help increase the diversity of the training data, potentially improving the model's ability to generalize to unseen data and handle various real-world imaging conditions.</p>

            <h2>Prerequisites</h2>
            <hr></hr>
            <p>For a list of required packages and versions, please see the <a href="https://github.com/royjoysoy/adni_cnn/blob/main/requirements.json">requirements.json</a> file.</p>

            <p>To install the required packages, you can use the following command:</p>
            <pre>
                <code>pip install -r &lt;(python -c "import json; print('\n'.join([f'\&#123;p\&#123;' for p in json.load(open('requirements.json'))['packages']]))")</code>
            </pre>

            <h2>Project Structure</h2>
            <hr></hr>
            <ul>
                <li><code>data_loading_RS_oct.py</code>: Contains functions for data loading and preprocessing</li>
                <li><code>model_RS_oct.py</code>: Defines the SimCLR3DCNN model architecture</li>
                <li><code>training_RS_oct.py</code>: Implements the training loop, linear evaluation, and final evaluation</li>
                <li><code>utils_RS_oct.py</code>: Utility functions for argument parsing, model saving/loading, and hardware info</li>
                <li><code>main_RS_oct.py</code>: The main script that orchestrates the entire training process</li>
            </ul>

            <h2>Usage</h2>
            <hr></hr>
            <p>To run the training process:</p>
            <pre>
                <code>
                    python main_RS_oct.py --data_path /path/to/your/data.csv --save_dir /path/to/save/results
                </code>
            </pre>

            <p>Additional arguments can be found in the <code>get_args()</code> function in <code>utils_RS_oct.py</code>.</p>

            <h2>Features</h2>
            <hr></hr>
            <ul>
                <li>SimCLR training with various data augmentation techniques</li>
                <li>Ablation study to compare different augmentation methods</li>
                <li>Linear evaluation of the trained model</li>
                <li>Final evaluation with detailed metrics and confusion matrix</li>
                <li>TensorBoard integration for monitoring training progress</li>
                <li>Mixed precision training for improved performance</li>
            </ul>

            <h2>Results</h2>
            <hr></hr>
            <p>The script will output:</p>
            <ul>
                <li>Training and validation losses</li>
                <li>Best model checkpoints</li>
                <li>Linear evaluation accuracy</li>
                <li>Final evaluation report with precision, recall, F1-score, F3-score, and F5-score for each class</li>
                <li>Confusion matrix</li>
                <li>Training time reports</li>
            </ul>

            <h2>Contributing</h2>
            <hr></hr>
            <p>Feel free to fork this <a href="https://github.com/royjoysoy/adni_cnn/tree/main">repository</a> and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.</p>

            <h2>License</h2>
            <hr></hr>
            <p><a href="https://opensource.org/licenses/MIT">MIT License</a></p>
        </div>
    </div>
    )
}