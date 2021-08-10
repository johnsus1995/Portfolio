import './main.scss'
import Button from './Button'
function Main(){
    return (
        <div className="container">
            <div className="left">
                <div className="title">
                    <h1>Hi there, my name is JAISON JOHN. I'm a <span>Front end developer.</span></h1>
                    <Button className="btn"/>
                </div>
            </div>
            <div className="right">
                <div className="box1"></div>
                <div className="box2"></div>
            </div>
        </div>
    )
}
export default Main;