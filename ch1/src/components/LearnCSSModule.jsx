
import Styles from '../css/CSSModule.module.css'

const LearnCSSModule = () => {
  return (
    <>
    <p className={Styles.my_text_color}>Here only CSS Module used</p>
    
    <div className={`${Styles.my_text_color} underline text-4xl`}>Use CSSModule and Tailwind CSS both</div>
    
    </>
  )
}

export default LearnCSSModule