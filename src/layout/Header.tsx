import Logo from "../components/Logo.tsx";
import {Clock} from "../assets/icons/Clock.tsx";
import {useCurrentTime} from "../utils/hooks/useCurrentTime.ts";

const Header = () => {

    const {weekDay, currentDay, currentTime}= useCurrentTime()

    return (
            <header className="bg-white position-relative shadow-bottom z-2">
                <div className="container">
                    <div className='d-flex justify-content-between px-3 py-3 '>
                        <Logo/>
                        <input  className="form-control w-25" type="text" placeholder="" />
                        <div className='d-flex flex-column align-items-start gap-1' >
                            <div>{weekDay}</div>
                            <div className="d-flex justify-content-between align-items-center gap-1">
                                <div>{currentDay}</div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Clock size={12} color="#66b814" />
                                    <div>{currentTime}</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </header>

    )
}

export default Header