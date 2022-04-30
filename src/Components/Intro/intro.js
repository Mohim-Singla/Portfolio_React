import './intro.scss'
import momo from './mohim2.png'
export default function Intro() {
  return (
    <div className='intro' id='Intro'>
      <div className='introWrapper'>
        <div>
          <img src={momo} alt="momo"></img>
        </div>
        <div className='introText'>
          <p>"Keep your Thoughts high above the Sky, Keeping your Foot on the Ground"</p>
        </div>
      </div>
    </div>
  )
}
