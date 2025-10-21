import {ShieldFull} from "../assets/icons/Shield-Full.tsx";

const Logo = () => {
    return (
        <div className='d-inline-flex align-items-center justify-content-center gap-2'>
            <ShieldFull size={24} color="#66b814" />
            <div className='text-uppercase text-green-50'>inventory</div>
        </div>
    )
}

export default Logo